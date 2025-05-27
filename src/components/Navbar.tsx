import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark bg-opacity-90 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/assets/images/3.png" 
            alt="Mayrink Digital Minds" 
            className="h-12 md:h-20"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          <a
            href="#sobre"
            className="px-3 py-2 text-white hover:text-neon-purple transition-colors duration-300 cursor-pointer"
          >
            Sobre
          </a>
          <a
            href="#servicos"
            className="px-3 py-2 text-white hover:text-neon-purple transition-colors duration-300 cursor-pointer"
          >
            Serviços
          </a>
          <a
            href="#diferenciais"
            className="px-3 py-2 text-white hover:text-neon-purple transition-colors duration-300 cursor-pointer"
          >
            Diferenciais
          </a>
          <a
            href="#depoimentos"
            className="px-3 py-2 text-white hover:text-neon-purple transition-colors duration-300 cursor-pointer"
          >
            Depoimentos
          </a>
          <a
            href="#faq"
            className="px-3 py-2 text-white hover:text-neon-purple transition-colors duration-300 cursor-pointer"
          >
            FAQ
          </a>
          <a
            href="#contato"
            className="px-3 py-2 text-white hover:text-neon-purple transition-colors duration-300 cursor-pointer"
          >
            Contato
          </a>
          <a
            href="https://wa.me/5538998542246"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex items-center ml-4"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            Fale com um especialista
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-dark-blue bg-opacity-95 backdrop-blur-md"
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a
              href="#sobre"
              className="px-3 py-2 text-white hover:text-neon-green transition-colors duration-300 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="px-3 py-2 text-white hover:text-neon-green transition-colors duration-300 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#diferenciais"
              className="px-3 py-2 text-white hover:text-neon-green transition-colors duration-300 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Diferenciais
            </a>
            <a
              href="#depoimentos"
              className="px-3 py-2 text-white hover:text-neon-green transition-colors duration-300 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              className="px-3 py-2 text-white hover:text-neon-green transition-colors duration-300 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#contato"
              className="px-3 py-2 text-white hover:text-neon-green transition-colors duration-300 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
            <a
              href="https://wa.me/5538998542246"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              Fale com um especialista
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
