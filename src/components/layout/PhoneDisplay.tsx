import { Phone } from "lucide-react";

export default function PhoneDisplay() {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-nutr-green-500 text-white py-2 px-4 rounded-full shadow-lg flex items-center space-x-2 animate-pulse">
      <Phone size={18} />
      <span className="font-medium">+34 643 805 329</span>
    </div>
  );
}