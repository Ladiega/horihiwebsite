import React from "react";
import '../style/Boton.css'

//comillas invertidas TEMPLATE LITERALS codiga js dentro de una clase
//${} si / ? entonces false / : entonces null
export default function Boton(props){

	const esOperador = valor =>{
		return isNaN(valor) && (valor !='.') && (valor != '=')
	}

    return(
        <div 
					className={`boton-contenedor ${esOperador(props.children) ? 'operador' :''}`.trimEnd()} 
					onClick={() => props.manejarClic(props.children)}>
					{props.children}
				</div>
    )
}