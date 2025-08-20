import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Programs from './pages/Programs';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import AvisoLegal from './pages/AvisoLegal';
import TerminosCondiciones from './pages/TerminosCondiciones';
import PoliticaCookies from './pages/PoliticaCookies';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* Add these routes as placeholders for now */}
            <Route path="/programas" element={<Programs />} />
            <Route path="/programas/:programId" element={<div className="container py-12">Detalle del Programa (En desarrollo)</div>} />
            <Route path="/sobre-nosotros" element={<AboutUs />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/politicas-de-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
            <Route path="/politica-cookies" element={<PoliticaCookies />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
