module.exports = {
  plugins: [['module-resolver', {
    alias: {
      actions: './src/app/actions/',
      components: './src/app/components/',
      reducers: './src/app/reducers/',
      constants: './src/app/constants/',
    },
  }]],
  presets: ['@babel/env', '@babel/preset-react'],
};
