import React from 'react';
import { ApplicationForm } from '../form/ApplicationForm';

export const Registration: React.FC = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <ApplicationForm />
        </div>
      </div>
    </section>
  );
};
