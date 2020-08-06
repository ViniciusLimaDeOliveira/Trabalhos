import React from 'react'

export default class Arena extends React.Component
    {  
        render(){
         
           return React.Children.map(
                this.props.children,
                filho=>{
                    return React.cloneElement(filho,
                        {
                        arena:this.props.arena
                        }
                        )
                }
            )
           
        }
    }


//  versão 2 questão (ps: aqui cada arena teria 2 luradores definidos detro de <Arena/>)
/*export default class Arena extends React.Component{
    render(){
      return<div class="card-group">
          <div class="card text-white bg-success mb-3" >
            <div className="card-header"><h1>Batalha</h1></div>
                <Hero name={this.props.name} img={this.props.Himg} />
                <Enemy name={this.props.Ename} img={this.props.Eimg} />
            </div>
        </div>
    }
}
*/