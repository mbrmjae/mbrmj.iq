import React, { useState, useEffect, useRef } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

import { registrationSchema } from '../../lib/validation';
import type { RegistrationFormData } from '../../lib/validation';
import { saveDraft, getDraft, clearDraft } from '../../lib/formStorage';
import { GOOGLE_FORM_ACTION, GOOGLE_FORM_FALLBACK_URL, FormFields, OTHER_OPTION_VALUE } from '../../config/applicationForm';

import { FormProgress } from './FormProgress';
import { PersonalStep } from './PersonalStep';
import { AcademicStep } from './AcademicStep';
import { SkillsStep } from './SkillsStep';
import { ReadinessStep } from './ReadinessStep';
import { CommitmentStep } from './CommitmentStep';
import { Button } from '../ui/Button';

const steps = [
  'المعلومات الشخصية',
  'الخلفية الأكاديمية',
  'المهارات التقنية',
  'الاستعداد للبرنامج',
  'الالتزام'
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const ApplicationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const methods = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    mode: 'onTouched',
    defaultValues: getDraft() || {},
  });

  const { handleSubmit, trigger, watch, formState: { isValid } } = methods;

  // Save draft on change
  useEffect(() => {
    const subscription = watch((value) => {
      if (status !== 'success') {
        saveDraft(value as Partial<RegistrationFormData>);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, status]);

  // Handle iframe load for success state detection
  useEffect(() => {
    const iframe = document.getElementById('google-form-response') as HTMLIFrameElement;
    const handleLoad = () => {
      if (hasSubmitted) {
        setStatus('success');
        clearDraft();
      }
    };
    if (iframe) {
      iframe.addEventListener('load', handleLoad);
    }
    return () => {
      if (iframe) iframe.removeEventListener('load', handleLoad);
    };
  }, [hasSubmitted]);

  const handleNext = async () => {
    // Determine which fields to validate based on current step
    let fieldsToValidate: (keyof RegistrationFormData)[] = [];
    switch (currentStep) {
      case 0: fieldsToValidate = ['fullName', 'email', 'phone', 'age']; break;
      case 1: fieldsToValidate = ['major', 'majorOther', 'currentStatus', 'gradDate']; break;
      case 2: fieldsToValidate = ['programmingLanguages', 'programmingLanguagesOther', 'programmingLevel', 'builtFullProject', 'hasGithub', 'linkedinUrl']; break;
      case 3: fieldsToValidate = ['reasonToJoin', 'biggestChallenge', 'biggestChallengeOther', 'expectedOutcome', 'commitTwoWeeks', 'commitSixHours', 'hasLaptop', 'aiTools']; break;
      case 4: fieldsToValidate = ['commitTasksAndReviews']; break;
    }

    const isStepValid = await trigger(fieldsToValidate);
    
    if (isStepValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
      // Focus first input of next step
      setTimeout(() => {
        const activeStep = document.querySelector('.step-container');
        if (activeStep) {
          const firstInput = activeStep.querySelector('input, textarea') as HTMLElement;
          if (firstInput) firstInput.focus();
        }
      }, 100);
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = (_data: RegistrationFormData) => {
    setStatus('submitting');
    setHasSubmitted(true);
    
    // The actual submission is handled by the native HTML form targeting the hidden iframe.
    // We just need to trigger it.
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.submit();
      }
      
      // Fallback timeout in case iframe onload fails
      setTimeout(() => {
        if (status === 'submitting') {
          setStatus('error');
        }
      }, 8000);
    }, 100);
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 md:p-12 rounded-2xl border border-border shadow-sm text-center"
      >
        <div className="w-20 h-20 bg-brand-mint/10 text-brand-mint rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-brand-navy mb-4">تم استلام طلبك بنجاح</h3>
        <p className="text-text-secondary leading-relaxed max-w-md mx-auto">
          شكرًا لاهتمامك بالانضمام إلى Mbrmj. سنراجع طلبك ونتواصل مع الطلاب المقبولين عبر البريد الإلكتروني أو WhatsApp.
        </p>
      </motion.div>
    );
  }

  const formData = watch();

  return (
    <div className="bg-white p-6 md:p-10 rounded-3xl border border-border/80 shadow-[0_20px_50px_rgba(27,50,80,0.05)] relative overflow-hidden" id="registration">
      {/* Top accent gradient bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-navy via-brand-mint to-brand-yellow"></div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-brand-navy mb-2">قدّم طلبك للدفعة الأولى</h2>
        <p className="text-text-secondary">
          أجب بوضوح وصدق. ستُستخدم معلوماتك لمراجعة طلب الانضمام والتواصل معك بشأن البرنامج.
        </p>
      </div>

      <FormProgress currentStep={currentStep} totalSteps={steps.length} steps={steps} />

      {status === 'error' && (
        <div className="mb-6 p-4 bg-danger/10 border border-danger/20 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-danger shrink-0 mt-0.5" />
          <div>
            <p className="text-danger font-medium mb-1">حدث خطأ أثناء إرسال الطلب.</p>
            <p className="text-sm text-danger/80">
              يرجى المحاولة مرة أخرى أو استخدام <a href={GOOGLE_FORM_FALLBACK_URL} target="_blank" rel="noreferrer" className="underline font-bold">هذا الرابط المباشر</a> لتعبئة النموذج.
            </p>
          </div>
        </div>
      )}

      <FormProvider {...methods}>
        {/* Hidden Form for native submission */}
        <form 
          ref={formRef}
          method="POST" 
          action={GOOGLE_FORM_ACTION} 
          target="google-form-response"
          className="hidden"
        >
          <input type="hidden" name={FormFields.fullName} value={formData.fullName || ''} />
          <input type="hidden" name={FormFields.email} value={formData.email || ''} />
          <input type="hidden" name={FormFields.phone} value={formData.phone || ''} />
          <input type="hidden" name={FormFields.age} value={formData.age || ''} />
          
          {/* Major */}
          <input type="hidden" name={FormFields.major} value={formData.major === 'تقنية المعلومات' ? 'قنية المعلومات' : (formData.major === 'أخرى' ? OTHER_OPTION_VALUE : formData.major || '')} />
          {formData.major === 'أخرى' && (
            <input type="hidden" name={`${FormFields.major}.other_option_response`} value={formData.majorOther || ''} />
          )}

          <input type="hidden" name={FormFields.currentStatus} value={formData.currentStatus || ''} />
          
          {/* Split Date */}
          {formData.gradDate && (
            <>
              <input type="hidden" name={FormFields.gradYear} value={formData.gradDate.split('-')[0]} />
              <input type="hidden" name={FormFields.gradMonth} value={formData.gradDate.split('-')[1]} />
              <input type="hidden" name={FormFields.gradDay} value={formData.gradDate.split('-')[2]} />
            </>
          )}

          {/* Programming Languages - Multiple checkboxes */}
          {([] as string[]).concat(formData.programmingLanguages || []).map(lang => {
            if (lang === 'أخرى') {
              return (
                <React.Fragment key="other_lang">
                  <input type="hidden" name={FormFields.programmingLanguages} value={OTHER_OPTION_VALUE} />
                  <input type="hidden" name={`${FormFields.programmingLanguages}.other_option_response`} value={formData.programmingLanguagesOther || ''} />
                </React.Fragment>
              );
            }
            return <input key={lang} type="hidden" name={FormFields.programmingLanguages} value={lang} />;
          })}

          <input type="hidden" name={FormFields.programmingLevel} value={formData.programmingLevel || ''} />
          <input type="hidden" name={FormFields.builtFullProject} value={formData.builtFullProject || ''} />
          <input type="hidden" name={FormFields.hasGithub} value={formData.hasGithub || ''} />
          <input type="hidden" name={FormFields.linkedinUrl} value={formData.linkedinUrl || ''} />
          
          <input type="hidden" name={FormFields.reasonToJoin} value={formData.reasonToJoin || ''} />
          
          {/* Biggest Challenge - Multiple checkboxes */}
          {([] as string[]).concat(formData.biggestChallenge || []).map(challenge => {
            if (challenge === 'أخرى') {
              return (
                <React.Fragment key="other_challenge">
                  <input type="hidden" name={FormFields.biggestChallenge} value={OTHER_OPTION_VALUE} />
                  <input type="hidden" name={`${FormFields.biggestChallenge}.other_option_response`} value={formData.biggestChallengeOther || ''} />
                </React.Fragment>
              );
            }
            return <input key={challenge} type="hidden" name={FormFields.biggestChallenge} value={challenge} />;
          })}

          <input type="hidden" name={FormFields.expectedOutcome} value={formData.expectedOutcome || ''} />
          <input type="hidden" name={FormFields.commitTwoWeeks} value={formData.commitTwoWeeks || ''} />
          <input type="hidden" name={FormFields.commitSixHours} value={formData.commitSixHours || ''} />
          <input type="hidden" name={FormFields.hasLaptop} value={formData.hasLaptop || ''} />
          
          {([] as string[]).concat(formData.aiTools || []).map(tool => (
            <input key={tool} type="hidden" name={FormFields.aiTools} value={tool} />
          ))}

          <input type="hidden" name={FormFields.commitTasksAndReviews} value={formData.commitTasksAndReviews || ''} />
        </form>

        <div className="step-container py-2 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {currentStep === 0 && <PersonalStep />}
              {currentStep === 1 && <AcademicStep />}
              {currentStep === 2 && <SkillsStep />}
              {currentStep === 3 && <ReadinessStep />}
              {currentStep === 4 && <CommitmentStep />}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-between items-center mt-10 pt-6 border-t border-border">
          <Button
            type="button"
            variant="ghost"
            onClick={handlePrev}
            disabled={currentStep === 0 || status === 'submitting'}
            className={currentStep === 0 ? 'invisible' : ''}
          >
            السابق
          </Button>
          
          {currentStep < steps.length - 1 ? (
            <Button
              type="button"
              onClick={handleNext}
              disabled={status === 'submitting'}
            >
              التالي
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleSubmit(onSubmit)}
              disabled={status === 'submitting' || !isValid}
              className="min-w-[140px]"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin ml-2" />
                  جاري الإرسال
                </>
              ) : (
                'إرسال الطلب'
              )}
            </Button>
          )}
        </div>
      </FormProvider>

      <iframe
        id="google-form-response"
        name="google-form-response"
        title="Google Form response"
        className="hidden"
      ></iframe>
    </div>
  );
};
