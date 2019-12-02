module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
  plugins: [
    'react-hot-loader/babel',
    [
      'styled-components',
      {
        displayName: true,
      },
    ],
    'lodash',
    [
      'ramda',
      {
        useES: true,
      },
    ],
    // Adds syntax support for optional chaining (.?)
    '@babel/plugin-proposal-optional-chaining',
    // Adds syntax support for default value using ?? operator
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
};
