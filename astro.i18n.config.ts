import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	defaultLangCode: "en",
	supportedLangCodes: ["es"],
	showDefaultLangCode: true,
	translations: {
		en: "/src/locales/en.json",
		es: "/src/locales/es.json",
	},
	routeTranslations: {},
})