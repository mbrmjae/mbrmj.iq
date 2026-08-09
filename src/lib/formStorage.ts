import type { RegistrationFormData } from './validation';

const DRAFT_KEY = 'mbrmj_registration_draft';

export const saveDraft = (data: Partial<RegistrationFormData>) => {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save draft:', error);
  }
};

export const getDraft = (): Partial<RegistrationFormData> | null => {
  try {
    const draft = localStorage.getItem(DRAFT_KEY);
    return draft ? JSON.parse(draft) : null;
  } catch (error) {
    console.error('Failed to load draft:', error);
    return null;
  }
};

export const clearDraft = () => {
  try {
    localStorage.removeItem(DRAFT_KEY);
  } catch (error) {
    console.error('Failed to clear draft:', error);
  }
};
