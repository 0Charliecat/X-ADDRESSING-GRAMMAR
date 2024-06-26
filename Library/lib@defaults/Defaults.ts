import { AddresingGrammar } from "../package/_types/AddressingGrammar";

export default {

	en: {
		"he/him":		new AddresingGrammar({"language":"en","pronouns":[{"morphology":{"grammaticalCase":"nominative"},"pronoun":"he"},{"morphology":{"grammaticalCase":"accusative"},"pronoun":"him"},{"morphology":{"grammaticalCase":"genitive","determination":"independent"},"pronoun":"his"}]}),
		"she/her":		new AddresingGrammar({"language":"en","pronouns":[{"morphology":{"grammaticalCase":"nominative"},"pronoun":"she"},{"morphology":{"grammaticalCase":"accusative"},"pronoun":"her"},{"morphology":{"grammaticalCase":"genitive","determination":"independent"},"pronoun":"hers"}]}),
		"they/them":	new AddresingGrammar({"language":"en","pronouns":[{"morphology":{"grammaticalCase":"nominative"},"pronoun":"they"},{"morphology":{"grammaticalCase":"accusative"},"pronoun":"them"},{"morphology":{"grammaticalCase":"genitive","determination":"independent"},"pronoun":"their"}]}),
	},

	
}