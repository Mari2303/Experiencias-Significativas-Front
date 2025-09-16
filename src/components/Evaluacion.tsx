
import React from "react";


import EvaluatorInfo from "./EvaluationC.tsx/EvaluatorInfo";
import ExperienceInfo from "./EvaluationC.tsx/ExperienceInfo";
import CriterioPertinencia from "./EvaluationC.tsx/CriterioPertinencia";
import CriteriaFoundation from "./EvaluationC.tsx/CriteriaFoundation";
import CriteriaInnovation from "./EvaluationC.tsx/CriteriaInnovation";
import CriteriaResults from "./EvaluationC.tsx/CriteriaResults";
import CriteriaEmpowerment from "./EvaluationC.tsx/CriteriaEmpowerment";
import CriteriaMonitoring from "./EvaluationC.tsx/CriteriaMonitoring";
import CriteriaTransformation from "./EvaluationC.tsx/CriteriaTransformation";
import CriteriaSustainability from "./EvaluationC.tsx/CriteriaSustainability ";
import CriteriaTransfer from "./EvaluationC.tsx/CriteriaTransfer";
import CriteriaFinalConcept from "./EvaluationC.tsx/CriteriaFinalConcept";

const Evaluation: React.FC = () => {
	return (
		<div className="min-h-screen bg-white-700 flex flex-col items-center justify-center pb-30" style={{ maxHeight: '100vh' }}>
			<div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8 mt-3550">
				{/* Header principal */}
				<h1 className="text-4xl font-bold !text-[#00aaff]  text-center">
					Formulario de Evaluación de Experiencias Significativas
				</h1>
				<h2 className="text-lg !text-[#00aaff] mb-8 text-center">
					Sistema de evaluación para experiencias educativas
				</h2>
				{/* Secciones internas */}
				<EvaluatorInfo />
				<div className="-mt-2">
					<ExperienceInfo />
				</div>
				   <div className="h-12" />
				   <CriterioPertinencia />
				   <CriteriaFoundation />
           <CriteriaInnovation />
           <CriteriaResults />
           <CriteriaEmpowerment />
           <CriteriaMonitoring />
           <CriteriaTransformation />
           <CriteriaSustainability />
           <CriteriaTransfer />
           <CriteriaFinalConcept />
			</div>
          
		</div>
	);
};

export default Evaluation;
