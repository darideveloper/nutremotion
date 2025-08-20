import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    content: "NutrEmotion me enseñó que cuidarse va más allá de lo que como. Gracias al enfoque integral, ahora disfruto de mi alimentación sin culpa y he recuperado la conexión con mi cuerpo.",
    author: "María López",
    role: "Programa Integral Move",
    initials: "ML"
  },
  {
    content: "Después de años de dietas frustradas, por fin encontré en NutrEmotion un acompañamiento personalizado que respeta mis ritmos y necesidades. Sin juicios, sin extremos.",
    author: "Carlos Sánchez",
    role: "Programa Ayuno Intermitente",
    initials: "CS"
  },
  {
    content: "Lo que más valoro de NutrEmotion es su visión holística. No solo me ayudaron con la alimentación, sino a entender cómo las emociones influyen en mi relación con la comida.",
    author: "Laura Martín",
    role: "Cliente desde 2022",
    initials: "LM"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-nutr-gray-700">Experiencias de transformación</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Historias reales de personas que han redescubierto su bienestar a través de nuestro enfoque integral en alimentación, psicología y movimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none bg-white shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <svg 
                    className="h-8 w-8 text-nutr-purple-300" 
                    fill="currentColor" 
                    viewBox="0 0 32 32" 
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                
                <p className="mb-6 text-muted-foreground">{testimonial.content}</p>
                
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 border-2 border-white">
                    <AvatarFallback className="bg-nutr-green-100 text-nutr-green-600">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="text-sm font-medium">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}