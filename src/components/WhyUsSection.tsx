import { Search, Layout, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyUsSection = () => {
  const reasons = [
    {
      icon: Search,
      title: "تحليل دقيق",
      description:
        "لا نكتب سطراً برمجياً واحداً قبل فهم \"Business Logic\" الخاص بك تماماً. نحلل احتياجاتك بعمق لنقدم الحل الأمثل.",
    },
    {
      icon: Layout,
      title: "تجربة مستخدم بديهية",
      description:
        "نصمم أنظمة UX/UI بديهية يسهل على موظفيك استخدامها دون تدريب طويل. واجهات سهلة وجميلة.",
    },
    {
      icon: HeadphonesIcon,
      title: "دعم فني حقيقي",
      description:
        "علاقتنا لا تنتهي بالتسليم، نحن معك لضمان استقرار النظام وتطويره. دعم مستمر واستجابة سريعة.",
    },
  ];

  return (
    <section id="why-us" dir="rtl" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            لماذا نحن
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ما يميزنا ليس فقط <span className="gradient-text">جودة الكود</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            بل فهمنا العميق لطبيعة الأعمال واحتياجات العملاء
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover-lift bg-gradient-to-br from-background to-secondary/30 overflow-hidden group"
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary group-hover:scale-110 transition-transform">
                    <reason.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
