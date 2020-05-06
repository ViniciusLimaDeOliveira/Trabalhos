import React,{useState,useEffect} from 'react'

export default props=>{

    const [fortaleza,setFortaleza] = useState(0)
    const [quixada,setQuixada]     = useState(0)
    const [baturite,setBaturite]   = useState(0)
    const [aracoiaba,setAracoiaba] = useState(0)
    const [maior,setMaior] = useState(0)
    const [menor,setMenor] = useState(0)
    const cidadesStr = ['Fortaleza','Quixadá','Ocara','Limoeiro']

    useEffect(
        ()=>{
            const cidades = [fortaleza,quixada,baturite,aracoiaba]
            let localMaior = maior
            for (let i = 0; i < cidades.length; i++) {
                if(cidades[i]>localMaior)
                    localMaior = cidades[i]
            }
            setMaior(localMaior)

            let localMenor = localMaior
            for (let i = 0; i < cidades.length; i++) {
                if(cidades[i]<localMenor)
                    localMenor = cidades[i]
            }
            setMenor(localMenor)

        },
        [fortaleza,quixada,baturite,aracoiaba]
    )

    function MaisVotadas(){
        let saida = ''
        const cidades = [fortaleza,quixada,baturite,aracoiaba]
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i]===maior) saida+=cidadesStr[i]+' '
        }
        return saida
    }

    function MenosVotadas(){
        let saida = ''
        const cidades = [fortaleza,quixada,baturite,aracoiaba]
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i]===menor) saida+=cidadesStr[i]+' '
        }
        return saida
    }

    return(
        <div>
            <h1>Fortaleza: {fortaleza}</h1>
            <h1>Quixada  : {quixada}</h1>
            <h1>Baturite : {baturite}</h1>
            <h1>Limoeiro : {aracoiaba}</h1>
            <h2>Maior    : {maior} => {MaisVotadas()}</h2>
            <h2>Menor    : {menor} => {MenosVotadas()}</h2>
            <button onClick={()=>setFortaleza(fortaleza+1)}> Votar em Fortaleza </button>
            <button onClick={()=>setQuixada(quixada+1)}>     Votar em Quixada   </button>
            <button onClick={()=>setBaturite(baturite+1)}>   Votar em Baturite  </button>
            <button onClick={()=>setAracoiaba(aracoiaba+1)}> Votar em Aracoiaba </button>
        </div>
    )
}