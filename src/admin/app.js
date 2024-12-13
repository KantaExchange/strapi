import "./custom.css";
import Logo from "./kanta.png";
import favicon from "../../favicon.png";


export default {
  config: {
    auth: {
      logo: Logo,
    },
    menu: {
      logo: Logo,
    },
    head: {
      favicon: favicon,
    },
    theme: {
      // Light Mode Colors
      light: {
        colors: {
          primary100: "#CEF298",
          primary200: "#8BB14C",
          primary500: "#7FBE08",
          primary600: "#06562F",
          primary700: "#204500",

          secondary100: "#FFE9D6",
          secondary200: "#FFC78A",
          secondary500: "#FF9500",
          secondary600: "#CC7700",
          secondary700: "#8A5200",

          neutral0: "#FFFFFF",
          neutral100: "#F8F9FA",
          neutral150: "#EDEDED",
          neutral200: "#D9D9D9",
          neutral500: "#7E7E7E",
          neutral700: "#3F3F3F",
          neutral800: "#2A2A2A",

          success500: "#28A745",
          warning500: "#E09F00",
          danger500: "#DC3545",
        },
        components: {
          button: {
            // Primary Button
            primary: {
              background: "#7FBE08", // Primary brand color
              color: "#FFFFFF", // Text color
              borderColor: "#7FBE08",
              hover: {
                background: "#65A807", // Slightly darker on hover
                borderColor: "#65A807",
              },
            },
            // Secondary Button
            secondary: {
              background: "#F8F9FA", // Light grey
              color: "#7FBE08", // Primary text color
              borderColor: "#D9D9D9", // Border
              hover: {
                background: "#EDEDED",
                borderColor: "#7FBE08",
              },
            },
            // Danger Button
            danger: {
              background: "#DC3545", // Red
              color: "#FFFFFF",
              borderColor: "#DC3545",
              hover: {
                background: "#B52A38", // Darker red on hover
                borderColor: "#B52A38",
              },
            },
          },
        },
      },

      // Dark Mode Colors
      dark: {
        colors: {
          primary100: "#2F3E1F", // Darker green shade
          primary200: "#3A5E2E",
          primary500: "#6BAE4C", // Softer green for readability
          primary600: "#4B8E36",
          primary700: "#2D6821",

          secondary100: "#4A3220", // Dark peach
          secondary200: "#8A5A2C",
          secondary500: "#E27D35", // Muted burnt orange
          secondary600: "#C46A1D",
          secondary700: "#8F4C12",

          neutral0: "#121212", // Background (dark black)
          neutral100: "#1E1E1E", // Slightly lighter black
          neutral150: "#2C2C2C",
          neutral200: "#3E3E3E",
          neutral500: "#9E9E9E", // Light grey for text
          neutral700: "#C7C7C7", // Lighter grey for headings
          neutral800: "#E0E0E0", // Almost white text

          success500: "#4CAF50", // Muted success green
          warning500: "#D69A00", // Deeper yellow-orange
          danger500: "#C82333", // Muted danger red
        },
        components: {
          button: {
            // Primary Button
            primary: {
              background: "#6BAE4C", // Muted green
              color: "#121212", // Dark text
              borderColor: "#6BAE4C",
              hover: {
                background: "#4B8E36", // Darker on hover
                borderColor: "#4B8E36",
              },
            },
            // Secondary Button
            secondary: {
              background: "#1E1E1E", // Dark grey
              color: "#6BAE4C",
              borderColor: "#3E3E3E",
              hover: {
                background: "#2C2C2C",
                borderColor: "#6BAE4C",
              },
            },
            // Danger Button
            danger: {
              background: "#C82333",
              color: "#FFFFFF",
              borderColor: "#C82333",
              hover: {
                background: "#8A1C27", // Darker red on hover
                borderColor: "#8A1C27",
              },
            },
          },
        },
      },
    },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Kanta Dashboard",
        "app.components.LeftMenu.navbrand.workplace":
          "Manage Kanta Administration",
        "Auth.form.welcome.title": "Welcome to Kanta Exchange Admin",
        "Auth.form.welcome.subtitle": "Login to your account",
      },
    },
    tutorials: false,
    notifications: { releases: false },
  },
  bootstrap(app) {
    console.log(app);
  },
};
