import { Determination, GrammaticalCase } from "./Enums";
import { Pronoun } from "./Pronoun";

export class AddresingGrammar {
	
	language: string;
	pronouns: Pronoun[];

	constructor( value?: AdressingGramarStruct | string | any ) {
		if (!value) {
			this.language = "en"
			this.pronouns = []
		} else if (typeof(value) == 'string') {
			let deBase64Value = atob(value.replace(/A+==/, ""))
			console.log(deBase64Value)
			let ObjectValue: AdressingGramarStruct = JSON.parse(deBase64Value)

			if (!ObjectValue.hasOwnProperty("language") && !ObjectValue.hasOwnProperty("pronouns"))
				throw new Error("[AddresingGrammar] Invalid Addresing Value. Base64 Value doesn't include one of the following keys: [ language, pronouns ]");

			this.language = ObjectValue.language
			this.pronouns = ObjectValue.pronouns
		} else if (typeof(value) == 'object') {
			this.language = value.language
			this.pronouns = value.pronouns
		} else
			throw new Error("[AddresingGrammar] Unsupported Addresing Value");
	}

	addPronoun( pronoun: Pronoun | string | any, grammaticalCase?: GrammaticalCase, determination?: Determination ) {
		if (typeof(pronoun) == 'string' && !!grammaticalCase && !!determination) {
			this.pronouns.push({ morphology: { grammaticalCase, determination }, pronoun })
		} else if (pronoun.hasOwnPropperty("morfology") && pronoun.hasOwnPropperty("pronoun")) {
			this.pronouns.push(pronoun)
		}

		return this
	}

	addNominativeCase(pronoun: string, determination?: Determination) {
		this.pronouns.push({ morphology: { grammaticalCase: GrammaticalCase.Nominative, determination }, pronoun })
		return this
	}

	addGenitiveCase(pronoun: string, determination?: Determination) {
		this.pronouns.push({ morphology: { grammaticalCase: GrammaticalCase.Genitive, determination }, pronoun })
		return this
	}

	addAccusativeCase(pronoun: string, determination?: Determination) {
		this.pronouns.push({ morphology: { grammaticalCase: GrammaticalCase.Accusative, determination }, pronoun })
		return this
	}

	setLanguage(lang: string) {
		this.language = lang
		return this
	}

	toString() {
		return btoa(JSON.stringify({ ...this }))
	}

	toJSON() {
		return { ...this }
	}

	address(grammaticalCase?: GrammaticalCase, returnAs?: 'string' | 'object') {
		if (!grammaticalCase)
			grammaticalCase = GrammaticalCase.Nominative

		if (!returnAs)
			returnAs = 'string'

		let foundCase = this.pronouns.find(pronoun => pronoun.morphology.grammaticalCase == grammaticalCase)
		
		if (returnAs == 'object')
			return foundCase
		else
			return foundCase?.pronoun
	}
}

interface AdressingGramarStruct {
	[x: string]: any;
	language: string;
	pronouns: Pronoun[];
}