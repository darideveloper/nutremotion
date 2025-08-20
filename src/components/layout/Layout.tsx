import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import PhoneDisplay from "./PhoneDisplay";
import BackgroundMusic from "./BackgroundMusic";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1 bg-white">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="643805329" />
      <PhoneDisplay />
      <BackgroundMusic />
    </div>
  );
}