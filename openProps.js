// ! not done!

const openPropsCustomMedia = [
  '/^--(xxs|xs|sm|md|lg|xl|xxl)-(only|n-above|n-below)$/',
  '/^--(xxs|xs|sm|md|lg)-phone$/',
  '--portrait',
  '--landscape',
  '--md-only',
  '--md-n-above',
  '--md-n-below',
  '--md-phone',
  '--xxl-only',
  '-xxl-n-above',
  '--xxl-n-below',
  '--touch',
  '--stylus',
  '--pointer',
  '--mouse',
  '--HDcolor',
  '--OSdark',
  '--OSlight',
  '--motionOK',
  '--motionNotOK',
  '--highContrast',
  '--lowContrast',
  '--opacityOK',
  '--opacityNotOK',
  '--useDataOK',
  '--useDataNotOK',
];

module.exports = {
  rules: {
    'media-feature-name-no-unknown': [
      true,
      {
        ignoreMediaFeatureNames: [...openPropsCustomMedia],
      },
    ],
  },
};
