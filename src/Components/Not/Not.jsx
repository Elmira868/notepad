import React,{Component} from "react";
import './Not.css'
import { BsEraser } from "react-icons/bs";
export default class Not extends Component{
    clickHandler(id){
        this.props.onRemove(id)
    }
    render(){
        let{id , title , color} = this.props
        return(
            <>
            <div className="note__container" style={{backgroundColor:color}}>   
                <span className="not-text">{title}</span>
                <button className="note__remove-btn" onClick={this.clickHandler.bind(this , id)} style={{backgroundColor:color}}><BsEraser className="note__remove-icon" /></button>
            </div>
            </>
        )
    }
}