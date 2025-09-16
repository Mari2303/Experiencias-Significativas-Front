// Interface para los líderes de la experiencia
export interface Lider {
	nombre: string;
	documento: string;
	correo: string;
	cargo: string;
	telefono: string;
}
// DTOs para crear experiencia alineados al backend
export interface Institution {
	name: string;
	address: string;
	phone: number;
	emailInstitucional: string;
	departament: string;
	commune: string;
	municipality: string;
	nameRector: string;
	eZone: string;
	caracteristic: string;
	territorialEntity: string;
	testsKnow: string;
}

export interface Document {
	name: string;
	urlPdf: string;
	urlLink: string;
}

export interface Objective {
	descriptionProblem: string;
	objectiveExperience: string;
	enfoqueExperience: string;
	innovationExperience: string;
	resulsExperience: string;
	sustainabilityExperience: string;
	metaphoricalPhrase: string;
	testimony: string;
	dissemination: string;
}

export interface HistoryExperience {
	action: string;
	tableName: string;
	userId: number;
	stateId: number;
}

export interface Experience {
	nameExperiences: string;
	summary: string;
	methodologias: string;
	tranfer: string;
	code: string;
	developmenttime: string; // ISO string
	recognition: string;
	socialization: string;
	themeExperienceArea: string;
	coordinationTransversalProjects: string;
	pedagogicalStrategies: string;
	coverage: string;
	experiencesCovidPandemic: string;
	userId: number;
		institution: Institution;
	stateId: number;
	thematicLineIds: number[];
	gradeIds: number[];
	populationGradeIds: number[];
		documents: Document[];
		objectives: Objective[];
		historyExperiences: HistoryExperience[];
}
