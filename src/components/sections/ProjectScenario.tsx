import React from 'react';
import { motion } from 'motion/react';
import { Code2, IdCard, FileSignature, FolderGit2 } from 'lucide-react';

export const ProjectScenario: React.FC = () => {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Dynamic ambient lights */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-brand-mint/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6 text-white tracking-tight">
              ماذا ستتسلم في يومك الأول؟
            </h2>
            <p className="text-lg text-white/70 leading-relaxed font-light">
              بمجرد قبولك في البرنامج، ستحصل على حقيبة العمل الخاصة بك والتي تحاكي تماماً ما يستلمه الموظف الجديد في الشركات التقنية.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          
          {/* PRD - Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-[#0A1118]/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center gap-8 group hover:border-brand-mint/30 transition-colors"
          >
            <div className="flex-1">
              <div className="w-12 h-12 rounded-xl bg-brand-mint/20 text-brand-mint flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(103,202,173,0.15)]">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">وثيقة متطلبات المنتج (PRD)</h3>
              <p className="text-white/60 leading-relaxed">
                ملف شامل يحتوي على تفاصيل المشروع، أهداف النظام، السيناريوهات المتوقعة، وواجهات المستخدم المطلوبة. ستتعلم كيف تحلل المتطلبات وتحولها إلى كود برمجي.
              </p>
            </div>
            <div className="w-full md:w-5/12 shrink-0 relative rounded-xl overflow-hidden shadow-2xl border border-white/5 group-hover:scale-105 transition-transform duration-500">
               <img src={`${import.meta.env.BASE_URL}assets/PRD-Cover.png`} alt="PRD Cover" className="w-full h-auto object-cover" />
            </div>
          </motion.div>

          {/* GitHub Repo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className="md:col-span-4 bg-[#0A1118]/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:border-white/30 transition-colors flex flex-col justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center mb-6">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">مستودع الكود (GitHub Repo)</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              صلاحية الدخول لمستودع كود المشروع الأساسي لتبدأ العمل مباشرة، مجهز بالهيكل الأولي للكود.
            </p>
          </motion.div>

          {/* Employee ID */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.08 }}
            className="md:col-span-4 bg-[#0A1118]/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:border-blue-400/30 transition-colors flex flex-col justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
              <IdCard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">هوية الموظف (Employee ID)</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              رقم وظيفي افتراضي يمنحك شعور الانتماء لفريق العمل ويُستخدم لتعريفك في النظام والمستندات.
            </p>
          </motion.div>

          {/* Agreement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.11 }}
            className="md:col-span-4 bg-[#0A1118]/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:border-yellow-400/30 transition-colors flex flex-col justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-6">
              <FileSignature className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">اتفاقية العمل (Agreement)</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              ميثاق التزام يحاكي عقود العمل الحقيقية، يوضح مسؤولياتك والمهام المتوقعة منك خلال البرنامج.
            </p>
          </motion.div>

          {/* Google Drive Workspace */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.14 }}
            className="md:col-span-4 bg-[#0A1118]/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:border-brand-mint/30 transition-colors flex flex-col justify-between"
          >
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <img src={`${import.meta.env.BASE_URL}assets/Google_Drive_icon_(2020).svg`} alt="Google Drive" className="w-8 h-8" />
                <h3 className="text-xl font-bold text-white">مساحة عمل سحابية</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                مجلد Drive مخصص يضم مستندات التتبع والنماذج لتنظيم عملك كمطور.
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <img src={`${import.meta.env.BASE_URL}assets/Google_Sheets_Logo_512px.png`} alt="Google Sheets" className="w-7 h-7" />
                <div className="flex flex-col">
                  <span className="text-white text-sm font-medium">جدول تتبع الإنجاز</span>
                  <span className="text-white/40 text-xs mt-0.5">Progress Tracking</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <img src={`${import.meta.env.BASE_URL}assets/google-doc.png`} alt="Google Docs" className="w-7 h-7" />
                <div className="flex flex-col">
                  <span className="text-white text-sm font-medium">نماذج التقارير</span>
                  <span className="text-white/40 text-xs mt-0.5">Docs Templates</span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
