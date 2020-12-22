module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://salty-bayou-70249.herokuapp.com',
        // target: 'http://localhost:3000',
      },
    },
  },
};
