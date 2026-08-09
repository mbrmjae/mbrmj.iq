import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import type { RegistrationFormData } from '../../lib/validation';
import { Radio } from '../ui/Radio';
import { Checkbox } from '../ui/Checkbox';
import { Textarea } from '../ui/Textarea';
import { Input } from '../ui/Input';

export const ReadinessStep: React.FC = () => {
  const { register, watch, setValue, formState: { errors } } = useFormContext<RegistrationFormData>();

  const selectedChallenges = ([] as string[]).concat(watch('biggestChallenge') || []);
  const hasOtherChallenge = selectedChallenges.includes('أخرى');
  
  const aiTools = ([] as string[]).concat(watch('aiTools') || []);

  // Handle exclusive "None" selection for AI tools
  useEffect(() => {
    if (aiTools.length > 1) {
      if (aiTools[aiTools.length - 1] === 'لم أستخدم أيًا منها') {
        setValue('aiTools', ['لم أستخدم أيًا منها'], { shouldValidate: true });
      } else if (aiTools.includes('لم أستخدم أيًا منها')) {
        setValue('aiTools', aiTools.filter(t => t !== 'لم أستخدم أيًا منها'), { shouldValidate: true });
      }
    }
  }, [aiTools.join(','), setValue]);

  return (
    <div className="space-y-8">
      <Textarea
        label="لماذا تريد الانضمام لهذا البرنامج؟"
        placeholder="اشرح باختصار دافعك للانضمام وما تأمل تحقيقه..."
        maxLength={500}
        {...register('reasonToJoin')}
        error={errors.reasonToJoin?.message}
        required
      />

      <div>
        <label className="text-sm font-medium text-text-primary mb-3 block">
          ما أكبر تحدٍ تواجهه حاليًا؟ <span className="text-danger">*</span>
        </label>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'لا أعرف ماذا أبني',
            'لا أستطيع بناء مشروع بدون Tutorial',
            'لا أعرف كيف أبدأ مشروعًا حقيقيًا',
            'لا أعرف Git وGitHub جيدًا',
            'لا أعرف كيف أستخدم AI بطريقة صحيحة',
            'لا أحصل على مقابلات',
            'لا أجتاز المقابلات التقنية',
            'أخرى'
          ].map((challenge) => (
            <Checkbox
              key={challenge}
              label={challenge}
              value={challenge}
              {...register('biggestChallenge')}
            />
          ))}
        </div>
        {errors.biggestChallenge && <p className="text-sm text-danger mt-2">{errors.biggestChallenge.message}</p>}
        
        {hasOtherChallenge && (
          <div className="mt-4">
            <Input
              placeholder="يرجى كتابة التحدي الآخر"
              {...register('biggestChallengeOther')}
            />
          </div>
        )}
      </div>

      <Textarea
        label="ما الذي تتوقع تحقيقه بنهاية البرنامج؟"
        placeholder="أخبرنا بتوقعاتك..."
        maxLength={300}
        {...register('expectedOutcome')}
        error={errors.expectedOutcome?.message}
        required
      />

      <div>
        <label className="text-sm font-medium text-text-primary mb-3 block">
          هل تستطيع الالتزام لمدة أسبوعين؟ <span className="text-danger">*</span>
        </label>
        <div className="flex gap-6">
          <Radio label="نعم" value="نعم" {...register('commitTwoWeeks')} />
          <Radio label="لا" value="لا" {...register('commitTwoWeeks')} />
        </div>
        {errors.commitTwoWeeks && <p className="text-sm text-danger mt-2">{errors.commitTwoWeeks.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium text-text-primary mb-3 block">
          هل تستطيع تخصيص حوالي 6 ساعات أسبوعيًا للمشروع؟ <span className="text-danger">*</span>
        </label>
        <div className="flex gap-6">
          <Radio label="نعم" value="نعم" {...register('commitSixHours')} />
          <Radio label="لا" value="لا" {...register('commitSixHours')} />
          <Radio label="ربما" value="ربما" {...register('commitSixHours')} />
        </div>
        {errors.commitSixHours && <p className="text-sm text-danger mt-2">{errors.commitSixHours.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium text-text-primary mb-3 block">
          هل لديك جهاز Laptop مناسب للتطوير؟ <span className="text-danger">*</span>
        </label>
        <div className="flex gap-6">
          <Radio label="نعم" value="نعم" {...register('hasLaptop')} />
          <Radio label="لا" value="لا" {...register('hasLaptop')} />
          <Radio label="ربما" value="ربما" {...register('hasLaptop')} />
        </div>
        {errors.hasLaptop && <p className="text-sm text-danger mt-2">{errors.hasLaptop.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium text-text-primary mb-3 block">
          هل سبق أن استخدمت أدوات الذكاء الاصطناعي في البرمجة؟
        </label>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'ChatGPT',
            'Claude',
            'GitHub Copilot',
            'Cursor',
            'Gemini',
            'Windsurf',
            'Antigravity AI',
            'لم أستخدم أيًا منها'
          ].map((tool) => (
            <Checkbox
              key={tool}
              label={tool}
              value={tool}
              {...register('aiTools')}
            />
          ))}
        </div>
        {errors.aiTools && <p className="text-sm text-danger mt-2">{errors.aiTools.message}</p>}
      </div>
    </div>
  );
};
