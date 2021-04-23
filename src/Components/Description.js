import React, {Component} from 'react'

class Description extends Component{
    constructor(props){
        super(props)
        this.state = {
            positiveCounter: 0, 
            negativeCounter: 0
        }

        this.handlerPositiveCounter = this.handlerPositiveCounter.bind(this)
        this.handlerNegativeCounter = this.handlerNegativeCounter.bind(this)
    }

    handlerPositiveCounter = () => {
        this.setState(prevState => {
            if(prevState.positiveCounter === 10){
                return{
                    positiveCounter: prevState.positiveCounter
                }
            }else{
                return{
                    positiveCounter: prevState.positiveCounter + 1
                }
            }
        })
    }

    handlerNegativeCounter = () => {
        this.setState(prevState => {
            if(prevState.negativeCounter === 10){
                return{
                    negativeCounter: prevState.negativeCounter
                }
            }else{
                return{
                    negativeCounter: prevState.negativeCounter + 1
                }
            }

        })
    }
    render(){
        return(
            <div className="description">
                <p>{this.state.positiveCounter}</p>
                <button className="button-blue" onClick={this.handlerPositiveCounter}>like</button>
                <p>{this.props.name}</p>
                <button className="button-red" onClick={this.handlerNegativeCounter}>dislike</button>
                <p>{this.state.negativeCounter}</p>
            </div>
        )
    }
}

export default Description