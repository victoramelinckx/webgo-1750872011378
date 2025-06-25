
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Vende Online en 24 Horas" subheadline="Tu web lista en un día con soporte 24/7. Ideal para dueños ocupados que quieren digitalizar sus negocios ya." cta1="Comienza Ahora" />
<How step1Title="Descubre tu necesidad" step1Desc="Identificamos cómo digitalizar tus ventas." step2Title="Creamos tu tienda" step2Desc="Entregamos tu web en 24 horas." step3Title="Soporte continuo" step3Desc="Asistencia 24/7 para maximizar ventas." />
<Aboutus headline="WebGo: Impulsa tus ventas online" subheadline="Digitalizamos tu negocio, sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Gestión Completa" beneficio1="Olvídate del manejo web." beneficiotitulo2="Ventas Aumentadas" beneficio2="Conviértete en líder digital." />
<Services heading="Digitaliza tus Ventas en 24 Horas" description="asddfas (Precio: 12312) - asda crea sitios de venta eficaces, ahorrándote tiempo y esfuerzo." services={[{"name":"Diseño Exprés","icon":"bolt","description":"Webs listas en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Optimización SEO","icon":"search","description":"Atrae más tráfico con WebGo."},{"name":"Gestión de Contenido","icon":"edit","description":"Actualiza tu web sin esfuerzo."},{"name":"Analítica Web","icon":"chart-line","description":"Datos que impulsan tus decisiones."},{"name":"Integración E-commerce","icon":"shopping-cart","description":"Vende online fácilmente con [producto]."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en realidades digitales impactantes y efectivas." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mis ventas?","respuesta":"WebGo te ayuda a llevar tu negocio al mundo online de forma sencilla. Nos encargamos de crear y gestionar tu sitio web, para que puedas centrarte en lo que mejor sabes hacer: atender a tus clientes. ¡Deja que nosotros nos preocupemos por las ventas digitales!"},{"pregunta":"¿Qué beneficio obtengo al usar los servicios de WebGo?","respuesta":"Con WebGo, aumentas tu alcance y atraes nuevos clientes sin depender solo del boca a boca. Nuestro servicio te proporciona una plataforma online optimizada que trabaja 24/7 para generar más ventas y mejorar tu presencia en el mercado."},{"pregunta":"¿Qué pasa si no tengo tiempo para gestionar un sitio web?","respuesta":"¡No te preocupes! En WebGo gestionamos tu sitio por ti. Nos encargamos de todo, desde la configuración inicial hasta el mantenimiento continuo. Así puedes enfocarte en tu negocio sin preocupaciones tecnológicas."},{"pregunta":"¿Cuánto cuesta utilizar el servicio de digitalización de WebGo?","respuesta":"El precio de nuestros servicios es de 12312, pero vale cada centavo. Obtienes una solución completa para mejorar tus ventas online, sin complicaciones ni tareas adicionales para ti."},{"pregunta":"¿Por qué debería elegir WebGo y no otra empresa?","respuesta":"WebGo entiende las necesidades únicas de pequeños negocios en Santiago. Ofrecemos soluciones personalizadas que se adaptan a tu modelo de negocio y te ayudamos a crecer digitalmente de manera efectiva."}]} />
<BookAppointment 
                      heading="Transforma Tu Negocio en Santiago" 
                      description="Lleva tus ventas al mundo digital con WebGo y deja de depender solo de recomendaciones. Precio: 12312 - asda."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
