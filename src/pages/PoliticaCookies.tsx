import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function PoliticaCookies() {
  return (
    <>
      <Helmet>
        <title>Política de Cookies - NutrEmotion</title>
        <meta name="description" content="Política de cookies de NutrEmotion. Información sobre el uso de cookies en nuestra web." />
      </Helmet>
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-nutr-green-600 mb-8">Política de Cookies</h1>
        
        <div className="prose max-w-none text-gray-700 space-y-6">
          <p className="text-lg">
            En www.nutremotion.com (en adelante, "la Web"), utilizamos cookies propias y de terceros para mejorar tu experiencia de usuario, analizar el tráfico del sitio y, en su caso, ofrecerte contenidos adaptados a tus intereses.
          </p>
          
          <h2 className="text-2xl font-semibold text-nutr-green-600 mt-6">¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas un sitio web. Su utilidad es que la Web sea capaz de recordar tu visita cuando vuelvas a navegar por ella, facilitando así tu próxima visita y haciendo el sitio más útil.
          </p>
          
          <h2 className="text-2xl font-semibold text-nutr-green-600 mt-6">¿Qué tipos de cookies utiliza esta web?</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li className="mb-2">
              <span className="font-medium">Cookies técnicas:</span> Son aquellas necesarias para el correcto funcionamiento y navegación por la Web, así como para asegurar que el contenido se carga eficazmente.
            </li>
            <li className="mb-2">
              <span className="font-medium">Cookies de análisis:</span> Son aquellas que, tratadas por nosotros o por terceros (por ejemplo, Google Analytics), nos permiten cuantificar el número de usuarios y realizar medición y análisis estadístico del uso que hacen los usuarios del servicio ofertado. Para ello se analiza tu navegación en la Web con el fin de mejorar la oferta de productos o servicios que te ofrecemos.
            </li>
            <li className="mb-2">
              <span className="font-medium">Cookies de redes sociales y multimedia:</span> Pueden instalarse cookies de plataformas como YouTube, Instagram o Facebook cuando mostramos contenidos incrustados o botones para compartir en redes sociales.
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-nutr-green-600 mt-6">Configuración y rechazo de cookies</h2>
          <p>
            Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador que utilices. Aquí tienes los enlaces para hacerlo en los principales navegadores:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-nutr-green-600 hover:underline">Google Chrome</a>
            </li>
            <li>
              <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies" target="_blank" rel="noopener noreferrer" className="text-nutr-green-600 hover:underline">Mozilla Firefox</a>
            </li>
            <li>
              <a href="https://support.apple.com/es-es/HT201265" target="_blank" rel="noopener noreferrer" className="text-nutr-green-600 hover:underline">Apple Safari</a>
            </li>
            <li>
              <a href="https://support.microsoft.com/es-es/help/4027947/microsoft-edge-delete-cookies" target="_blank" rel="noopener noreferrer" className="text-nutr-green-600 hover:underline">Microsoft Edge</a>
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-nutr-green-600 mt-6">Consentimiento</h2>
          <p>
            Al navegar y continuar en nuestra Web estarás consintiendo el uso de las cookies antes enunciadas, por los plazos señalados y en las condiciones contenidas en la presente Política de Cookies.
          </p>
          
          <p className="mt-6">
            Para más información sobre el tratamiento de tus datos personales puedes consultar nuestra <Link to="/politica-privacidad" className="text-nutr-green-600 hover:underline">Política de Privacidad</Link> o escribirnos a nuestro correo de contacto: <a href="mailto:info@nutremotion.com" className="text-nutr-green-600 hover:underline">info@nutremotion.com</a> 
          </p>
        </div>
      </main>
    </>
  );
}