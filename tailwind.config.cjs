/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      spartan: "League Spartan, sans-serif",
    },
    lineHeight: {
      body1: "15px",
      body2: "18px",
      heading1: "36px",
      heading2: "22px",
      heading3: "24px",
      heading4: "15px",
    },
    letterSpacing: {
      body1: "-0.25px",
      body2: "-0.23px",
      heading1: "-1px",
      heading2: "-0.63px",
      heading3: "-0.8px",
      heading4: "-0.25px",
    },
    colors: {
      bgColourDark: "#141625",
      bgColourLight: "#F8F8FB",
      basicWhite: "#ffffff",
      basicBlack: "#000000",
      contentBgDark: "#1E2139",
      primaryPurple: "#7C5DFA",
      shadedPurple: "#9277FF",
      textLight: "#0C0E16",
      navbarLight: "#373B53",
      pendingStatus: "#FF8F00",
      paidStatus: "#33D69F",
      shadedTextDark: "#DFE3FA",
      shadedTextLight: "#7E88C3",
      shadedContentLight: "#F9FAFE",
      shadedContentDark: "#252945",
      textReallyDark: "#888EB0",
      toggleColourDark: "#858BB2",
      deleteBtn: "#EC5757",
      deleteBtnShaded: "#FF9797",
      avatarBorderColour: "#494E6E",
    },
    extend: {
      fontSize: {
        xtraSm: "11px",
        med: "15px",
        lrgHeading: "32px",
      },
      gridTemplateColumns: {
        mainMob: "24px repeat(10,1fr) 24px",
        mainDesk: "101px .5fr repeat(12,1fr) 1fr",
        invoiceMob: "24px repeat(10,1fr) 24px",
        invoiceTab: "48px repeat(10,1fr) 48px",
        invoiceMax: "repeat(12,1fr)",
      },
      gridTemplateRows: {
        firstRowMinContent: "min-content",
        invoiceContainerMobRows: "min-content 36px 1fr",
      },
      screens: {
        lgTab: "51.62em", // 826px
      },
    },
  },
  plugins: [],
};
