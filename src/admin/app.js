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
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Kanta Dashboard",
        "app.components.LeftMenu.navbrand.workplace":
          "Manage Kanta Administration",
        "Auth.form.welcome.title": "Welcom to Kanta Exchange Admin",
        "Auth.form.welcome.subtitle": "Login to your account",
        "Settings.profile.form.section.experience.interfaceLanguageHelp":
          "Preference changes will apply only to you.",
      },
    },
    tutorials: false,
    notifications: { releases: false },
  },
  bootstrap(app) {
    console.log(app);
  },
};
