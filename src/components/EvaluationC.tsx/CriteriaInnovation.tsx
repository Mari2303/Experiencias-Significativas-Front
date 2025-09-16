import React from "react";

const CriteriaInnovation: React.FC = () => {
	return (
		<section className="w-full px-0 mt-4 min-h-[400px]">
			<div className="bg-[#e9ecef] rounded-t-xl px-8 py-6">
				<h2 className="text-2xl font-bold !text-[#2196f3]">Criterio: Innovación</h2>
			</div>
			<div className="px-8 pt-8 pb-8">
				<div className="mb-2">
					<span className="font-bold !text-[#2196f3] text-lg">Innovación:</span>
				</div>
				<p className="mb-2 text-gray-800">
					Indica la incorporación de prácticas novedosas que transforman las costumbres institucionales, aportan nuevos enfoques teóricos o metodológicos y generan cambios sustanciales en los procesos educativos
				</p>
				<p className="mb-2 text-gray-800">
					Sólo podrá seleccionar una opción de las tres descripciones del Estado y valorar de manera cuantitativa de acuerdo a su concepto como Evaluador, al igual podrá realizar aportes para el mejoramiento. Una vez realizada la valoración del criterio.
				</p>
				<p className="mb-6 text-gray-800">
					La ES se encuentra en un proceso de búsqueda y definición de acciones novedosas, de cambios significativos en el diseño y uso de métodos, materiales, contenidos y recursos tecnológicos y no tecnológicos, para propiciar aprendizajes significativos, el desarrollo integral y la transformación de las prácticas, culturas y políticas institucionales.
				</p>
				<div className="flex flex-col gap-4">
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="innovacion" className="custom-radio" value="0" />
						<span className="ml-2">0</span>
					</label>
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="innovacion" className="custom-radio" value="1" />
						<span className="ml-2">1</span>
					</label>
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="innovacion" className="custom-radio" value="2" />
						<span className="ml-2">2</span>
					</label>
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="innovacion" className="custom-radio" value="3" />
						<span className="ml-2">3</span>
					</label>
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="innovacion" className="custom-radio" value="4" />
						<span className="ml-2">4</span>
					</label>
					<label className="inline-flex items-center cursor-pointer">
						<input type="radio" name="innovacion" className="custom-radio" value="5" />
						<span className="ml-2">5</span>
					</label>
				</div>
						{/* Primer bloque extendido de criterio */}
						<div className="mt-12 mb-8">
							<p className="mb-6 text-gray-800">
								Se ha identificado, definido e iniciado la implementación de acciones novedosas, con cambios significativos en el diseño y uso de métodos, materiales, contenidos y recursos tecnológicos y no tecnológicos, para propiciar aprendizajes significativos, el desarrollo integral y la transformación de las prácticas, culturas y políticas institucionales.
							</p>
							<div className="flex flex-col gap-4">
								<label className="inline-flex items-center cursor-pointer">
									<input type="radio" name="innovacion1" className="custom-radio" value="6" />
									<span className="ml-2">6</span>
								</label>
								<label className="inline-flex items-center cursor-pointer">
									<input type="radio" name="innovacion1" className="custom-radio" value="7" />
									<span className="ml-2">7</span>
								</label>
								<label className="inline-flex items-center cursor-pointer">
									<input type="radio" name="innovacion1" className="custom-radio" value="8" />
									<span className="ml-2">8</span>
								</label>
								<label className="inline-flex items-center cursor-pointer">
									<input type="radio" name="innovacion1" className="custom-radio" value="9" />
									<span className="ml-2">9</span>
								</label>
								<label className="inline-flex items-center cursor-pointer">
									<input type="radio" name="innovacion1" className="custom-radio" value="10" />
									<span className="ml-2">10</span>
								</label>
							</div>
						</div>
						<hr className="my-8 border-gray-300" />
						{/* Segundo bloque extendido de criterio */}
						<div className="mb-8">
							<p className="mb-6 text-gray-800">
								Se han implementado acciones novedosas, con cambios significativos en el diseño y uso de métodos, materiales, contenidos y recursos tecnológicos y no tecnológicos y se han validado con los pares académicos y la comunidad.
							</p>
							<div className="flex flex-col gap-4">
								<label className="inline-flex items-center cursor-pointer">
									<input type="radio" name="innovacion2" className="custom-radio" value="11" />
									<span className="ml-2">11</span>
								</label>
								<label className="inline-flex items-center cursor-pointer">
									<input type="radio" name="innovacion2" className="custom-radio" value="12" />
									<span className="ml-2">12</span>
								</label>
								<label className="inline-flex items-center cursor-pointer">
									<input type="radio" name="innovacion2" className="custom-radio" value="13" />
									<span className="ml-2">13</span>
								</label>
								<label className="inline-flex items-center cursor-pointer">
									<input type="radio" name="innovacion2" className="custom-radio" value="14" />
									<span className="ml-2">14</span>
								</label>
								<label className="inline-flex items-center cursor-pointer">
									<input type="radio" name="innovacion2" className="custom-radio" value="15" />
									<span className="ml-2">15</span>
								</label>
							</div>
						</div>
						{/* Textarea de aportes */}
						<div className="mb-2">
							<label className="block font-semibold !text-[#2196f3] mb-2">
								Aportes para el mejoramiento frente al criterio evaluado Innovación  ( Si no hay aportes favor escribir "NO APLICA")
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

		export default CriteriaInnovation;
