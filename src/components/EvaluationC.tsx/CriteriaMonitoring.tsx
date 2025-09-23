import React from "react";

const CriteriaMonitoring: React.FC = () => {
	return (
		<section className="w-full px-0 mt-4 min-h-[400px]">
			<div className="bg-[#e9ecef] rounded-t-xl px-8 py-6">
				<h2 className="text-2xl font-bold !text-[#2196f3]">Criterio: Seguimiento y Valoración</h2>
			</div>
			<div className="px-8 pt-8 pb-8">
				<div className="mb-2">
					<span className="font-bold !text-[#2196f3] text-lg">Seguimiento y Valoración,</span>
					<span className="text-gray-800 font-normal"> Se refiere al uso sistemático de mecanismos, metodologías e instrumentos que permiten monitorear, evaluar periódicamente y ajustar la experiencia para garantizar su mejora continua</span>
				</div>
				<p className="mb-2 text-gray-800">
					Solo podrá seleccionar un Estado y valorar de manera cuantitativa  de acuerdo a su concepto como tutor/evaluador, al igual podrá realizar aportes  para el mejoramiento. Una vez realizada la valoración,  las demás preguntas se debe seleccionar <span className="font-bold">No aplica.</span>
				</p>
				<p className="mb-6 text-gray-800">
					La metodología y/o mecanismos definidos para realizar el seguimiento y la valoración periódica del proceso y los resultados de la experiencia significativa están en construcción.
				</p>
			<div className="flex flex-row gap-8">
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="seguimiento" className="custom-radio" value="0" />
						<span className="ml-2">0</span>
					</label>
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="seguimiento" className="custom-radio" value="1" />
						<span className="ml-2">1</span>
					</label>
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="seguimiento" className="custom-radio" value="2" />
						<span className="ml-2">2</span>
					</label>
				</div>
				{/* Primer bloque extendido de criterio */}
				<div className="mt-12 mb-8">
					<p className="mb-6 text-gray-800">
						Existe una metodología y/o mecanismos que permiten realizar seguimiento y valoración periódica del proceso y los resultados de la experiencia significativa. Se identifican y formulan acciones para fortalecer la metodología y/o los mecanismos dirigidos a la consecución y el análisis de la información, con el fin de realizar el seguimiento y la valoración de la experiencia, involucrando a la comunidad educativa.
					</p>
					
				</div>
				<hr className="my-8 border-gray-300" />
				{/* Segundo bloque extendido de criterio */}
				<div className="mb-8">
					<p className="mb-6 text-gray-800">
						Adoptan una metodología y/o mecanismos que se reconocen a nivel institucional para efectuar seguimiento y valoración a la ejecución de la experiencia significativa, para la transformación de los componentes propios de esta y el fortalecimiento de las áreas de gestión del establecimiento educativo, que sirvan como referente para otros que así lo requieran. En el seguimiento y valoración de la experiencia participan diferentes actores de la comunidad educativa.
					</p>
					<div className="flex flex-row gap-8">
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="seguimiento2" className="custom-radio" value="6" />
							<span className="ml-2">6</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="seguimiento2" className="custom-radio" value="7" />
							<span className="ml-2">7</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="seguimiento2" className="custom-radio" value="8" />
							<span className="ml-2">8</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="seguimiento2" className="custom-radio" value="9" />
							<span className="ml-2">9</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="seguimiento2" className="custom-radio" value="10" />
							<span className="ml-2">10</span>
						</label>
					</div>
				</div>
				{/* Textarea de aportes */}
				<div className="mb-2">
					<label className="block font-semibold !text-[#2196f3] mb-2">
						Aportes para el mejoramiento frente al criterio evaluado Seguimiento y valoración  ( Si no hay aportes favor escribir "NO APLICA")
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

export default CriteriaMonitoring;
