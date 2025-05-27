import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark">
      <div className="container-custom py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-dark-blue bg-opacity-70 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 md:p-12"
        >
          <Link to="/" className="inline-flex items-center text-neon-purple mb-8 hover:underline">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para a página inicial
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-gaming mb-8">Termos de <span className="highlight">Uso</span></h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              Bem-vindo aos Termos de Uso da Mayrink Digital Minds. Ao acessar ou utilizar nossos serviços, você concorda com estes termos. Por favor, leia-os atentamente.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar ou utilizar nossos serviços, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá acessar ou utilizar nossos serviços.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Descrição dos Serviços</h2>
            <p>
              A Mayrink Digital Minds oferece soluções de automação com IA, incluindo agentes de IA personalizados, agentes de IA de atendimento e outras soluções tecnológicas para empresas.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Uso dos Serviços</h2>
            <p>
              Você concorda em usar nossos serviços apenas para fins legais e de acordo com estes Termos. Você não deve:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violar leis ou regulamentos aplicáveis</li>
              <li>Infringir direitos de propriedade intelectual</li>
              <li>Transmitir material ilegal, ofensivo ou prejudicial</li>
              <li>Tentar acessar áreas não autorizadas de nossos sistemas</li>
              <li>Interferir no funcionamento adequado de nossos serviços</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo, design, gráficos, interfaces e código presente em nossos serviços são de propriedade da Mayrink Digital Minds e estão protegidos por leis de propriedade intelectual. Você não tem permissão para copiar, modificar, distribuir ou criar trabalhos derivados sem nossa autorização expressa.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Limitação de Responsabilidade</h2>
            <p>
              Nossos serviços são fornecidos "como estão" e "conforme disponíveis". Não garantimos que nossos serviços serão ininterruptos, oportunos, seguros ou livres de erros. Em nenhuma circunstância seremos responsáveis por danos indiretos, incidentais, especiais, consequenciais ou punitivos.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Modificações dos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação dos Termos atualizados. O uso contínuo de nossos serviços após tais alterações constitui sua aceitação dos novos Termos.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Rescisão</h2>
            <p>
              Podemos encerrar ou suspender seu acesso aos nossos serviços imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar estes Termos.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Lei Aplicável</h2>
            <p>
              Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar suas disposições de conflito de leis.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Contato</h2>
            <p>
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco pelo e-mail: <a href="mailto:mayrinkdigitalminds@gmail.com" className="text-neon-purple hover:underline">mayrinkdigitalminds@gmail.com</a> ou pelo telefone: <a href="https://wa.me/5538998542246" className="text-neon-purple hover:underline">(38) 99854-2246</a>.
            </p>
            
            <p className="mt-8 text-sm text-gray-400">
              Última atualização: 26 de maio de 2025
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
