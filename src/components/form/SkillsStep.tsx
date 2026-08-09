import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { RegistrationFormData } from '../../lib/validation';
import { Radio } from '../ui/Radio';
import { Checkbox } from '../ui/Checkbox';
import { Input } from '../ui/Input';

export const SkillsStep: React.FC = () => {
  const { register, watch, formState: { errors } } = useFormContext<RegistrationFormData>();

  const selectedLangs = ([] as string[]).concat(watch('programmingLanguages') || []);
  const hasOtherLang = selectedLangs.includes('أخرى');

  return (
    <div className="space-y-8">
      <div>
        <label className="text-sm font-medium text-text-primary mb-3 block">
          ما اللغات البرمجية التي تستطيع استخدامها؟ <span className="text-danger">*</span>
        </label>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'Python',
            'JavaScript',
            'Java',
            'C#',
            'C++',
            'SQL',
            'أخرى'
          ].map((lang) => (
            <Checkbox
              key={lang}
              label={lang}
              value={lang}
              {...register('programmingLanguages')}
            />
          ))}
        </div>
        {errors.programmingLanguages && <p className="text-sm text-danger mt-2">{errors.programmingLanguages.message}</p>}
        
        {hasOtherLang && (
          <div className="mt-4">
            <Input
              placeholder="يرجى كتابة اللغات الأخرى"
              {...register('programmingLanguagesOther')}
            />
          </div>
        )}
      </div>

      <div>
        <label className="text-sm font-medium text-text-primary mb-3 block">
          ما هو مستواك في البرمجة؟ <span className="text-danger">*</span>
        </label>
        <div className="grid sm:grid-cols-2 gap-3">
          {['مبتدئ', 'متوسط', 'جيد', 'متقدم'].map((level) => (
            <Radio
              key={level}
              label={level}
              value={level}
              {...register('programmingLevel')}
            />
          ))}
        </div>
        {errors.programmingLevel && <p className="text-sm text-danger mt-2">{errors.programmingLevel.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium text-text-primary mb-3 block">
          هل سبق أن طورت مشروعًا كاملًا بنفسك؟ <span className="text-danger">*</span>
        </label>
        <div className="flex gap-6">
          <Radio label="نعم" value="نعم" {...register('builtFullProject')} />
          <Radio label="لا" value="لا" {...register('builtFullProject')} />
        </div>
        {errors.builtFullProject && <p className="text-sm text-danger mt-2">{errors.builtFullProject.message}</p>}
      </div>

      <div>
        <label className="text-sm font-medium text-text-primary mb-3 block">
          هل لديك GitHub؟ <span className="text-danger">*</span>
        </label>
        <div className="flex gap-6">
          <Radio label="نعم" value="نعم" {...register('hasGithub')} />
          <Radio label="لا" value="لا" {...register('hasGithub')} />
        </div>
        {errors.hasGithub && <p className="text-sm text-danger mt-2">{errors.hasGithub.message}</p>}
      </div>

      <Input
        label="رابط LinkedIn (اختياري)"
        type="url"
        placeholder="https://linkedin.com/in/..."
        dir="ltr"
        className="text-left"
        {...register('linkedinUrl')}
        error={errors.linkedinUrl?.message}
      />
    </div>
  );
};
