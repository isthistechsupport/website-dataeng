type DefaultLangCode = "en"
type SupportedLangCode = "es"
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = string
type RouteParams = {{ [uri: string]: undefined }
type TranslationPath = "pageTitle" | "pageDescription" | "aboutMeTitle" | "aboutMeText" | "skillsTitle" | "skillsText.dbtText" | "skillsText.eltText" | "skillsText.dataModelingText" | "skillsText.databasesText" | "skillsText.gisText" | "skillsText.publicCloudsText" | "skillsText.dataPlatformsText" | "skillsText.progLangsText" | "skillsText.dockerText" | "skillsText.dataVizText" | "skillsText.dataQAText" | "skillsText.excelText" | "portfolioTitle" | "portfolioText.tootbot.desc" | "portfolioText.tootbot.link" | "portfolioText.cubeposter.desc" | "portfolioText.cubeposter.link" | "portfolioText.ttsForDiscord.desc" | "portfolioText.ttsForDiscord.link" | "portfolioText.geih.desc" | "portfolioText.geih.link" | "portfolioText.sqlScripts.desc" | "portfolioText.sqlScripts.link" | "portfolioText.mset.desc" | "portfolioText.mset.link" | "portfolioText.website.desc" | "portfolioText.website.desc2" | "portfolioText.website.link" | "portfolioText.github.desc" | "portfolioText.github.link" | "portfolioText.github.desc2" | "portfolioText.closed.desc" | "portfolioText.cta.desc" | "portfolioText.cta.link" | "portfolioText.cta.desc2" | "portfolioText.cta.link2" | "interestsTitle" | "likesTitle" | "likesText.funcProgText" | "likesText.readingText" | "likesText.historyText" | "likesText.artText" | "likesText.musicText" | "likesText.travelText" | "likesText.photoText" | "likesText.cookingText" | "likesText.swText" | "likesText.imageText" | "contactTitle" | "contactText.emailText" | "contactText.workEmailText" | "footerText1" | "footerText2" | "footerText3" | "footerText4" | "footerText5" | "footerText6" | "footerLink1" | "footerLink2" | "footerText7" | "footerText8" | "footerText9"
type TranslationOptions = { "pageTitle": {} | undefined; "pageDescription": {} | undefined; "aboutMeTitle": {} | undefined; "aboutMeText": {} | undefined; "skillsTitle": {} | undefined; "skillsText.dbtText": {} | undefined; "skillsText.eltText": {} | undefined; "skillsText.dataModelingText": {} | undefined; "skillsText.databasesText": {} | undefined; "skillsText.gisText": {} | undefined; "skillsText.publicCloudsText": {} | undefined; "skillsText.dataPlatformsText": {} | undefined; "skillsText.progLangsText": {} | undefined; "skillsText.dockerText": {} | undefined; "skillsText.dataVizText": {} | undefined; "skillsText.dataQAText": {} | undefined; "skillsText.excelText": {} | undefined; "portfolioTitle": {} | undefined; "portfolioText.tootbot.desc": {} | undefined; "portfolioText.tootbot.link": {} | undefined; "portfolioText.cubeposter.desc": {} | undefined; "portfolioText.cubeposter.link": {} | undefined; "portfolioText.ttsForDiscord.desc": {} | undefined; "portfolioText.ttsForDiscord.link": {} | undefined; "portfolioText.geih.desc": {} | undefined; "portfolioText.geih.link": {} | undefined; "portfolioText.sqlScripts.desc": {} | undefined; "portfolioText.sqlScripts.link": {} | undefined; "portfolioText.mset.desc": {} | undefined; "portfolioText.mset.link": {} | undefined; "portfolioText.website.desc": {} | undefined; "portfolioText.website.desc2": {} | undefined; "portfolioText.website.link": {} | undefined; "portfolioText.github.desc": {} | undefined; "portfolioText.github.link": {} | undefined; "portfolioText.github.desc2": {} | undefined; "portfolioText.closed.desc": {} | undefined; "portfolioText.cta.desc": {} | undefined; "portfolioText.cta.link": {} | undefined; "portfolioText.cta.desc2": {} | undefined; "portfolioText.cta.link2": {} | undefined; "interestsTitle": {} | undefined; "likesTitle": {} | undefined; "likesText.funcProgText": {} | undefined; "likesText.readingText": {} | undefined; "likesText.historyText": {} | undefined; "likesText.artText": {} | undefined; "likesText.musicText": {} | undefined; "likesText.travelText": {} | undefined; "likesText.photoText": {} | undefined; "likesText.cookingText": {} | undefined; "likesText.swText": {} | undefined; "likesText.imageText": {} | undefined; "contactTitle": {} | undefined; "contactText.emailText": {} | undefined; "contactText.workEmailText": {} | undefined; "footerText1": {} | undefined; "footerText2": {} | undefined; "footerText3": {} | undefined; "footerText4": {} | undefined; "footerText5": {} | undefined; "footerText6": {} | undefined; "footerLink1": {} | undefined; "footerLink2": {} | undefined; "footerText7": {} | undefined; "footerText8": {} | undefined; "footerText9": {} | undefined; }

declare module "astro-i18n" {
	export * from "astro-i18n/"
	
	export function l<Uri extends RouteUri>(
		route: Uri | string & {},
		...args: Uri extends keyof RouteParams
			? undefined extends RouteParams[Uri]
				? [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
				: [params: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
			: [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
	): string
	
	export function t<Path extends TranslationPath>(
		path: Path | string & {},
		...args: undefined extends TranslationOptions[Path]
			? [options?: keyof TranslationOptions extends Path ? Record<string, unknown> : TranslationOptions[Path], langCode?: LangCode]
			: [options: TranslationOptions[Path], langCode?: LangCode]
	): string
	
	export function extractRouteLangCode(route: string): LangCode | undefined
	
	type Translation = string | { [translationKey: string]: string | Translation }
	type Translations = { [langCode: string]: Record<string, Translation> }
	type RouteTranslations = { [langCode: string]: Record<string, string> }
	type InterpolationFormatter = (value: unknown, ...args: unknown[]) => string
	class AstroI18n {
		defaultLangCode: DefaultLangCode
		supportedLangCodes: SupportedLangCode[]
		showDefaultLangCode: boolean
		translations: Translations
		routeTranslations: RouteTranslations
		get langCodes(): LangCode[]
		get langCode(): LangCode
		set langCode(langCode: LangCode)
		get formatters(): Record<string, InterpolationFormatter>
		init(Astro: { url: URL }, formatters?: Record<string, InterpolationFormatter>): void
		addTranslations(translations: Translations): void
		addRouteTranslations(routeTranslations: RouteTranslations): void
		getFormatter(name: string): InterpolationFormatter | undefined
		setFormatter(name: string, formatter: InterpolationFormatter): void
		deleteFormatter(name: string): void
	}
	export const astroI18n: AstroI18n
}
