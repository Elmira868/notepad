import React,{Component} from "react";
import './Colors.css'

export default class Colors extends Component{

    onClickHandler(color){
this.props.onColor(color);
    }
    render(){
        let {color} = this.props
        return(
            
            <div className="colors__container">
                <div className="colors" style={{backgroundColor:color}} onClick={this.onClickHandler.bind(this , color)}></div>
            </div>
            
        )
    }
}