import React from 'react'

export default props=>
    <div>
        <h2>Turma : {props.turma}</h2>
        {React.Children.map(props.children,Estudante=> { 
             return React.cloneElement(Estudante,{...props});
             })}
    </div>