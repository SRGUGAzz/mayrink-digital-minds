module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8a2be2', // Roxo principal
        'primary-dark': '#6a1cb2', // Roxo escuro
        'primary-light': '#9a4bf2', // Roxo claro
        'neon-purple': '#b026ff', // Roxo neon (substituindo o verde neon)
        'neon-blue': '#00f2ff', // Azul neon
        'dark': '#000000', // Preto
        'dark-blue': '#0a0a14', // Azul escuro quase preto
      },
      fontFamily: {
        'gaming': ['GamingSporty', 'sans-serif'],
        'sans': ['Poppins', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 
            textShadow: '0 0 5px rgba(176, 38, 255, 0.5), 0 0 10px rgba(176, 38, 255, 0.3)' 
          },
          '100%': { 
            textShadow: '0 0 10px rgba(176, 38, 255, 0.8), 0 0 20px rgba(176, 38, 255, 0.5), 0 0 30px rgba(176, 38, 255, 0.3)' 
          },
        },
      },
      boxShadow: {
        'neon': '0 0 5px rgba(176, 38, 255, 0.5), 0 0 10px rgba(176, 38, 255, 0.3)',
        'neon-hover': '0 0 10px rgba(176, 38, 255, 0.8), 0 0 20px rgba(176, 38, 255, 0.5), 0 0 30px rgba(176, 38, 255, 0.3)',
        'purple': '0 0 5px rgba(138, 43, 226, 0.5), 0 0 10px rgba(138, 43, 226, 0.3)',
        'purple-hover': '0 0 10px rgba(138, 43, 226, 0.8), 0 0 20px rgba(138, 43, 226, 0.5), 0 0 30px rgba(138, 43, 226, 0.3)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
}
