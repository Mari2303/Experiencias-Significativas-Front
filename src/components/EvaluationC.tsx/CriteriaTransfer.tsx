import React from "react";

const CriteriaTransfer: React.FC = () => {
	return (
		<section className="w-full px-0 mt-4 min-h-[400px]">
			<div className="bg-[#e9ecef] rounded-t-xl px-8 py-6">
				<h2 className="text-2xl font-bold !text-[#2196f3]">Criterio: Transferencia</h2>
			</div>
			<div className="px-8 pt-8 pb-8">
				<div className="mb-2">
					<span className="font-bold !text-[#2196f3] text-lg">Transferencia:</span>
					<span className="text-gray-800 font-normal"> Valora la potencialidad de adaptación, difusión y réplica de la experiencia en otros contextos educativos similares, así como los mecanismos concretos de socialización y apropiación fuera de su espacio original.</span>
				</div>
				<p className="mb-2 text-gray-800">
					Solo podrá seleccionar un Estado y valorar de manera cuantitativa  de acuerdo a su concepto como tutor/evaluador, al igual podrá realizar aportes  para el mejoramiento. Una vez realizada la valoración,  las demás preguntas se debe seleccionar <span className="font-bold">No aplica</span>
				</p>
				<p className="mb-6 text-gray-800">
					Faltan procesos, metodologías, mecanismos o medios para dar a conocer dentro del establecimiento educativo la concepción, el desarrollo y los resultados de la experiencia.
				</p>
				<div className="flex flex-col gap-4">
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="transferencia" className="custom-radio" value="0" />
						<span className="ml-2">0</span>
					</label>
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="transferencia" className="custom-radio" value="1" />
						<span className="ml-2">1</span>
					</label>
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="transferencia" className="custom-radio" value="2" />
						<span className="ml-2">2</span>
					</label>
				</div>
				{/* Primer bloque extendido de criterio */}
				<div className="mt-12 mb-8">
					<p className="mb-6 text-gray-800">
						Se definen y organizan los procesos, metodologías, mecanismos o medios para dar a conocer el desarrollo y los resultados de la experiencia dentro del establecimiento educativo. Se evidencian acciones para la difusión y socialización de la experiencia. A través de la sistematización y el análisis de los resultados de la experiencia significativa, se identifican acciones para transferir aprendizajes dentro del EE que sirvan para el fortalecimiento de la misma.
					</p>
					<select className="w-48 border rounded p-2 mb-6">
						<option value="">Elegir</option>
						<option value="parcial">Parcial</option>
						<option value="total">Total</option>
						<option value="ninguno">Ninguno</option>
					</select>
				</div>
				<hr className="my-8 border-gray-300" />
				{/* Segundo bloque extendido de criterio */}
				<div className="mb-8">
					<p className="mb-6 text-gray-800">
						Se han institucionalizado procesos, metodologías, mecanismos o medios de difusión con el fin de dar a conocer en la comunidad educativa la concepción, el desarrollo y los resultados de la experiencia significativa para la socialización en nuevos escenarios educativos. Diferentes procesos, metodologías, mecanismos, medios o aprendizajes de la experiencia significativa se han transferido de manera exitosa dentro y fuera del EE
					</p>
					<div className="flex flex-col gap-4">
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="transferencia2" className="custom-radio" value="6" />
							<span className="ml-2">6</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="transferencia2" className="custom-radio" value="7" />
							<span className="ml-2">7</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="transferencia2" className="custom-radio" value="8" />
							<span className="ml-2">8</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="transferencia2" className="custom-radio" value="9" />
							<span className="ml-2">9</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="transferencia2" className="custom-radio" value="10" />
							<span className="ml-2">10</span>
						</label>
					</div>
				</div>
				{/* Textarea de aportes */}
				<div className="mb-2">
					<label className="block font-semibold !text-[#2196f3] mb-2">
						Aportes para el mejoramiento frente al criterio evaluado Transferencia  ( Si no hay aportes favor escribir "NO APLICA")
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

export default CriteriaTransfer;
