import React from "react";

const CriteriaFoundation: React.FC = () => {
	return (
		<section className="w-full px-0 mt-4 min-h-[400px]">
			<div className="bg-[#e9ecef] rounded-t-xl px-8 py-6">
				<h2 className="text-2xl font-bold !text-[#2196f3]">Criterio: Fundamentación</h2>
			</div>
			<div className="px-8 pt-8 pb-8">
				<div className="mb-2">
					<span className="font-bold !text-[#2196f3] text-lg">Fundamentación:</span>
					<span className="text-gray-800 font-normal"> Valora la claridad y solidez de los marcos conceptuales, pedagógicos y metodológicos que sustentan la experiencia, así como su articulación con proyectos institucionales (PEI, PMI) y referentes disciplinares</span>
				</div>
				<p className="mb-2 text-gray-800">
					Sólo podrá seleccionar una opción de las tres descripciones del Estado y valorar de manera cuantitativa de acuerdo a su concepto como Evaluador, al igual podrá realizar aportes para el mejoramiento. Una vez realizada la valoración del criterio.
				</p>
				<p className="mb-6 text-gray-800">
					Aún es incipiente o se está ampliando la relación de la experiencia con los elementos del PEI o de los PEC, los planes de vida y de etnodesarrollo, así como con el PMI. Los referentes teóricos y metodológicos están en proceso de formulación, consolidación o validación.
				</p>
			<div className="flex flex-row gap-8">
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="fundamentacion1" className="custom-radio" value="0" />
							<span className="ml-2">0</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="fundamentacion1" className="custom-radio" value="1" />
							<span className="ml-2">1</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="fundamentacion1" className="custom-radio" value="2" />
							<span className="ml-2">2</span>
						</label>
					</div>
				{/* Primer bloque de criterio */}
				<div className="mb-8">
					<p className="mb-6 text-gray-800">
						La experiencia se relaciona claramente con alguno o varios elementos del PEI o PEC, los planes de vida y de etnodesarrollo y del PMI fortaleciendo así al EE. En la descripción de los referentes conceptuales y metodológicos, se evidencia cómo se fortalece la orientación teórica y metodológica.
					</p>
					<div className="flex flex-row gap-8">
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="fundamentacion1" className="custom-radio" value="3" />
							<span className="ml-2">3</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="fundamentacion1" className="custom-radio" value="4" />
							<span className="ml-2">4</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="fundamentacion1" className="custom-radio" value="5" />
							<span className="ml-2">5</span>
						</label>
					</div>
				</div>
				<hr className="my-8 border-gray-300" />
				{/* Segundo bloque de criterio */}
				<div className="mb-8">
					<p className="mb-6 text-gray-800">
						Es clara la relación lograda por la experiencia con el PEI o el PEC, los planes de vida y de etnodesarrollo y con el PMI, y ha sido o puede ser referente para otros establecimientos educativos. Se han validado los elementos de soporte teórico y las metodologías de la experiencia con los pares académicos y la comunidad.
					</p>
					<div className="flex flex-row gap-8">
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="fundamentacion2" className="custom-radio" value="6" />
							<span className="ml-2">6</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="fundamentacion2" className="custom-radio" value="7" />
							<span className="ml-2">7</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="fundamentacion2" className="custom-radio" value="8" />
							<span className="ml-2">8</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="fundamentacion2" className="custom-radio" value="9" />
							<span className="ml-2">9</span>
						</label>
						<label className="inline-flex items-center cursor-pointer">
							<input type="radio" name="fundamentacion2" className="custom-radio" value="10" />
							<span className="ml-2">10</span>
						</label>
					</div>
				</div>
				{/* Textarea de aportes */}
				<div className="mb-2">
					<label className="block font-semibold !text-[#2196f3] mb-2">
						Aportes para el mejoramiento frente al criterio evaluado Fundamentación  ( Si no hay aportes favor escribir "NO APLICA")
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

export default CriteriaFoundation;
