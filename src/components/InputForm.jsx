import React, { useState } from 'react';

function InputForm({ onCalcular }) {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!peso || !altura) {
      alert("Por favor, preencha o peso e a altura.");
      return;
    }
    onCalcular(peso, altura);
  };

  return (

    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 bg-[#faf8da] shadow-lg rounded-xl w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="peso" className="block text-sm font-medium text-slate-700">Peso (kg)</label>
          <input
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70.5"
            step="0.1"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="altura" className="block text-sm font-medium text-slate-700">Altura (m)</label>
          <input
            type="number"
            id="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 1.75"
            step="0.01"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-[#396A75] text-white py-2.5 px-4 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 font-semibold shadow-md transition-colors"
      >
        Calcular
      </button>
    </form>
  );
}

export default InputForm;