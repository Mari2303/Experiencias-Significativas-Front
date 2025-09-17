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
  codeDane: string;
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

export interface Grade {
  gradeId: number;
  description: string;
}

export interface Objective {
  descriptionProblem: string;
  objectiveExperience: string;
  enfoqueExperience: string;
  methodologias: string;
  innovationExperience: string;
  resulsExperience: string;
  sustainabilityExperience: string;
  tranfer: string;
  summary: string;
  metaphoricalPhrase: string;
  testimony: string;
  followEvaluation: string;
}

export interface HistoryExperience {
  action: string;
  tableName: string;
  userId: number;
  stateId: number;
}

export interface Experience {
  nameExperiences: string;
  code: string;
  nameFirstLeader: string;
  firstIdentityDocument: string;
  firdtEmail: string;
  firstPosition: string;
  firstPhone: number;
  nameSecondLeader: string;
  secondIdentityDocument: string;
  secondEmail: string;
  secondPosition: string;
  secondPhone: number;
  thematicLocation: string;
  stateId: number;
  thematicLineIds: number[];
  coordinationTransversalProjects: string;
  population: string;
  pedagogicalStrategies: string;
  coverage: string;
  experiencesCovidPandemic: string;
  grades: Grade[];
  populationGradeIds: number[];
  developmenttime: string;
  recognition: string;
  socialization: string;
  userId: number;
  institution: Institution;
  documents: Document[];
  objectives: Objective[];
  historyExperiences: HistoryExperience[];
}
