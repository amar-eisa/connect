import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "96599679479";
  const message = encodeURIComponent("مرحباً، أرغب في الاستفسار عن خدماتكم");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform hover:shadow-xl"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
