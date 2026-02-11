import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer dir="rtl" className="py-8 sm:py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 sm:gap-6 text-center md:flex-row md:justify-between md:text-right">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="Connect Technology" className="h-8 sm:h-10 w-auto brightness-0 invert" />
            <span className="text-lg sm:text-xl font-bold">Connect Technology</span>
          </div>

          <div className="order-3 md:order-2">
            <p className="text-background/70 text-sm sm:text-base">
              نربط أعمالك بالمستقبل من خلال حلول برمجية مبتكرة
            </p>
          </div>

          <div className="text-background/60 text-xs sm:text-sm order-2 md:order-3">
            © {currentYear} Connect Technology. جميع الحقوق محفوظة
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
