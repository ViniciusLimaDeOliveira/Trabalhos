import React from 'react';

export default props=>{
    return(
        <div>
            <button onClick={
                ()=>{
                    //console.log('teste');
                    props.notificarPai('Boa noite')
                }
            }>
                Oi Pai !
            </button>
        </div>
    )
}