import { Shield, Mail, Globe, Clock, ChevronRight } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
        {/* Header Section */}
        <div className="p-8 text-center border-b border-border">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
            <Shield size={32} />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">سياسة الخصوصية</h1>
          <div className="flex items-center justify-center text-muted-foreground text-sm gap-2">
            <Clock size={16} />
            <span>آخر تحديث: 11 مارس 2026</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-8">
          <p className="text-muted-foreground text-lg leading-relaxed">
            في <span className="font-bold text-primary">Connect Tech</span>، نلتزم بحماية خصوصية بياناتكم وضمان أمان المعلومات التي تشاركونها معنا. توضح هذه السياسة كيفية جمعنا واستخدامنا وحماية بياناتكم عند استخدام منصاتنا وخدماتنا.
          </p>

          <section>
            <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              1. المعلومات التي نجمعها
            </h2>
            <p className="text-muted-foreground mb-4">نحن نجمع المعلومات اللازمة فقط لتقديم خدماتنا بكفاءة، وتشمل:</p>
            <ul className="space-y-3 pr-4">
              <li className="flex gap-3 text-muted-foreground">
                <ChevronRight className="text-primary shrink-0 mt-1" size={18} />
                <span><strong>المعلومات الشخصية:</strong> مثل الاسم، البريد الإلكتروني، ورقم الهاتف عند التسجيل.</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <ChevronRight className="text-primary shrink-0 mt-1" size={18} />
                <span><strong>معلومات النشاط التجاري:</strong> البيانات المتعلقة بالمؤسسات المشتركة (مثل جداول البيانات أو بيانات المخزون).</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <ChevronRight className="text-primary shrink-0 mt-1" size={18} />
                <span><strong>بيانات الاستخدام:</strong> معلومات تقنية لتحسين تجربة المستخدم.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              2. كيف نستخدم بياناتكم
            </h2>
            <p className="text-muted-foreground mb-4">نستخدم المعلومات لغايات محددة تشمل:</p>
            <ul className="space-y-3 pr-4">
              <li className="flex gap-3 text-muted-foreground">
                <ChevronRight className="text-primary shrink-0 mt-1" size={18} />
                <span>تقديم وتشغيل وصيانة خدمات Connect Tech.</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <ChevronRight className="text-primary shrink-0 mt-1" size={18} />
                <span>التواصل معكم بخصوص التحديثات والدعم الفني.</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <ChevronRight className="text-primary shrink-0 mt-1" size={18} />
                <span>تحسين وتطوير ميزات المنصة.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              3. حماية البيانات وأمنها
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              نحن نطبق إجراءات أمنية متقدمة لحماية بياناتكم من الوصول غير المصرح به، ونستخدم تقنيات تشفير قوية لضمان سلامة البيانات.
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              4. مشاركة المعلومات
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              نحن لا نقوم ببيع أو تأجير بياناتكم لأي أطراف خارجية. قد نشارك البيانات فقط مع مزودي الخدمة الموثوقين لغرض تشغيل المنصة فقط.
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              5. حقوق المستخدم
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              لكم الحق في الوصول إلى بياناتكم الشخصية وتحديثها أو طلب حذفها من أنظمتنا في أي وقت.
            </p>
          </section>

          {/* Contact Box */}
          <div className="bg-muted rounded-xl p-6 border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="text-primary" size={20} />
                <span>البريد الإلكتروني: <a href="mailto:info@connectsys.cloud" className="text-primary hover:underline">info@connectsys.cloud</a></span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Globe className="text-primary" size={20} />
                <span>الموقع الإلكتروني: <a href="https://connectsys.cloud" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">connectsys.cloud</a></span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-muted text-center border-t border-border text-muted-foreground text-sm">
          &copy; 2026 Connect Tech. جميع الحقوق محفوظة.
        </div>
      </div>
    </div>
  );
};

export default Privacy;
