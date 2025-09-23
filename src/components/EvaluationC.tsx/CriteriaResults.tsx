import React from "react";

const CriteriaResults: React.FC = () => {
	return (
		<section className="w-full px-0 mt-4 min-h-[400px]">
			<div className="bg-[#e9ecef] rounded-t-xl px-8 py-6">
				<h2 className="text-2xl font-bold !text-[#2196f3]">Criterio: Resultados</h2>
			</div>
			<div className="px-8 pt-8 pb-8">
				<div className="mb-2">
					<span className="font-bold !text-[#2196f3] text-lg">Resultados,</span>
					<span className="text-gray-800 font-normal"> Examina los logros obtenidos frente a los objetivos planteados, la mejora en aprendizajes estudiantiles, el impacto institucional y posibles reconocimientos, premios o incentivos recibidos.</span>
				</div>
				<p className="mb-2 text-gray-800">
					Sólo podrá seleccionar un Estado y valorar de manera cuantitativa de acuerdo a su concepto como tutor/evaluador, al igual podrá realizar aportes  para el mejoramiento. Una vez realizada la valoración,  las demás preguntas se debe seleccionar <span className="font-bold">No aplica.</span>
				</p>
				<p className="mb-6 text-gray-800">
					Durante la implementación de la experiencia significativa, no se identifica la obtención de logros o son mínimos en relación con los objetivos propuestos. Los resultados obtenidos no han generado un impacto en la solución de las necesidades o problemáticas identificadas.
				</p>
			<div className="flex flex-row gap-8">
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="resultados" className="custom-radio" value="0" />
						<span className="ml-2">0</span>
					</label>
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="resultados" className="custom-radio" value="1" />
						<span className="ml-2">1</span>
					</label>
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="resultados" className="custom-radio" value="2" />
						<span className="ml-2">2</span>
					</label>
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="resultados" className="custom-radio" value="3" />
						<span className="ml-2">3</span>
					</label>
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="resultados" className="custom-radio" value="4" />
						<span className="ml-2">4</span>
					</label>
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="resultados" className="custom-radio" value="5" />
						<span className="ml-2">5</span>
					</label>
				</div>
						{/* Primer bloque extendido de criterio */}
						<div className="mt-12 mb-8">
							<p className="mb-6 text-gray-800">
								La experiencia significativa evidencia logros parciales en relación con los objetivos propuestos. Los resultados obtenidos evidencian impacto en la solución parcial de las necesidades o problemáticas identificadas.
							</p>
							
						</div>
						<hr className="my-8 border-gray-300" />
						{/* Segundo bloque extendido de criterio */}
						<div className="mb-8">
							<p className="mb-6 text-gray-800">
								Evidencia la obtención de todos los objetivos propuestos.  Los resultados obtenidos evidencian impacto en la solución total de las necesidades o problemáticas identificadas.
							</p>
							<div className="flex flex-row gap-8">
								<label className="inline-flex items-center cursor-pointer">
									<input type="radio" name="resultados2" className="custom-radio" value="11" />
									<span className="ml-2">11</span>
								</label>
								<label className="inline-flex items-center cursor-pointer">
									<input type="radio" name="resultados2" className="custom-radio" value="12" />
									<span className="ml-2">12</span>
								</label>
								<label className="inline-flex items-center cursor-pointer">
									<input type="radio" name="resultados2" className="custom-radio" value="13" />
									<span className="ml-2">13</span>
								</label>
								<label className="inline-flex items-center cursor-pointer">
									<input type="radio" name="resultados2" className="custom-radio" value="14" />
									<span className="ml-2">14</span>
								</label>
								<label className="inline-flex items-center cursor-pointer">
									<input type="radio" name="resultados2" className="custom-radio" value="15" />
									<span className="ml-2">15</span>
								</label>
							</div>
						</div>
						{/* Textarea de aportes */}
						<div className="mb-2">
							<label className="block font-semibold !text-[#2196f3] mb-2">
								Aportes para el mejoramiento frente al criterio evaluado Resultados  ( Si no hay aportes favor escribir "NO APLICA")
							</label>
							<textarea
								className="w-full border rounded p-2 min-h-[60px] focus:ring-2 focus:ring-[#2196f3]"
								placeholder="Tu respuesta"
							/>
						</div>
					</div>
				</section>
			);
		};

		export default CriteriaResults;
