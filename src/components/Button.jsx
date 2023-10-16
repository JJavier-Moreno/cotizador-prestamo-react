import React from 'react'

const Button = ({operador, funcion}) => {



    return (
        <>
            <button
                type='button'
                className=' flex items-center justify-center bg-lime-500 rounded-full h-10 w-10 font-bold text-2xl
             text-white hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-line-500'
                onClick={funcion}
            >
                {operador}
            </button>

        </>

    )
}

export default Button