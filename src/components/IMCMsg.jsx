import React from 'react'

export default props=>
{
    let i = props.IMC
    if(i<=19) return <h1>Abaixo do peso.</h1>
    if(i>19 && i<=25) return <h1>Peso normal.</h1>
    if(i>25) return <h1>Acima do peso.</h1>
}
    