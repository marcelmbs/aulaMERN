import React from 'react'

function Maiusculo2(props){  /*props = propriedades*/

    const textoDigitado = props.texto
    const corFonte = props.cor
    const textoMaiusculo = textoDigitado.toUpperCase()

  return(
    <div style={{color: corFonte}}> {/* Inline Styling */}
        {textoMaiusculo}
    </div>
  )
}

export default Maiusculo2