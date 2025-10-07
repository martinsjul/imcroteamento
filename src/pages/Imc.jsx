import React, { useState } from 'react';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
import Result from '../components/Result';

function Imc() {
  const [imc, setImc] = useState(0);
  const [categoria, setCategoria] = useState('');

  const calcularIMC = (peso, altura) => {
    const pesoFloat = parseFloat(peso.replace(',', '.'));
    const alturaFloat = parseFloat(altura.replace(',', '.'));
    if (isNaN(pesoFloat) || isNaN(alturaFloat) || alturaFloat === 0) {
      return;
    }
    const resultadoImc = pesoFloat / (alturaFloat * alturaFloat);
    setImc(resultadoImc.toFixed(2));
    if (resultadoImc < 18.5) {
      setCategoria("Abaixo do peso");
    } else if (resultadoImc < 25) {
      setCategoria("Peso normal");
    } else if (resultadoImc < 30) {
      setCategoria("Sobrepeso");
    } else if (resultadoImc < 34.9) {
      setCategoria("Obesidade grau 1");
    } else if (resultadoImc < 39.9) {
      setCategoria("Obesidade grau 2");
    } else {
      setCategoria("Obesidade grau 3 (mórbida)");
    }
  };


  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-[#6978A0] font-sans">
      <div className="container mx-auto flex flex-col items-center gap-6 p-4">
        <Header />
        <InputForm onCalcular={calcularIMC} />
        <Result imc={imc} categoria={categoria} />
      </div>
    </div>
  );
}

export default Imc;