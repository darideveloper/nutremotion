import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");

  // Check for thanks parameter in URL for success message
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('thanks') === 'true') {
      toast({
        title: "Formulario enviado",
        description:
          "Gracias por contactar con nosotros. Te responderemos lo antes posible.",
      });
    }
  }, [toast]);

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);
    // The form will submit normally to the external service
    // The redirect will be handled by the form action
  };

  return (
    <div className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2 text-nutr-gray-800">
            Contacto
          </h1>

          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Estamos aquí para ayudarte. Completa el formulario a continuación y
            nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  Envíanos un mensaje
                </CardTitle>
                <CardDescription>
                  Completa el formulario con tus datos y consulta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form 
                  action="https://services.darideveloper.com/contact-form/"
                  method="POST"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Api inputs */}
                  <input type="hidden" name="api_key" value="1kEXn1aa6LGCMu2TPl9z6X8KY" />
                  <input type="hidden" name="user" value="nutremotion" />
                  <input type="hidden" name="subject" value="Nuevo mensaje de contacto en tu web!" />
                  <input type="hidden" name="redirect" value={`${window.location.origin}?thanks=true`} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo*</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email*</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+34 600 123 456"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Asunto*</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Asunto de tu consulta"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="program">¿Qué programa te interesa?</Label>
                    <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un programa (opcional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nutricion">
                          Programa de Nutrición
                        </SelectItem>
                        <SelectItem value="psiconutricion">
                          Programa de Psiconutrición
                        </SelectItem>
                        <SelectItem value="psiconutricion-plus">
                          Programa Psiconutrición Plus
                        </SelectItem>
                        <SelectItem value="integral-move">
                          Programa Integral Move
                        </SelectItem>
                        <SelectItem value="ayuno-intermitente">
                          Programa Ayuno Intermitente
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="program" value={selectedProgram} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje*</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Escribe aquí tu consulta..."
                      required
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-nutr-green-600 hover:bg-nutr-green-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Al enviar este formulario, aceptas nuestra{" "}
                    <a
                      href="/politicas-de-privacidad"
                      className="underline hover:text-nutr-green-600"
                    >
                      política de privacidad
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border shadow-sm h-full">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  Información de contacto
                </CardTitle>
                <CardDescription>
                  Otras formas de ponerte en contacto con nosotros
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 mt-1 text-nutr-green-600" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      info@nutremotion.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 mt-1 text-nutr-green-600" />
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-sm text-muted-foreground">
                      +34 643 805 329
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
