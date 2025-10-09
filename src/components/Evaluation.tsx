
import React, { useState, useEffect } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import axios from "axios";
import type { Evaluation } from "../Api/Types/evaluation";
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
import type { Experience, Institution } from "../Api/Types/experienceTypes";




interface EvaluationProps {
	experienceId?: number | null;
	experiences?: Experience[];
}

function Evaluation({ experienceId, experiences = [] }: EvaluationProps) {
	const [activeStep, setActiveStep] = useState(0);
	const [form, setForm] = useState<Evaluation>({
		evaluationId: 0,
		typeEvaluation: "",
		accompanimentRole: "",
		comments: "",
		evaluationResult: "",
		experienceId: experienceId ?? 0,
		experienceName: "",
		stateId: 0,
		institutionName: "",
		criteriaEvaluations: [],
		thematicLineNames: [],
		userId: Number(localStorage.getItem("userId")) || 0
	});
		// Eliminado: las experiencias ahora vienen por props desde Experiences.tsx

	// Cargar experiencias al montar (igual que en Experiences.tsx)
		// Eliminado: las experiencias ahora vienen por props

	// Sincroniza experienceId y rellena los campos de ExperienceInfo
		useEffect(() => {
				if (experienceId && experiences.length > 0) {
					const exp = experiences.find(e => e.id === experienceId);
					if (exp) {
						console.log('Experiencia seleccionada:', exp);
						setForm(prev => ({
							...prev,
							experienceId: exp.id,
							institutionName: exp.institution?.name || "",
							experienceName: exp.nameExperiences || "",
							thematicLineNames: exp.thematicLineIds ? exp.thematicLineIds.map(id => id.toString()) : [],
							stateId: exp.stateId || 0
						}));
					}
				}
		}, [experienceId, experiences]);

	// Sincroniza el experienceId recibido por props con el modelo de evaluación
	useEffect(() => {
		if (experienceId && experienceId !== form.experienceId) {
			setForm(prev => ({ ...prev, experienceId }));
		}
	}, [experienceId]);
	const [isSaving, setIsSaving] = useState(false);
	const [error, setError] = useState<string | null>(null);
	// Estados para validación y errores
	// Eliminada validación y errores, solo conexión API

	const steps = [
		"Evaluador",
		"Experiencia",
		"Pertinencia",
		"Fundamentación",
		"Innovación",
		"Resultados",
		"Empoderamiento",
		"Monitoreo",
		"Transformación",
		"Sostenibilidad",
		"Transferencia",
		"Concepto Final"
	];

	const handleNext = () => {
		setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
	};
	const handleBack = () => {
		setActiveStep((prev) => Math.max(prev - 1, 0));
	};

	const handleChange = (changes: Partial<Evaluation>) => {
		setForm((prev) => ({ ...prev, ...changes }));
	};

	const handleSubmit = async () => {
		setIsSaving(true);
		setError(null);
		const token = localStorage.getItem("token");
		// Actualiza el userId antes de enviar
		const userId = Number(localStorage.getItem("userId")) || 0;
		const formToSend = { ...form, userId };
		console.log("Formulario a enviar:", formToSend);
		try {
			await axios.post("/api/Evaluation/create", formToSend, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setIsSaving(false);
			alert("Evaluación guardada correctamente");
		} catch (err) {
			setError("Error al guardar la evaluación");
			setIsSaving(false);
		}
	};

	return (
		<div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8 mx-auto">
			{activeStep === 0 && (
				<>
					<h1 className="text-4xl font-bold !text-[#00aaff]  text-center mt-8">
						Formulario de Evaluación de Experiencias Significativas
					</h1>
					
				</>
			)}

			<div className="mt-8">
				{activeStep === 0 && (
					<EvaluatorInfo
						value={form}
						onChange={handleChange}
					/>
				)}
				{activeStep === 1 && (
					<ExperienceInfo
						value={form}
						onChange={handleChange}
					/>
				)}
				{activeStep === 2 && <CriterioPertinencia value={form} onChange={handleChange} />}
				{activeStep === 3 && <CriteriaFoundation value={form} onChange={handleChange} />}
				{activeStep === 4 && <CriteriaInnovation value={form} onChange={handleChange} />}
				{activeStep === 5 && <CriteriaResults value={form} onChange={handleChange} />}
				{activeStep === 6 && <CriteriaEmpowerment value={form} onChange={handleChange} />}
				{activeStep === 7 && <CriteriaMonitoring value={form} onChange={handleChange} />}
				{activeStep === 8 && <CriteriaTransformation value={form} onChange={handleChange} />}
				{activeStep === 9 && <CriteriaSustainability value={form} onChange={handleChange} />}
				{activeStep === 10 && <CriteriaTransfer value={form} onChange={handleChange} />}
				{activeStep === 11 && <CriteriaFinalConcept value={form} onChange={handleChange} />}
			</div>
			<div className="flex justify-between mt-8">
				<Button disabled={activeStep === 0} onClick={handleBack} variant="outlined">Atrás</Button>
				{activeStep < steps.length - 1 ? (
					<Button
						onClick={handleNext}
						variant="contained"
						color="primary"
					>
						Siguiente
					</Button>
				) : (
					<Button onClick={handleSubmit} variant="contained" color="success" disabled={isSaving}>
						{isSaving ? "Enviando..." : "Enviar"}
					</Button>
				)}
			</div>
			{error && <div className="text-red-500 text-center mt-4">{error}</div>}
		</div>
	);
}

export default Evaluation;
