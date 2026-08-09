# 🌐 برنامج Mbrmj | محاكاة بيئة العمل البرمجية
### Mbrmj Program | Software Development Work Environment Simulation

صفحة الهبوط وبوابة التسجيل الإلكترونية لـ **برنامج مبرمج (Mbrmj)** - وهو برنامج تطبيقي مكثف لمدة أسبوعين يحاكي بيئة العمل الحقيقية في الشركات التقنية لمساعدة الطلاب والخريجين على الجسر بين الدراسة الأكاديمية والخبرة العملية.

This is the landing page and multi-step registration portal for the **Mbrmj Program**, a 2-week practical simulation designed to bridge the gap between academic learning and real-world software engineering roles.

---

## 🚀 التقنيات المستخدمة (Tech Stack)

تم بناء الموقع باستخدام أحدث التقنيات وأفضل ممارسات الويب لتقديم تجربة مستخدم سريعة، تفاعلية، وجميلة:

- **Core & Runtime:** React 19 + TypeScript + Vite 8
- **Styling:** [Tailwind CSS v4.0](https://tailwindcss.com/) (تنسيق فائق السرعة يدعم المتغيرات والـ Nesting)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (تفاعلات وحركات سلسة وديناميكية)
- **Form Management:** [React Hook Form](https://react-hook-form.com/) (إدارة حالة الاستمارة بأداء عالٍ وبدون إعادة تحميل الصفحات)
- **Validation:** [Zod](https://zod.dev/) (التحقق من صحة المدخلات على جانب العميل وتجنب الأخطاء)
- **Icons:** [Lucide React](https://lucide.dev/) (أيقونات حديثة وبسيطة)
- **Quality & Linting:** [Oxlint](https://oxc.rs/) (محلل كود فائق السرعة)

---

## ✨ ميزات الموقع (Key Features)

1. **تصميم عصري وجذاب (Premium Aesthetics):** ثيم داكن هادئ مع إضاءات خلفية وتأثيرات زجاجية (Glassmorphism) تتناسب مع الطابع البرمجي.
2. **استمارة تسجيل متعددة الخطوات (Multi-step Form):**
   - **البيانات الشخصية (Personal Info)**
   - **الخلفية الأكاديمية (Academic Background)**
   - **المهارات والخبرة التقنية (Technical Skills)**
   - **الاستعداد والجاهزية (Readiness & Setup)**
   - **الالتزام والتأكيد (Commitment)**
3. **تحقق ذكي وفوري (Smart Validation):** تحقق لحظي من المدخلات باستخدام Zod لضمان دقة البيانات المدخلة قبل الإرسال.
4. **تجاوب كامل (Fully Responsive):** متوافق مع جميع الشاشات والأجهزة (هواتف، أجهزة لوحية، وحواسيب).
5. **تحسين محركات البحث وسرعة الأداء (SEO & Performance Optimized).**

---

## 📂 هيكلية المجلدات (Project Directory Structure)

```text
MbrmjLandingPage/
├── public/                 # الملفات العامة والصور (Assets, favicon)
│   └── assets/            # أيقونات التقنيات وتصاميم البرنامج
├── src/
│   ├── assets/            # الصور والملفات الصوتية/المرئية للواجهة
│   ├── components/
│   │   ├── form/          # مكونات استمارة التسجيل متعددة الخطوات
│   │   ├── layout/        # الهيكل العام (Header & Footer)
│   │   ├── sections/      # أقسام صفحة الهبوط (Hero, FAQ, Timeline...)
│   │   └── ui/            # مكونات الواجهة الأساسية القابلة لإعادة الاستخدام (Button, Input)
│   ├── config/            # نصوص وبيانات الاستمارة والمحتوى
│   ├── lib/               # دوال وأدوات مساعدة (Tailwind Merge utilities)
│   ├── App.tsx            # المكون الأساسي للتطبيق وترتيب الأقسام
│   ├── index.css          # ملف الأنماط والتصميم الأساسي
│   └── main.tsx           # نقطة انطلاق التطبيق
├── vite.config.ts         # إعدادات Vite
└── package.json           # الحزم والاعتمادات
```

---

## 💻 التشغيل المحلي (Local Development)

لتشغيل المشروع محلياً على جهازك، اتبع الخطوات التالية:

1. **تحميل الاعتمادات (Install Dependencies):**
   ```bash
   npm install
   ```

2. **تشغيل خادم التطوير (Run Development Server):**
   ```bash
   npm run dev
   ```
   *سيتم فتح المشروع تلقائياً على الرابط المحلي: `http://localhost:5173`*

3. **بناء نسخة الإنتاج (Build for Production):**
   ```bash
   npm run build
   ```

4. **معاينة نسخة الإنتاج (Preview Production Build):**
   ```bash
   npm run preview
   ```

---

## 🌐 الاستضافة على GitHub Pages (GitHub Hosting Guide)

نعم! يمكنك استضافة هذا المشروع مجاناً وبسهولة على **GitHub Pages**. كون المشروع تطبيقاً ثابتاً (Static Web Application) مبنياً بـ Vite، تتوفر طريقتان رئيسيتان للاستضافة:

### ⚠️ ملاحظة هامة قبل البدء (Important Note)
إذا كان اسم مستودعك على GitHub هو `MbrmjLandingPage` (وليس النطاق الرئيسي المباشر `username.github.io`)، يجب عليك تعديل مسار التطبيق الأساسي في ملف `vite.config.ts` لإضافة اسم المستودع، وذلك لتجنب عدم تحميل ملفات الـ CSS والـ JS:

قم بتحديث ملف [vite.config.ts](file:///c:/Users/ahmad%20yacine/Desktop/MbrmjLandingPage/vite.config.ts) كالتالي:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/MbrmjLandingPage/', // <-- أضف اسم مستودعك هنا بين شرطتين مائلتين
  plugins: [
    tailwindcss(),
    react(),
  ],
})
```

---

### 🛠️ الطريقة الأولى: النشر الآلي باستخدام GitHub Actions (الموصى بها)

هذه الطريقة تقوم ببناء المشروع ونشره تلقائياً في كل مرة تقوم فيها برفع كود جديد (Push) إلى فرع `main`.

1. أنشئ مجلداً باسم `.github` وبداخله مجلد `workflows` في جذر المشروع.
2. أنشئ ملفاً بداخله باسم `deploy.yml` واكتب فيه الكود التالي:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main # اسم الفرع الأساسي الخاص بك

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist # المجلد الذي يحتوي على كود الإنتاج الجاهز
          branch: gh-pages # الفرع الذي سيتم نشر الموقع عليه
```

3. ارفع التغييرات إلى GitHub:
   ```bash
   git add .
   git commit -m "Add GitHub deployment workflow"
   git push origin main
   ```
4. اذهب إلى إعدادات المستودع على GitHub: **Settings > Pages**
5. تحت قسم **Build and deployment > Source**، تأكد من اختيار **Deploy from a branch**.
6. اختر فرع **`gh-pages`** والمجلد **`/ (root)`** ثم اضغط على **Save**.
7. خلال دقائق، سيظهر رابط موقعك المباشر في الأعلى.

---

### 📦 الطريقة الثانية: النشر اليدوي باستخدام حزمة `gh-pages`

إذا كنت تفضل النشر يدوياً من جهازك دون استخدام سيرفرات GitHub للـ Build:

1. قم بتثبيت حزمة النشر كاعتماد تطويري:
   ```bash
   npm install -D gh-pages
   ```

2. افتح ملف `package.json` وأضف السطور التالية إلى قسم `"scripts"`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. قم بربط مشروعك بمستودع GitHub (إذا لم يكن مربوطاً بالفعل):
   ```bash
   git remote add origin https://github.com/username/MbrmjLandingPage.git
   ```

4. قم بنشر الموقع مباشرة بأمر واحد:
   ```bash
   npm run deploy
   ```
   *سيقوم هذا الأمر ببناء المشروع تلقائياً ونقل مجلد `dist` إلى فرع `gh-pages` ورفعه إلى مستودعك.*

5. تأكد من تفعيل فرع `gh-pages` في خيارات GitHub Pages كما هو موضح في خطوة (5 و 6) من الطريقة الأولى.

---

## 🤝 المساهمة (Contribution)
إذا كنت ترغب في تحسين صفحة الهبوط أو تعديل الأقسام، يسعدنا استقبال مقترحاتكم وسحب طلبات التعديل (Pull Requests).
