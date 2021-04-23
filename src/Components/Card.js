import React, {Component} from 'react'
import Image from './Image'
import Description from './Description'

class Card extends Component{
    render(){
        return(
            <div className="card">
                <Image />
                <Description name={this.props.name}/>
            </div>
        )
    }
}

export default Card