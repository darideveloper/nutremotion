import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import PhoneDisplay from "./PhoneDisplay";
import BackgroundMusic from "./BackgroundMusic";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default function Layout() {
  // Check for thanks parameter in URL for success message
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log("URL params:", window.location.search);
    console.log("Thanks param:", urlParams.get('thanks'));
    
    if (urlParams.get('thanks') === 'true') {
      console.log("Showing SweetAlert2...");
      Swal.fire({
        title: "¡Formulario enviado!",
        text: "Gracias por contactar con nosotros. Te responderemos lo antes posible.",
        icon: "success",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#16a34a", // nutr-green-600
        background: "#ffffff"
      });
    }
  }, []);

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