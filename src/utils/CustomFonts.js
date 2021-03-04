import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`
    /* latin-ext */
    @font-face {
    font-family: 'Cairo';
    font-style: normal; 
    font-weight: 200;
    src: url(https://fonts.gstatic.com/s/cairo/v9/SLXLc1nY6Hkvalrub46F59ZMaA.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: 200;
  src: url(https://fonts.gstatic.com/s/cairo/v9/SLXLc1nY6Hkvalrub46L59Y.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin-ext */
@font-face {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/cairo/v9/SLXLc1nY6HkvalqKbI6F59ZMaA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/cairo/v9/SLXLc1nY6HkvalqKbI6L59Y.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin-ext */
@font-face {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/cairo/v9/SLXGc1nY6HkvalIvTpu0xg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/cairo/v9/SLXGc1nY6HkvalIhTps.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin-ext */
@font-face {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/cairo/v9/SLXLc1nY6Hkvalr-ao6F59ZMaA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/cairo/v9/SLXLc1nY6Hkvalr-ao6L59Y.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/cairo/v9/SLXLc1nY6Hkvalqaa46F59ZMaA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/cairo/v9/SLXLc1nY6Hkvalqaa46L59Y.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin-ext */
@font-face {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/cairo/v9/SLXLc1nY6HkvalqiaY6F59ZMaA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Cairo';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/cairo/v9/SLXLc1nY6HkvalqiaY6L59Y.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
    `}
  />
);
