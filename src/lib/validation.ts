import { z } from 'zod';

export const registrationSchema = z.object({
  // Personal Step
  fullName: z.string().min(3, { message: "يرجى إدخال الاسم الكامل." }),
  email: z.string().email({ message: "أدخل بريدًا إلكترونيًا صحيحًا." }),
  phone: z.string().min(8, { message: "يرجى إدخال رقم WhatsApp صالح." }),
  age: z.number({ message: "يرجى إدخال عمرك كأرقام." }).min(15, { message: "يجب أن يكون العمر 15 سنة على الأقل." }),
  
  // Academic Step
  major: z.string().min(1, { message: "يرجى اختيار التخصص." }),
  majorOther: z.string().optional(),
  currentStatus: z.string().min(1, { message: "يرجى اختيار حالتك الحالية." }),
  gradDate: z.string().optional(),
  
  // Skills Step
  programmingLanguages: z.array(z.string()).min(1, { message: "اختر لغة واحدة على الأقل." }),
  programmingLanguagesOther: z.string().optional(),
  programmingLevel: z.string().min(1, { message: "يرجى تحديد مستواك في البرمجة." }),
  builtFullProject: z.string().min(1, { message: "يرجى الإجابة بنعم أو لا." }),
  hasGithub: z.string().min(1, { message: "يرجى الإجابة بنعم أو لا." }),
  linkedinUrl: z.string().url({ message: "تأكد من إدخال رابط صحيح يبدأ بـ http:// أو https://." }).optional().or(z.literal('')),
  
  // Readiness Step
  reasonToJoin: z.string().min(20, { message: "يرجى توضيح سبب رغبتك في الانضمام (20 حرفاً على الأقل)." }),
  biggestChallenge: z.array(z.string()).min(1, { message: "اختر إجابة واحدة على الأقل." }),
  biggestChallengeOther: z.string().optional(),
  expectedOutcome: z.string().min(20, { message: "يرجى توضيح ما تتوقع تحقيقه." }),
  commitTwoWeeks: z.string().min(1, { message: "يرجى الإجابة." }),
  commitSixHours: z.string().min(1, { message: "يرجى الإجابة." }),
  hasLaptop: z.string().min(1, { message: "يرجى الإجابة." }),
  aiTools: z.array(z.string()).min(1, { message: "اختر إجابة واحدة على الأقل." }),
  
  // Commitment Step
  commitTasksAndReviews: z.string().min(1, { message: "يرجى تأكيد التزامك." }),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
