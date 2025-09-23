import React from "react";

const CriteriaSustainability: React.FC = () => {
	return (
		<section className="w-full px-0 mt-4 min-h-[400px]">
			<div className="bg-[#e9ecef] rounded-t-xl px-8 py-6">
				<h2 className="text-2xl font-bold !text-[#2196f3]">Criterio: Sostenibilidad</h2>
			</div>
			<div className="px-8 pt-8 pb-8">
				<div className="mb-2">
					<span className="font-bold !text-[#2196f3] text-lg">Sostenibilidad,</span>
					<span className="text-gray-800 font-normal"> Considera la viabilidad de mantener, fortalecer y consolidar la experiencia a lo largo del tiempo, haciendo énfasis en recursos humanos, técnicos, financieros e institucionales necesarios para su continuidad.</span>
				</div>
				<p className="mb-2 text-gray-800">
					Solo podrá seleccionar un Estado y valorar de manera cuantitativa  de acuerdo a su concepto como tutor/evaluador, al igual podrá realizar aportes  para el mejoramiento. Una vez realizada la valoración,  las demás preguntas se debe seleccionar <span className="font-bold">No aplica.</span>
				</p>
				<p className="mb-6 text-gray-800">
					Los mecanismos que garantizan el mantenimiento, fortalecimiento y consolidación de la experiencia significativa dentro del establecimiento educativo son incipientes.
				</p>
			<div className="flex flex-row gap-8">
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="sostenibilidad" className="custom-radio" value="0" />
						<span className="ml-2">0</span>
					</label>
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="sostenibilidad" className="custom-radio" value="1" />
						<span className="ml-2">1</span>
					</label>
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="sostenibilidad" className="custom-radio" value="2" />
						<span className="ml-2">2</span>
					</label>
				</div>
				{/* Primer bloque extendido de criterio */}
				<div className="mt-12 mb-8">
					<p className="mb-6 text-gray-800">
						Contempla mecanismos que buscan generar acciones para el mantenimiento, fortalecimiento y consolidación de la experiencia significativa dentro del establecimiento educativo, dando continuidad o institucionalizando las actividades para el cumplimiento de los objetivos de la misma. Se plantean estrategias para articular las acciones de cooperación que recibe la experiencia por parte de otras entidades, a través de programas y proyectos externos al establecimiento educativo
					</p>
				
				</div>
				<hr className="my-8 border-gray-300" />
				{/* Segundo bloque extendido de criterio */}
				<div className="mb-8">
					<p className="mb-6 text-gray-800">
						Existen acciones consolidadas que permiten garantizar la sostenibilidad de la experiencia, a partir de la institucionalización y apoyo de la comunidad educativa. Se implementan estrategias destinadas a la articulación de acciones de cooperación con otras entidades y/o instituciones públicas o privadas, a través de planes, programas y proyectos externos al establecimiento educativo.
					</p>
					<div className="flex flex-row gap-8">
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="sostenibilidad2" className="custom-radio" value="6" />
							<span className="ml-2">6</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="sostenibilidad2" className="custom-radio" value="7" />
							<span className="ml-2">7</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="sostenibilidad2" className="custom-radio" value="8" />
							<span className="ml-2">8</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="sostenibilidad2" className="custom-radio" value="9" />
							<span className="ml-2">9</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="sostenibilidad2" className="custom-radio" value="10" />
							<span className="ml-2">10</span>
						</label>
					</div>
				</div>
				{/* Textarea de aportes */}
				<div className="mb-2">
					<label className="block font-semibold !text-[#2196f3] mb-2">
						Aportes para el mejoramiento frente al criterio evaluado Sostenibilidad  ( Si no hay aportes favor escribir "NO APLICA")
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

export default CriteriaSustainability;
