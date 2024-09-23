// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
      },
    ],
  },
};
