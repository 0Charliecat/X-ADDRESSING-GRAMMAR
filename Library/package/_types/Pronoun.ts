import { Determination, GrammaticalCase } from "./Enums"

export interface Pronoun {
	morphology: Morfology,
	pronoun: String
}

export interface Morfology {
	grammaticalCase: GrammaticalCase,
	determination?: Determination
}