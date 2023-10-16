import React, { useState } from 'react'
import { formatearDinero } from '../helpers'


const Resumen = ({ plazo, total, mensual}) => {

  

    return (
        <>

            <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
                Resumen de <span className='text-indigo-600'>pagos</span>
            </h2>
            <p className='text-xl font-bold text-center text-gray-500'>{plazo} Meses </p>
            <p className='text-xl font-bold text-center text-gray-500'>Total a pagar: {formatearDinero(total)} </p>
            <p className='text-xl font-bold text-center text-gray-500'>Mensuales: {formatearDinero(mensual)}</p>

        </>


    )
}

export default Resumen