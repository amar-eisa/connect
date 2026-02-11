import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      dir="rtl"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center px-2">
          {/* Logo */}
          <div className="flex justify-center mb-6 md:mb-8 animate-fade-up">
            <img
              src={logo}
              alt="Connect Technology"
              className="h-16 sm:h-20 md:h-24 w-auto drop-shadow-lg"
            />
          </div>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">شريكك التقني لبناء المستقبل</span>
          </div>

          {/* Main Title */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-up leading-tight"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-foreground">Connect Technology..</span>
            <br />
            <span className="gradient-text">نربط أعمالك بالمستقبل</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed animate-fade-up px-2"
            style={{ animationDelay: "0.3s" }}
          >
            نصمم حلولاً برمجية ذكية تحول التحديات التشغيلية إلى أنظمة سلسة تدفع نمو مؤسستك.
            نحن شريكك التقني لتحويل الأفكار إلى واقع رقمي متطور.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up px-4"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="gradient-primary hover:opacity-90 transition-opacity text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              اطلب استشارة مجانية
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("portfolio")}
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-primary/30 hover:bg-secondary w-full sm:w-auto"
            >
              شاهد مشاريعنا
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
