
import React from "react";

const starT: React.FC = () => {
  return (
    <div
      className="w-full h-full rounded-3xl min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/fondo_teacher.png)' }}
    >
      <div className="font-bold text-white text-7xl  w-full">
          <p>“Un espacio digital para reconocer, compartir y potenciar las experiencias que construyen una educación más humana, inclusiva y significativa.”</p>
        </div>

      <div className="mt-40 font-bold text-white text-[28.359px] w-full">
        <p>Mis Experiencias</p>
      </div>
    </div>
  );
};


export default starT;
