import React from "react";

const CriteriaTransformation: React.FC = () => {
	return (
		<section className="w-full px-0 mt-4 min-h-[400px]">
			<div className="bg-[#e9ecef] rounded-t-xl px-8 py-6">
				<h2 className="text-2xl font-bold !text-[#2196f3]">Criterio: Transformación</h2>
			</div>
			<div className="px-8 pt-8 pb-8">
				<div className="mb-2">
					<span className="font-bold !text-[#2196f3] text-lg">Transformación:</span>
					<span className="text-gray-800 font-normal"> Evalúa la capacidad de la experiencia para provocar cambios relevantes y sostenibles en las prácticas, saberes y relaciones escolares, impactando positivamente en la cultura institucional y los aprendizajes</span>
				</div>
				<p className="mb-2 text-gray-800">
					Solo podrá seleccionar un Estado y valorar de manera cuantitativa  de acuerdo a su concepto como tutor/evaluador, al igual podrá realizar aportes  para el mejoramiento. Una vez realizada la valoración,  las demás preguntas se debe seleccionar <span className="font-bold">No aplica</span> .
				</p>
				<p className="mb-6 text-gray-800">
					Se encuentran proyectando procesos autorreflexivos y valorativos para reorganizar y actualizar elementos conceptuales, metodológicos e instrumentales, de acuerdo con los resultados de su implementación, con el propósito de generar acciones de mejoramiento tanto de la práctica, como del proceso educativo en general. No se identifica cómo ha aprendido de sus resultados, ni si los ha usado para su mejoramiento.
				</p>
				<div className="flex flex-col gap-4">
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="transformacion" className="custom-radio" value="0" />
						<span className="ml-2">0</span>
					</label>
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="transformacion" className="custom-radio" value="1" />
						<span className="ml-2">1</span>
					</label>
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="transformacion" className="custom-radio" value="2" />
						<span className="ml-2">2</span>
					</label>
				</div>
				{/* Primer bloque extendido de criterio */}
				<div className="mt-12 mb-8">
					<p className="mb-6 text-gray-800">
						Existen o se están implementando nuevos elementos conceptuales, metodológicos e instrumentales, para generar, a lo largo del tiempo, acciones de mejoramiento tanto de la práctica, como del proceso educativo en general y en función del desarrollo integral de niños, niñas, adolescentes, jóvenes y adultos.
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
						La experiencia se ha convertido en punto de referencia en la implementación de elementos conceptuales, metodológicos, instrumentales para la formulación de acciones pedagógicas de los docentes del establecimiento educativo. Se identifican elementos que le permiten a la experiencia trascender como plan, programa, proyecto o intervención, aportando nuevos conocimientos para el desarrollo integral de los niños, niñas, adolescentes, jóvenes y adultos, de las áreas de gestión y de las prácticas, culturas y políticas institucionales.
					</p>
					<div className="flex flex-col gap-4">
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="transformacion2" className="custom-radio" value="6" />
							<span className="ml-2">6</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="transformacion2" className="custom-radio" value="7" />
							<span className="ml-2">7</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="transformacion2" className="custom-radio" value="8" />
							<span className="ml-2">8</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="transformacion2" className="custom-radio" value="9" />
							<span className="ml-2">9</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="transformacion2" className="custom-radio" value="10" />
							<span className="ml-2">10</span>
						</label>
					</div>
				</div>
				{/* Textarea de aportes */}
				<div className="mb-2">
					<label className="block font-semibold !text-[#2196f3] mb-2">
						Aportes para el mejoramiento frente al criterio evaluado Transformación  ( Si no hay aportes favor escribir "NO APLICA")
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

export default CriteriaTransformation;
