import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
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
          
          <h1 className="text-4xl md:text-5xl font-gaming mb-8">Política de <span className="highlight">Privacidade</span></h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              A Mayrink Digital Minds está comprometida em proteger a privacidade e os dados pessoais de nossos usuários e clientes. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Informações que coletamos</h2>
            <p>
              Podemos coletar os seguintes tipos de informações:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Informações de contato (nome, e-mail, telefone, endereço)</li>
              <li>Informações de perfil e preferências</li>
              <li>Dados de uso e interação com nossos serviços</li>
              <li>Informações técnicas como endereço IP e dados de navegação</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Como usamos suas informações</h2>
            <p>
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer, manter e melhorar nossos serviços</li>
              <li>Processar solicitações e responder a dúvidas</li>
              <li>Personalizar sua experiência com nossos produtos</li>
              <li>Enviar comunicações relevantes sobre nossos serviços</li>
              <li>Cumprir obrigações legais e proteger nossos direitos</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Compartilhamento de informações</h2>
            <p>
              Podemos compartilhar suas informações com:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Parceiros de negócios que nos ajudam a fornecer serviços</li>
              <li>Prestadores de serviços que atuam em nosso nome</li>
              <li>Autoridades governamentais quando exigido por lei</li>
            </ul>
            <p>
              Não vendemos ou alugamos suas informações pessoais a terceiros para fins de marketing.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Segurança de dados</h2>
            <p>
              Implementamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado, perda ou alteração. No entanto, nenhum sistema é completamente seguro, e não podemos garantir a segurança absoluta de seus dados.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Seus direitos</h2>
            <p>
              Você tem direito a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acessar, corrigir ou excluir seus dados pessoais</li>
              <li>Restringir ou se opor ao processamento de seus dados</li>
              <li>Solicitar a portabilidade de seus dados</li>
              <li>Retirar seu consentimento a qualquer momento</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Alterações nesta política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre disponível em nosso site. Recomendamos que você revise esta política regularmente.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Contato</h2>
            <p>
              Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato conosco pelo e-mail: <a href="mailto:mayrinkdigitalminds@gmail.com" className="text-neon-purple hover:underline">mayrinkdigitalminds@gmail.com</a> ou pelo telefone: <a href="https://wa.me/5538998542246" className="text-neon-purple hover:underline">(38) 99854-2246</a>.
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

export default PrivacyPolicy;
