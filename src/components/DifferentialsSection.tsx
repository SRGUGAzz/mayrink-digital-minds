import React from 'react';
import { motion } from 'framer-motion';

const DifferentialsSection: React.FC = () => {
  const differentials = [
    {
      id: 1,
      title: 'Solução 100% personalizada para o seu negócio',
      description: 'Desenvolvemos agentes de IA que se adaptam perfeitamente ao seu modelo de negócio, processos e necessidades específicas.',
      icon: (
        <svg className="w-12 h-12 text-neon-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      delay: 0.2
    },
    {
      id: 2,
      title: 'Integração com o seu sistema',
      description: 'Nossos agentes de IA se integram facilmente com suas ferramentas e sistemas existentes, sem necessidade de mudanças drásticas em sua infraestrutura.',
      icon: (
        <svg className="w-12 h-12 text-neon-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 7H7v6h6V7z" />
          <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
        </svg>
      ),
      delay: 0.4
    },
    {
      id: 3,
      title: 'Agente de IA humanizado',
      description: 'Nossos agentes não parecem robôs. Eles se comunicam de forma natural, entendem contexto e nuances da linguagem, criando uma experiência verdadeiramente humana.',
      icon: (
        <svg className="w-12 h-12 text-neon-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      delay: 0.6
    },
    {
      id: 4,
      title: 'Agente de IA que responde em áudio',
      description: 'Além de texto, nossos agentes podem se comunicar por áudio, tornando a interação ainda mais natural e acessível para todos os tipos de usuários.',
      icon: (
        <svg className="w-12 h-12 text-neon-purple" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
        </svg>
      ),
      delay: 0.8
    }
  ];

  return (
    <section id="diferenciais" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-blue opacity-90"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Nossos <span className="highlight">diferenciais</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            O que torna nossos agentes de IA verdadeiramente excepcionais e como eles podem transformar seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentials.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
              viewport={{ once: true }}
              className="bg-dark-blue bg-opacity-70 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 hover:border-neon-purple/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                <div className="mb-6 md:mb-0 md:mr-6">
                  <div className="w-20 h-20 rounded-2xl bg-dark-blue flex items-center justify-center border border-neon-purple/30">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/5538998542246"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center text-lg"
          >
            Conheça agora nossa solução
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
