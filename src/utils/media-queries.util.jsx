//breakpoints for the devices
// const size = {
//   mobileS: "320px",
//   mobileM: "375px",
//   mobileL: "425px",
//   tablet: "768px",
//   laptop: "1024px",
//   laptopL: "1900px",
//   desktop: "2560px",
//   desktopL: "2570px",
// };

// const size = {
//   mobile: "40em",
//   tablet: "40.063em",
//   tabletLmin: "40.063em",
//   tabletLmax: "64em",
//   desktop: "64.063em",
//   desktopLmin: "64.063em",
//   desktopLmax: "90em",
//   desktopXL: "90.063em",
//   desktopXLmin: "90.063em",
//   desktopXLmax: "120em",
//   desktopXXL: "120.063em",
// };

/* Custom, iPhone Retina */
/* Extra Small Devices, Phones */
/* Small Devices, Tablets */
/* Medium Devices, Desktops */
/* Large Devices, Wide Screens */

const size = {
  custom: "320px",
  mobile: "480px",
  tablet: "768px",
  desktop: "992px",
  desktopL: "1200px",
};
//media query for each device
export const device = {
  custom: `only screen and (min-width: ${size.custom})`,
  mobile: `only screen and (min-width: ${size.mobile})`,
  tablet: `only screen and (min-width: ${size.tablet})`,
  desktop: `only screen and (min-width: ${size.desktop})`,
  desktopL: `only screen and (min-width: ${size.desktopL})`,
};
