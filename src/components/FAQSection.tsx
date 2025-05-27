import React from 'react';
import { motion } from 'framer-motion';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      id: 1,
      question: 'O que são agentes de IA personalizados?',
      answer: 'Agentes de IA personalizados são assistentes virtuais desenvolvidos com inteligência artificial avançada, treinados especificamente para o seu negócio. Eles podem entender contexto, responder perguntas complexas e executar tarefas como agendamentos, atendimento ao cliente e automação de processos, tudo de forma humanizada e alinhada com a identidade da sua marca.'
    },
    {
      id: 2,
      question: 'Como os agentes de IA podem melhorar o atendimento da minha empresa?',
      answer: 'Nossos agentes de IA melhoram o atendimento ao oferecer disponibilidade 24/7, respostas instantâneas e consistentes, capacidade de lidar com múltiplos atendimentos simultaneamente e personalização baseada no histórico do cliente. Isso resulta em maior satisfação do cliente, redução de custos operacionais e liberação da sua equipe para tarefas estratégicas.'
    },
    {
      id: 3,
      question: 'É possível integrar os agentes com meus sistemas atuais?',
      answer: 'Sim, desenvolvemos soluções que se integram perfeitamente aos seus sistemas existentes, como CRMs, ERPs, plataformas de e-commerce, agendamento e muito mais. Nossa abordagem garante uma transição suave e sem interrupções nos seus processos atuais.'
    },
    {
      id: 4,
      question: 'Quanto tempo leva para implementar um agente de IA?',
      answer: 'O tempo de implementação varia conforme a complexidade do projeto, mas geralmente conseguimos ter uma versão inicial funcionando em 2 a 4 semanas. Trabalhamos com uma metodologia ágil que permite entregas incrementais, com melhorias contínuas baseadas em feedback real.'
    },
    {
      id: 5,
      question: 'Os agentes de IA substituem completamente o atendimento humano?',
      answer: 'Sim, em alguns casos é possível substituir completamente o atendimento humano. Nossos agentes de IA são capazes de gerenciar todo o ciclo de atendimento, desde o primeiro contato até a resolução final, com alta eficiência e satisfação do cliente. Para situações específicas que exigem intervenção humana, eles podem transferir o atendimento quando necessário, criando um fluxo híbrido e eficiente.'
    },
    {
      id: 6,
      question: 'Como funciona o agente de IA com resposta em áudio?',
      answer: 'Nossos agentes com resposta em áudio utilizam tecnologia avançada de síntese de voz para converter texto em fala natural e expressiva. Isso permite uma experiência mais humanizada e acessível, especialmente útil para pessoas com dificuldades de leitura ou que preferem interações por voz.'
    }
  ];

  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden bg-gradient-to-b from-dark to-dark-blue">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Dúvidas <span className="highlight">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tire suas principais dúvidas sobre implementação, funcionamento e benefícios dos nossos agentes de IA.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={faq.id}
              variants={itemVariants}
              className="mb-4"
            >
              <motion.div
                className={`border border-primary/30 rounded-xl overflow-hidden ${activeIndex === index ? 'bg-dark-blue bg-opacity-70' : 'bg-dark-blue bg-opacity-30'}`}
                whileHover={{ borderColor: 'rgba(138, 43, 226, 0.5)' }}
              >
                <button
                  className="w-full p-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-xl font-bold">{faq.question}</span>
                  <span className="text-neon-purple text-2xl">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: activeIndex === index ? 'auto' : 0,
                    opacity: activeIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0 text-gray-300">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
