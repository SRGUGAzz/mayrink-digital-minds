import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-blue to-dark opacity-90"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-gaming mb-6">
              Transforme seu <span className="highlight">atendimento</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Na Mayrink Digital Minds, desenvolvemos soluções de automação com IA que revolucionam a forma como empresas interagem com seus clientes.
            </p>
            <p className="text-gray-300 mb-6">
              Nossos agentes de IA personalizados combinam o melhor da tecnologia com uma abordagem humanizada, criando experiências que encantam e convertem.
            </p>
            <p className="text-gray-300 mb-6">
              Diferente de chatbots tradicionais, nossos agentes entendem contexto, aprendem com cada interação e se comunicam de forma natural, como um atendente humano altamente treinado.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-dark-blue bg-opacity-50 backdrop-blur-sm border border-primary/20 rounded-xl p-4 flex items-center">
                <div className="text-neon-purple text-3xl font-bold mr-2">98%</div>
                <div className="text-sm">de satisfação dos clientes</div>
              </div>
              <div className="bg-dark-blue bg-opacity-50 backdrop-blur-sm border border-primary/20 rounded-xl p-4 flex items-center">
                <div className="text-neon-purple text-3xl font-bold mr-2">24/7</div>
                <div className="text-sm">disponibilidade contínua</div>
              </div>
              <div className="bg-dark-blue bg-opacity-50 backdrop-blur-sm border border-primary/20 rounded-xl p-4 flex items-center">
                <div className="text-neon-purple text-3xl font-bold mr-2">+40%</div>
                <div className="text-sm">aumento em conversões</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-neon-purple/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-dark-blue bg-opacity-70 backdrop-blur-sm border border-primary/30 rounded-3xl p-8 pt-16 pb-14 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-neon-purple/10 rounded-full -ml-12 -mb-12"></div>
                
                <div className="flex justify-center mb-6">
                  <img 
                    src="/assets/images/2_cropped.png" 
                    alt="Mayrink Digital Minds" 
                    className="w-full max-w-[500px] h-auto"
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
                <p className="text-gray-300 mb-8">
                  Democratizar o acesso à automação inteligente, permitindo que empresas de todos os portes ofereçam experiências excepcionais aos seus clientes através de tecnologia avançada e acessível.
                </p>
                
                <div className="flex flex-col items-center gap-4 mb-2">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 justify-center">
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-neon-purple mr-2"></div>
                      <span>Tecnologia de ponta</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-neon-purple mr-2"></div>
                      <span>Atendimento humanizado</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-neon-purple mr-2"></div>
                      <span>Soluções personalizadas</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-neon-purple mr-2"></div>
                      <span>Resultados mensuráveis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
