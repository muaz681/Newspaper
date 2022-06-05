module.exports = {
  content: [],
  theme: {
    extend: {
      maxWidth: {
        'max-w-2xs' : 	'max-width: 14rem',
      },
      maxHeight: {
        'max-h-custm': 'max-height: 32rem',
      },
      height: {
        'h-178': 'height: 78rem',
      }
    },
    fontFamily: {
      'voice-font': ['Arial', 'voice', 'Sans-Serif'],
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('flowbite/plugin')
  ],
}
