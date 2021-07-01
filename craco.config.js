// module.exports = {
//   style: {
//     postcss: {
//       plugins: [
//         require('tailwindcss')('./tailwind.config.js'),
//         require('autoprefixer'),
//       ],
//     },
//   },
// };

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
      ],
    },
  },
};
