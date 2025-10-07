import React from 'react';

function Result({ imc, categoria }) {
  if (!imc || imc <= 0) {
    return null;
  }

  return (
    <div className="p-6 bg-[#faf8da] rounded-xl shadow-lg w-full max-w-md text-center">
      <h2 className="text-xl font-semibold text-slate-800">Seu Resultado</h2>
      <p className="text-5xl font-bold text-[#396A75] my-2">{imc}</p>
      <p className="text-lg text-slate-700 font-medium">{categoria}</p>
    </div>
  );
}

export default Result;