import React,{Component} from "react";
import './Not.css'
import { BsEraser } from "react-icons/bs";
export default class Not extends Component{
    render(){
        return(
            <>
            <div className="note">
                <div className="note__container">
                <span className="not-text">note1</span>
                <button className="note__remove-btn"><BsEraser className="note__remove-icon" /></button>
                </div>
            </div>
            </>
        )
    }
}