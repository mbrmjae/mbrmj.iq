import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { RegistrationFormData } from '../../lib/validation';
import { Radio } from '../ui/Radio';

export const CommitmentStep: React.FC = () => {
  const { register, watch, formState: { errors } } = useFormContext<RegistrationFormData>();

  const commitTasks = watch('commitTasksAndReviews');

  return (
    <div className="space-y-8">
      <div className="bg-brand-navy/5 p-6 rounded-xl border border-brand-navy/10">
        <label className="text-base font-medium text-brand-navy mb-4 block leading-relaxed">
          هذا البرنامج ليس دورة برمجية تقليدية، بل يحاكي بيئة عمل حقيقية داخل Startup. هل أنت مستعد للالتزام بإنجاز المهام الأسبوعية والمشاركة في جلسات المراجعة؟ <span className="text-danger">*</span>
        </label>
        <div className="flex flex-col gap-4">
          <Radio label="نعم، أنا مستعد للالتزام" value="نعم" {...register('commitTasksAndReviews')} />
          <Radio label="لا، قد لا أتمكن من الالتزام" value="لا" {...register('commitTasksAndReviews')} />
        </div>
        {errors.commitTasksAndReviews && <p className="text-sm text-danger mt-3">{errors.commitTasksAndReviews.message}</p>}
      </div>

      {commitTasks === 'لا' && (
        <div className="p-4 bg-brand-yellow/10 border border-brand-yellow/30 rounded-lg text-brand-navy text-sm leading-relaxed">
          <strong>ملاحظة:</strong> الالتزام بالمهام الأسبوعية وجلسات المراجعة هو معيار أساسي لاختيار المشاركين في الدفعة الأولى نظرًا لمحدودية المقاعد. إذا كنت غير متأكد من تفرغك، قد يكون من الأفضل الانتظار للتدريبات القادمة.
        </div>
      )}
    </div>
  );
};
