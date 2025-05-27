import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Gustavo Mayrink',
      company: 'Oral Centter',
      image: '/assets/logos/logo4.png',
      text: 'Os agentes de IA da Mayrink transformaram completamente o atendimento da nossa clínica. Reduzimos o tempo de espera dos pacientes em 80% e aumentamos a taxa de agendamentos em 35%. O mais impressionante é que nossos pacientes nem percebem que estão falando com uma IA!'
    },
    {
      id: 2,
      name: 'Pedro Lessa',
      company: 'Muuh Burguer',
      image: '/assets/logos/logo2.jpg',
      text: 'Implementamos o agente de IA para atendimento ao cliente e os resultados foram imediatos. Conseguimos atender 3x mais clientes com o mesmo time e a satisfação aumentou significativamente. A integração com nossos sistemas foi perfeita e sem complicações.'
    },
    {
      id: 3,
      name: 'Ana Celina',
      company: 'La Vie',
      image: '/assets/logos/logo3.png',
      text: 'Como uma pequena empresa, precisávamos de uma solução que nos permitisse oferecer atendimento 24/7 sem contratar mais pessoas. O agente de IA da Mayrink foi a resposta perfeita - aumentamos nossas vendas em 40% e nossos clientes adoram a rapidez nas respostas.'
    },
    {
      id: 4,
      name: 'Gabriel Santos',
      company: 'ARM Mentoria Jurídica',
      image: '/assets/logos/logo1.png',
      text: 'Nosso setor de atendimento ao cliente estava sobrecarregado até implementarmos o agente de IA da Mayrink. Agora conseguimos responder dúvidas e solucionar problemas em tempo real, 24 horas por dia. A eficiência aumentou em 65% e nossos clientes estão muito mais satisfeitos com o suporte.'
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Função para avançar para o próximo depoimento
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Função para voltar ao depoimento anterior
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  // Função para reiniciar o temporizador
  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    timerRef.current = setInterval(() => {
      nextTestimonial();
    }, 7000); // Troca a cada 7 segundos
  };
  
  // Configura o temporizador na montagem do componente
  useEffect(() => {
    resetTimer();
    
    // Limpa o temporizador quando o componente é desmontado
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  
  // Reinicia o temporizador quando o índice muda manualmente
  useEffect(() => {
    resetTimer();
  }, [currentIndex]);

  return (
    <section id="depoimentos" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-blue to-dark opacity-90"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            O que nossos <span className="highlight">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Histórias reais de empresas que transformaram seu atendimento com nossos agentes de IA.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl bg-dark-blue bg-opacity-50 backdrop-blur-sm border border-primary/20">
            <div className="flex flex-col md:flex-row items-center p-8 md:p-12">
              <motion.div 
                className="md:w-1/3 mb-8 md:mb-0 md:mr-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-neon-green opacity-30 blur-md"></div>
                  <div className="w-48 h-48 rounded-full border-4 border-neon-green relative z-10 overflow-hidden">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={`${testimonials[currentIndex].company} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
                  <p className="text-primary">{testimonials[currentIndex].company}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="md:w-2/3"
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <svg className="text-primary w-12 h-12 mb-4 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-xl text-gray-200 italic mb-6">"{testimonials[currentIndex].text}"</p>
              </motion.div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-neon-purple w-8' : 'bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-dark-blue bg-opacity-70 rounded-full p-3 text-white hover:bg-primary transition-colors duration-300 focus:outline-none hidden md:block"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-dark-blue bg-opacity-70 rounded-full p-3 text-white hover:bg-primary transition-colors duration-300 focus:outline-none hidden md:block"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
