import React from 'react'
export default props =>
    <div>
        <h2>{props.casa}</h2>
        {
            React.Children.map(
                props.children,
                filho=>{
                    //return React.cloneElement(filho,{casa:props.casa,regiao:props.regiao})   
                    return React.cloneElement(filho,{...props})
                }
            )
        }
    </div>