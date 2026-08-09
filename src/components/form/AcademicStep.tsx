import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { RegistrationFormData } from '../../lib/validation';
import { Radio } from '../ui/Radio';
import { Input } from '../ui/Input';

export const AcademicStep: React.FC = () => {
  const { register, watch, formState: { errors } } = useFormContext<RegistrationFormData>();

  const selectedMajor = watch('major');
  const isGraduate = watch('currentStatus') === 'خريج حديث' || watch('currentStatus') === 'موظف' || watch('currentStatus') === 'أبحث عن عمل';

  return (
    <div className="space-y-8">
      <div>
        <label className="text-sm font-medium text-text-primary mb-3 block">
          ما هو تخصصك؟ <span className="text-danger">*</span>
        </label>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'هندسة البرمجيات',
            'علوم الحاسب',
            'تقنية المعلومات', // Note: backend value mapped to 'قنية المعلومات' in submit logic if needed
            'الذكاء الاصطناعي',
            'هندسة الحاسب',
            'أخرى'
          ].map((major) => (
            <Radio
              key={major}
              label={major}
              value={major}
              {...register('major')}
            />
          ))}
        </div>
        {errors.major && <p className="text-sm text-danger mt-2">{errors.major.message}</p>}
        
        {selectedMajor === 'أخرى' && (
          <div className="mt-4">
            <Input
              placeholder="يرجى كتابة تخصصك"
              {...register('majorOther')}
            />
          </div>
        )}
      </div>

      <div>
        <label className="text-sm font-medium text-text-primary mb-3 block">
          ما هي حالتك الحالية؟ <span className="text-danger">*</span>
        </label>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            'طالب جامعي',
            'خريج حديث',
            'موظف',
            'أبحث عن عمل',
            'متدرب'
          ].map((status) => (
            <Radio
              key={status}
              label={status}
              value={status}
              {...register('currentStatus')}
            />
          ))}
        </div>
        {errors.currentStatus && <p className="text-sm text-danger mt-2">{errors.currentStatus.message}</p>}
      </div>

      {isGraduate && (
        <Input
          label="سنة التخرج (إن كنت متخرجًا)"
          type="date"
          className="w-full sm:max-w-[200px]"
          {...register('gradDate')}
        />
      )}
    </div>
  );
};
