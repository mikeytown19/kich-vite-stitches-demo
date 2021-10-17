import { createStitches } from '@stitches/core';
import {
  gray,
  grayDark,
  mauve,
  mauveDark,
  slate,
  slateDark,
  sage,
  sageDark,
  olive,
  oliveDark,
  sand,
  sandDark,
  tomato,
  tomatoDark,
  red,
  redDark,
  crimson,
  crimsonDark,
  pink,
  pinkDark,
  plum,
  plumDark,
  purple,
  purpleDark,
  violet,
  violetDark,
  indigo,
  indigoDark,
  blue,
  blueDark,
  cyan,
  cyanDark,
  teal,
  tealDark,
  green,
  greenDark,
  grass,
  grassDark,
  brown,
  brownDark,
  orange,
  orangeDark,
  sky,
  skyDark,
  mint,
  mintDark,
  lime,
  limeDark,
  yellow,
  yellowDark,
  amber,
  amberDark,
  gold,
  goldDark,
  bronze,
  bronzeDark,
  whiteA,
  blackA,
} from '@radix-ui/colors';

export const {
  keyframes,
  css,
  theme,
  getCssText,
  createTheme,
  config,
  globalCss,
} = createStitches({
  theme: {
    colors: {
      text: "$blackA12",
      primary: '$whiteA10',
      button: '$yellow10',
      ...gray,
      ...mauve,
      ...slate,
      ...sage,
      ...olive,
      ...sand,
      ...tomato,
      ...red,
      ...crimson,
      ...pink,
      ...plum,
      ...purple,
      ...violet,
      ...indigo,
      ...blue,
      ...cyan,
      ...teal,
      ...green,
      ...grass,
      ...brown,
      ...orange,
      ...sky,
      ...mint,
      ...lime,
      ...yellow,
      ...amber,
      ...gold,
      ...bronze,
      ...whiteA,
      ...blackA,
    },
    space: {
      0: 0,
      1: '2px',
      2: '4px',
      3: '8px',
      4: '16px',
      5: '32px',
      6: '64px',
      7: '128px',
    },
    fontSizes: {
      0:  '12px',
      1: '15px',
      2: '18px',
      3: '21px',
      4: '25px',
      5: '30px',
      6: '36px',
      7: '43px',
      8: '52px',
      9: '62px',
    },
    fonts: {
      body: 'Untitled Sans, -apple-system, system-ui, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      5: '500',
      6: '600',
      7: '700',
      8: '800',
      9: '900',
    },
    lineHeights: {
      0:  '0px',
      1: '15px',
      2: '18px',
      3: '21px',
      4: '25px',
      5: '30px',
      6: '36px',
      7: '43px',
      8: '52px',
      9: '62px',
    },
    letterSpacings: {},
    sizes: {
      1: '0.3rem',
      2: '0.5rem',
      3: '0.9rem',
      4: '1rem',
      5: '1.1rem',
      6: '1.4rem',
      7: '1.8rem',
      8: '2rem',
      9: '3rem',
      10: '4rem',
      11: '5rem',
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '0.8rem',
      round: '50%',
      pill: '9999px',
    },
    shadows: {
      1: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;',
      2: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;',
      3: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;',
      4: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
    transitions: {},
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value) => ({
      paddingTop: value,
    }),
    pr: (value) => ({
      paddingRight: value,
    }),
    pb: (value) => ({
      paddingBottom: value,
    }),
    pl: (value) => ({
      paddingLeft: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value) => ({
      marginTop: value,
    }),
    mr: (value) => ({
      marginRight: value,
    }),
    mb: (value) => ({
      marginBottom: value,
    }),
    ml: (value) => ({
      marginLeft: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value) => ({ textAlign: value }),

    fd: (value) => ({ flexDirection: value }),
    fw: (value) => ({ flexWrap: value }),

    ai: (value) => ({ alignItems: value }),
    ac: (value) => ({ alignContent: value }),
    jc: (value) => ({ justifyContent: value }),
    as: (value) => ({ alignSelf: value }),
    fg: (value) => ({ flexGrow: value }),
    fs: (value) => ({ fontSize: value }),
    fb: (value) => ({ flexBasis: value }),

    bg: (value) => ({
      backgroundColor: value,
    }),

    br: (value) => ({
      borderRadius: value,
    }),
    btrr: (value) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value) => ({ boxShadow: value }),

    lh: (value) => ({ lineHeight: value }),

    ox: (value) => ({ overflowX: value }),
    oy: (value) => ({ overflowY: value }),

    pe: (value) => ({ pointerEvents: value }),
    us: (value) => ({ WebkitUserSelect: value, userSelect: value }),

    size: (value) => ({
      width: value,
      height: value,
    }),

    linearGradient: (value) => ({
      backgroundImage: `linear-gradient(to bottom right,${value}, rgba(37,99,235,0))`,
    }),

    appearance: (value) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    userSelect: (value) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    backgroundClip: (value) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

export const darkTheme = createTheme('dark', {
  colors: {
    text: "$whiteA12",
    primary: '$blackA12',
    button: '$blue9',
    ...grayDark,
    ...mauveDark,
    ...slateDark,
    ...sageDark,
    ...oliveDark,
    ...sandDark,
    ...tomatoDark,
    ...redDark,
    ...crimsonDark,
    ...pinkDark,
    ...plumDark,
    ...purpleDark,
    ...violetDark,
    ...indigoDark,
    ...blueDark,
    ...cyanDark,
    ...tealDark,
    ...greenDark,
    ...grassDark,
    ...brownDark,
    ...orangeDark,
    ...skyDark,
    ...mintDark,
    ...limeDark,
    ...yellowDark,
    ...amberDark,
    ...goldDark,
    ...bronzeDark,

  },
});
