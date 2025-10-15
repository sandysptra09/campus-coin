module.exports = {
  locales: ['en', 'id'],
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  input: ['pages/**/*.{js,jsx,ts,tsx}', 'components/**/*.{js,jsx,ts,tsx}'],
  defaultNamespace: 'common',
  keySeparator: false,
  namespaceSeparator: false,
  useKeysAsDefaultValue: true,
};