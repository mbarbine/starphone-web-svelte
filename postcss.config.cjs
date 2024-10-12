module.exports = {
    plugins: {
      'postcss-import': {},    // Enables @import syntax for CSS files
      'postcss-nested': {},    // Allows nesting of CSS rules, similar to SCSS
      'postcss-preset-env': {  // Allows you to use modern CSS features
        stage: 1,              // Use modern CSS features (Stage 1 features)
      },
      autoprefixer: {},        // Automatically adds vendor prefixes
    },
  };
  