import { Target, Code2, Rocket } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Code2,
      title: "هندسة برمجية",
      description: "نطور أنظمة رقمية متكاملة بأحدث التقنيات",
    },
    {
      icon: Target,
      title: "تحليل الأعمال",
      description: "نفهم احتياجاتك ونحولها لحلول عملية",
    },
    {
      icon: Rocket,
      title: "تطوير مستمر",
      description: "نرافقك في رحلة النمو والتطور الرقمي",
    },
  ];

  return (
    <section id="about" dir="rtl" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              من نحن
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              نحول العمليات المعقدة إلى <span className="gradient-text">حلول برمجية سهلة</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
              في Connect Technology، نؤمن بأن البرمجيات هي العمود الفقري لأي عمل ناجح.
              نحن فريق متخصص في هندسة وتطوير الأنظمة الرقمية، نركز على تحويل العمليات المعقدة
              إلى حلول برمجية سهلة الاستخدام.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-background shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl gradient-primary mb-4">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-2xl p-5 sm:p-8 shadow-sm">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center">
              هدفنا هو تمكين الشركات والمؤسسات التعليمية والتجارية من إدارة مواردها بذكاء،
              تقليل الأخطاء البشرية، ومضاعفة الإنتاجية من خلال التكنولوجيا المخصصة حسب احتياجك.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
