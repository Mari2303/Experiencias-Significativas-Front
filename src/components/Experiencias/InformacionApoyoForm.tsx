
const InformacionApoyoForm = () => {
  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="font-semibold mb-4">INFORMACIÓN DE APOYO</h2>

      <div className="mb-4">
        <label className="font-semibold">Resumen</label>
        <p className="text-sm text-gray-600 mb-1">
          En media página, como máximo, sintetice la experiencia significativa. • Con una o dos palabras indique el tipo de experiencia significativa (programa, proyecto, plan, estrategia etc). • En una frase de dos renglones el objetivo principal de la experiencia significativa. • En un texto de máximo 4 renglones describir las principales acciones para cumplir el o los objetivos. • En un texto de máximo 4 renglones mencionar los principales resultados de la experiencia significativa.
        </p>
        <textarea className="w-full border rounded p-2" rows={5} />
      </div>

      <div className="mb-4">
        <label className="font-semibold">Frase o metáfora inspiradora (Opcional)</label>
        <p className="text-sm text-gray-600 mb-1">
          En máximo 3 líneas escriba una frase inspiradora o metáfora relacionada con la experiencia significativa. Si la frase es de un personaje deben incluir la cita.
        </p>
        <textarea className="w-full border rounded p-2" rows={3} />
      </div>

      <div className="mb-4">
        <label className="font-semibold">Testimonio (Opcional)</label>
        <p className="text-sm text-gray-600 mb-1">
          En máximo seis líneas, escriba el testimonio de uno o dos integrantes de la comunidad educativa referido al impacto que ha tenido la experiencia significativa.
        </p>
        <textarea className="w-full border rounded p-2" rows={3} />
      </div>

      <div className="mb-4">
        <label className="font-semibold">Espacios de divulgación</label>
        <p className="text-sm text-gray-600 mb-1">
          Registre los enlaces públicos donde se encuentre alojada la experiencia significativa (videos, blogs, página web).
        </p>
        <textarea className="w-full border rounded p-2" rows={2} />
      </div>
    </div>
  );
};

export default InformacionApoyoForm;
