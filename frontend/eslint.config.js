module.exports = {
  ignores: ['dist'],
  overrides: [
    {
      files: ['**/*.{js,jsx}'],
      env: {
        browser: true,
        es2021: true
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      settings: {
        react: {
          version: '18.3'
        }
      },
      plugins: [
        'react',
        'react-hooks',
        'react-refresh'
      ],
      rules: {
        'react/jsx-no-target-blank': 'off',
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true }
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
      }
    }
  ]
};
