module.exports = {
  plugins: {
    'postcss-import': {},    // Enables @import syntax for CSS files
    'postcss-nested': {},    // Allows nesting of CSS rules
    'postcss-preset-env': {
      stage: 1,              // Use modern CSS features (Stage 1 features)
    },
    autoprefixer: {},        // Automatically adds vendor prefixes
  },
};
