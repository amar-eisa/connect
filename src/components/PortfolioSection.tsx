import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import alo80 from "@/assets/projects/alo80.png";
import restaurantPos from "@/assets/projects/restaurant-pos.png";
import smartScheduling from "@/assets/projects/smart-scheduling.png";
import pharmaConnect from "@/assets/projects/pharma-connect.png";

const PortfolioSection = () => {
  const projects = [
    {
      image: smartScheduling,
      title: "نظام الجدولة الذكي",
      subtitle: "Smart Scheduling System",
      description:
        "ثورة في إدارة الوقت الأكاديمي. نظام متقدم يعتمد على خوارزميات ذكية للتوزيع التلقائي للجداول الدراسية.",
      features: [
        "توزيع آلي يمنع تضارب المواعيد",
        "استغلال أمثل للقاعات والمعامل",
        "مرونة عالية مع الاستثناءات",
      ],
    },
    {
      image: pharmaConnect,
      title: "نظام إدارة الصيدليات",
      subtitle: "Pharma Connect",
      description:
        "نظام شامل يدير دورتك المستندية من المورد إلى العميل. تحكم كامل في المخزون والمبيعات.",
      features: [
        "تنبيهات ذكية للصلاحية والنواقص",
        "دعم الباركود والأصناف",
        "تقارير مالية دقيقة",
      ],
    },
    {
      image: restaurantPos,
      title: "نظام إدارة المطاعم",
      subtitle: "Restaurant POS",
      description:
        "الحل الأمثل لتسريع الخدمة ورفع كفاءة التشغيل. يغطي كافة احتياجات المطاعم والكافيهات.",
      features: [
        "واجهة POS سريعة وسهلة",
        "ربط مباشر بالمطبخ (KDS)",
        "تحليل الأصناف ومراقبة التكاليف",
      ],
    },
    {
      image: alo80,
      title: "موقع مركز اتصال",
      subtitle: "Alo 80",
      description:
        "الواجهة الرقمية لمركز الاتصال Alo 80، بوابة تواصل فعالة واحترافية مع التركيز على تجربة المستخدم.",
      features: [
        "تصميم متجاوب وسلس",
        "عرض واضح للخدمات",
        "تحويل الزوار لعملاء",
      ],
    },
  ];

  return (
    <section id="portfolio" dir="rtl" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            سابقة أعمالنا
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
            أنظمة أحدثت <span className="gradient-text">فارقاً حقيقياً</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            نفخر بسجل حافل من الأنظمة التي حققت نتائج ملموسة لعملائنا
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover-lift overflow-hidden bg-background group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">{project.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {project.subtitle}
                  </Badge>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 sm:px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
