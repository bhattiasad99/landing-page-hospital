export const navHeight = "6rem";
export const theme = {
  colors: {
    primary: "#C20AFA",
    primaryDark: "#8B18AD",
    secondary: "#23FAA5",
    secondaryDark: "#10AD6F",
    grey: "#222021",
  },
  fontNormal: {
    weight: "300",
    large: "2.133rem",
    normal: "1.6rem",
    small: "1.2rem",
    xSmall: "0.9rem",
  },
  bold: "400",
  headings: {
    h1: {
      fontSize: "6.734rem",
      fontWeight: "400",
    },
    h2: {
      fontSize: "5.052rem",
      fontWeight: "400",
    },
    h3: {
      fontSize: "3.79rem",
      fontWeight: "400",
    },
    h4: {
      fontSize: "2.84rem",
      fontWeight: "400",
    },
  },
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
