import React from "react";
import { CriteriaEvaluation } from "../../Api/Types/evaluation";

interface CriterioPertinenciaProps {
	value: CriteriaEvaluation;
	onChange: (newValue: CriteriaEvaluation) => void;
}

const CriterioPertinencia: React.FC<CriterioPertinenciaProps> = ({ value, onChange }) => {
	return (
		<section className="w-full px-0 mt-4 min-h-[400px]">
			<div className="bg-[#e9ecef] rounded-t-xl px-8 py-6">
				<h2 className="text-2xl font-bold !text-[#2196f3]">Criterio: Pertinencia</h2>
			</div>
			<div className="px-8 pt-8 pb-8">
				<div className="mb-2">
					<span className="font-bold !text-[#2196f3] text-lg">Pertinencia:</span>
				</div>
				<p className="mb-2 text-gray-800">
					Evalúa el grado en que la experiencia responde a las necesidades, problemáticas y características del contexto educativo en que se implementa, asegurando su utilidad real y concreta para la comunidad beneficiada
				</p>
				<p className="mb-2 text-gray-800">
					Sólo podrá seleccionar una opción de las tres descripciones del Estado y valorar de manera cuantitativa de acuerdo a su concepto como Evaluador, al igual podrá realizar aportes para el mejoramiento. Una vez realizada la valoración del criterio.
				</p>
				<p className="mb-6 text-gray-800">
					La experiencia significativa se encuentra en un proceso de identificación de la relación y coherencia con el contexto en el cual se circunscribe, con las acciones a desarrollar, con las necesidades y problemáticas identificadas en función del desarrollo integral de niños, niñas, adolescentes, jóvenes y adulto.
				</p>
								<div className="flex flex-row gap-8">
									<label className="inline-flex items-center cursor-pointer">
										<input
											type="radio"
											name="pertinencia1"
											className="custom-radio"
											value="0"
											checked={value.score === 0}
											onChange={() => onChange({ ...value, score: 0 })}
										/>
										<span className="ml-2">0</span>
									</label>
									<label className="inline-flex items-center cursor-pointer">
										<input
											type="radio"
											name="pertinencia1"
											className="custom-radio"
											value="1"
											checked={value.score === 1}
											onChange={() => onChange({ ...value, score: 1 })}
										/>
										<span className="ml-2">1</span>
									</label>
									<label className="inline-flex items-center cursor-pointer">
										<input
											type="radio"
											name="pertinencia1"
											className="custom-radio"
											value="2"
											checked={value.score === 2}
											onChange={() => onChange({ ...value, score: 2 })}
										/>
										<span className="ml-2">2</span>
									</label>
									<label className="inline-flex items-center cursor-pointer">
										<input
											type="radio"
											name="pertinencia1"
											className="custom-radio"
											value="-1"
											checked={value.score === -1}
											onChange={() => onChange({ ...value, score: -1 })}
										/>
										<span className="ml-2">No aplica</span>
									</label>
								</div>
				{/* Aquí se agrega el bloque de criterios y textarea como en la imagen */}
				<div className="mt-12">
					{/* Primer bloque de criterio */}
					<div className="mb-8">
						<p className="mb-6 text-gray-800">
							Se muestran avances en el proceso de identificación de la relación y coherencia con el contexto en el cual se circunscribe y con las acciones desarrolladas ofreciendo respuestas consistentes con las necesidades y problemáticas identificadas, en función del desarrollo integral de niños, niñas, adolescentes, jóvenes y adultos.
						</p>
												<div className="flex flex-row gap-8">
													<label className="inline-flex items-center cursor-pointer">
														<input
															type="radio"
															name="pertinencia1"
															className="custom-radio"
															value="3"
															checked={value.score === 3}
															onChange={() => onChange({ ...value, score: 3 })}
														/>
														<span className="ml-2">3</span>
													</label>
													<label className="inline-flex items-center cursor-pointer">
														<input
															type="radio"
															name="pertinencia1"
															className="custom-radio"
															value="4"
															checked={value.score === 4}
															onChange={() => onChange({ ...value, score: 4 })}
														/>
														<span className="ml-2">4</span>
													</label>
													<label className="inline-flex items-center cursor-pointer">
														<input
															type="radio"
															name="pertinencia1"
															className="custom-radio"
															value="5"
															checked={value.score === 5}
															onChange={() => onChange({ ...value, score: 5 })}
														/>
														<span className="ml-2">5</span>
													</label>
												</div>
					</div>
					<hr className="my-8 border-gray-300" />
					{/* Segundo bloque de criterio */}
					<div className="mb-8">
						<p className="mb-6 text-gray-800">
							Se identifican de manera clara y detallada la relación y coherencia con el contexto en el cual se circunscribe. Señala cómo la experiencia aborda y desarrolla acciones para resolver de manera efectiva las causas atribuidas a las problemáticas identificadas y al desarrollo integral de niños, niñas, adolescentes, jóvenes y adultos.
						</p>
												<div className="flex flex-row gap-8">
													<label className="inline-flex items-center cursor-pointer">
														<input
															type="radio"
															name="pertinencia2"
															className="custom-radio"
															value="6"
															checked={value.score === 6}
															onChange={() => onChange({ ...value, score: 6 })}
														/>
														<span className="ml-2">6</span>
													</label>
													<label className="inline-flex items-center cursor-pointer">
														<input
															type="radio"
															name="pertinencia2"
															className="custom-radio"
															value="7"
															checked={value.score === 7}
															onChange={() => onChange({ ...value, score: 7 })}
														/>
														<span className="ml-2">7</span>
													</label>
													<label className="inline-flex items-center cursor-pointer">
														<input
															type="radio"
															name="pertinencia2"
															className="custom-radio"
															value="8"
															checked={value.score === 8}
															onChange={() => onChange({ ...value, score: 8 })}
														/>
														<span className="ml-2">8</span>
													</label>
													<label className="inline-flex items-center cursor-pointer">
														<input
															type="radio"
															name="pertinencia2"
															className="custom-radio"
															value="9"
															checked={value.score === 9}
															onChange={() => onChange({ ...value, score: 9 })}
														/>
														<span className="ml-2">9</span>
													</label>
													<label className="inline-flex items-center cursor-pointer">
														<input
															type="radio"
															name="pertinencia2"
															className="custom-radio"
															value="10"
															checked={value.score === 10}
															onChange={() => onChange({ ...value, score: 10 })}
														/>
														<span className="ml-2">10</span>
													</label>
												</div>
					</div>
					{/* Textarea de aportes */}
					<div className="mb-2">
						<label className="block font-semibold !text-[#2196f3] mb-2">
							Aportes para el mejoramiento frente al criterio evaluado Pertinencia ( Si no hay aportes favor escribir "NO APLICA")
						</label>
						<textarea
							className="w-full border rounded p-2 min-h-[60px] focus:ring-2 focus:ring-[#2196f3]"
							placeholder="Tu respuesta"
							value={value.state ? value.descriptionContribution ?? "" : ""}
							onChange={e => onChange({ ...value, descriptionContribution: e.target.value })}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CriterioPertinencia;
