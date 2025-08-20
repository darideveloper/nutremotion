import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué es la psiconutrición?",
    answer: "La psiconutrición es un enfoque integrador que combina los conocimientos de la psicología y la nutrición para abordar la relación entre las emociones y la alimentación. No se trata solo de qué comes, sino de por qué, cómo y en qué contexto lo haces, atendiendo a los factores psicológicos que influyen en tus hábitos alimentarios."
  },
  {
    question: "¿En qué se diferencia NutrEmotion de otras consultas nutricionales?",
    answer: "En NutrEmotion no solo te ofrecemos pautas alimentarias, sino que trabajamos en profundidad la relación emocional con la comida. Nuestro enfoque es holístico, personalizado y libre de dietas restrictivas, centrándonos en crear hábitos sostenibles que respeten tu relación individual con la alimentación y el bienestar emocional."
  },
  {
    question: "¿Cómo me ayuda NutrEmotion con mi relación con la comida?",
    answer: "En NutrEmotion te ayudamos a reconectar con tus señales internas de hambre y saciedad, identificar patrones alimentarios emocionales y desarrollar estrategias personalizadas para gestionar el estrés sin recurrir a la comida como refugio. Nuestro objetivo es que logres una relación equilibrada y consciente con la alimentación, libre de culpa y restricciones."
  },
  {
    question: "¿Cuánto tiempo necesitaré para ver resultados?",
    answer: "Cada persona tiene un ritmo diferente. Los cambios sostenibles requieren tiempo y constancia. Normalmente, nuestros clientes empiezan a notar mejoras en su relación con la comida y su bienestar emocional entre 4-6 semanas después de iniciar el programa, aunque los resultados más profundos se consolidan con un trabajo continuado."
  },
  {
    question: "¿Qué modalidades de consulta ofrece NutrEmotion?",
    answer: "En NutrEmotion cuidamos de ti estés donde estés. Todas nuestras consultas son online, para que puedas recibir un acompañamiento profesional desde la comodidad de tu casa o incluso mientras viajas. Queremos que el proceso sea fácil, flexible y adaptado a tu estilo de vida, sin perder la cercanía ni la atención personalizada que mereces."
  },
  {
    question: "¿El Ayuno Intermitente es seguro para todos?",
    answer: "El Ayuno Intermitente puede ser beneficioso para muchas personas, pero no es universal. En NutrEmotion evaluamos individualmente cada caso antes de recomendarlo. No es adecuado para mujeres embarazadas o en periodo de lactancia, personas con trastornos alimentarios, diabetes tipo 1, entre otros casos particulares que analizamos en la consulta inicial."
  }
];

export default function FrequentlyAskedQuestions() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-nutr-gray-700">Preguntas Frecuentes</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Resolvemos tus dudas sobre nuestro enfoque en psiconutrición y cómo podemos acompañarte en tu camino hacia una relación saludable con la alimentación y el bienestar emocional.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}