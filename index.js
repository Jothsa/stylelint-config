'use strict';

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

export default {
  extends: [
    'stylelint-config-html',
    'stylelint-config-recommended',
    '@jothsa/stylelint-config-idiomatic-order',
  ],
  plugins: ['stylelint-high-performance-animation'],
  rules: {
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',

    'selector-type-case': 'lower',
    'value-keyword-case': 'lower',
    'function-name-case': 'lower',

    'alpha-value-notation': 'number',

    'selector-pseudo-element-colon-notation': 'double',
    'color-function-notation': 'modern',
    'selector-not-notation': 'complex',

    'plugin/no-low-performance-animation-properties': true,
    'function-disallowed-list': ['rgba', 'hsla', 'rgb', 'hsl'],
    'shorthand-property-no-redundant-values': true,
    'color-named': ['never', { ignoreProperties: ['initial-value'] }],
    'color-no-hex': true,

    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],

    'at-rule-no-vendor-prefix': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'define-mixin'],
      },
    ],
    'no-empty-source': null,

    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'comment-whitespace-inside': 'always',
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['stylelint-commands'],
      },
    ],

    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],

    //* allow beginning underscore eg --_bg, but otherwise kebab case
    // * also allow extra - in middle for negative
    'custom-property-pattern': [
      '^(_?)([a-z][a-z0-9]*)(-{1,2}[a-z0-9]+)*$',
      ...openPropsCustomMedia,
      {
        message: 'Expected custom property name to be kebab-case',
      },
    ],
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block'],
      },
    ],
    'selector-id-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    'selector-class-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)|(astro)*$',
    'keyframes-name-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    'media-feature-name-no-unknown': [
      true,
      {
        ignoreMediaFeatureNames: [...openPropsCustomMedia],
      },
    ],
  },
};
