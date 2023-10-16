import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import Button from "./components/Button";
import Resumen from "./components/Resumen";
import  { calcularTotalPagar, formatearDinero, calcularPagoMensual } from './helpers'

function App() {

  const [dinero, setDinero] = useState(10000);
  const [plazo, setPlazo] = useState(6);
  const [total,setTotal] = useState(0);

  const [mensual, setMensual] = useState(0);

  useEffect(()=>{
    setTotal(calcularTotalPagar(dinero,plazo));

    setMensual(calcularPagoMensual(total, plazo));
  },[plazo, dinero,total])
  
  useEffect(()=>{

  },)

  console.log(plazo);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  const handleClickDecremento = () => {
    const valor = dinero - STEP;
    console.log(valor);
    if (valor < MIN) {
      alert('Cantidad no válida');
      return;
    }
    setDinero(valor);
  }

  const handleClickIncremento = () => {
    const valor = dinero + STEP;
    console.log(valor);
    if (valor > MAX) {
      alert('Cantidad no válida');
      return;
    }
    setDinero(valor);
  }

  const handleChange = (e) => {
    e.preventDefault();

    setDinero(parseInt(e.target.value));

  }

  return (
    <>
      <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
        <Header />



        <div className='flex justify-between my-6'>
          <Button
            operador={"-"}
            funcion={handleClickDecremento}
          />
          <Button
            operador={"+"}
            funcion={handleClickIncremento}
          />

        </div>

        <input
          type="range"
          min={MIN}
          max={MAX}
          value={dinero}
          step={STEP}
          onChange={handleChange}
          className='w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600'
        />

        <p className="font-extrabold text-5xl my-10 text-indigo-600 text-center">{formatearDinero(dinero)}</p>


        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Elige un <span className="text-indigo-600">Plazo</span> a pagar
        </h2>

        <select className="w-full mt-5 p-2 bg-white border rounded-lg text-xl font-bold border-gray-600 text-gray-500"
          value={plazo}
          onChange={e => setPlazo(parseInt(e.target.value))}>
          <option className="text-center" value="6">6 meses</option>
          <option className="text-center" value="12">12 meses</option>
          <option className="text-center" value="24">24 meses</option>

        </select>

        <div className="my-5 space-y-3 p-5 bg-gray-50">
          <Resumen plazo={plazo} total={total} mensual={mensual}/>

        </div>


      </div>

    </>
  )
}

export default App
