const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
		purple: '#8934FF',
		blue: '#0755BA',
		lightgray: '#F7FBFF',
		deepgray: '#C3C9D4',
		extralightgray: '#E3E9F3',
		deeppurple: '#1D1B84',
		lightblue: '#0099ff',
		dark: {
			background: '#2B323D',
			text: '#DCDDDE',
			cards: '#373A40',
			light: '#40444B',
			}
		},
      	boxShadow: {
			sm: '0px 4px 24px 0 rgba(149, 157, 165, 0.2)',
		},
		rotate: {
			'135': '135deg',
			'160': '160deg',
		},
		borderWidth: {
			DEFAULT: '1.5px',
		},
    },
  },

  plugins: [],
};

module.exports = config;
