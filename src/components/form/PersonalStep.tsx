import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { RegistrationFormData } from '../../lib/validation';
import { Input } from '../ui/Input';

export const PersonalStep: React.FC = () => {
  const { register, formState: { errors } } = useFormContext<RegistrationFormData>();

  return (
    <div className="space-y-6">
      <Input
        label="الاسم الكامل"
        placeholder="أدخل اسمك الكامل"
        {...register('fullName')}
        error={errors.fullName?.message}
        required
      />
      
      <Input
        label="البريد الإلكتروني"
        type="email"
        placeholder="example@email.com"
        dir="ltr"
        className="text-left"
        {...register('email')}
        error={errors.email?.message}
        required
      />

      <Input
        label="رقم الهاتف (واتساب)"
        type="tel"
        placeholder="+964..."
        dir="ltr"
        className="text-left"
        {...register('phone')}
        error={errors.phone?.message}
        required
      />

      <Input
        label="العمر"
        type="number"
        placeholder="مثال: 22"
        {...register('age', { valueAsNumber: true })}
        error={errors.age?.message}
        required
      />
    </div>
  );
};
