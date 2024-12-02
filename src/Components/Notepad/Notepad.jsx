import React, { Component } from "react";
import './Notepad.css';
import Not from "../Not/Not";
import Colors from "../Colors/Colors";
import { IoIosAdd } from "react-icons/io";
import { BsEraser } from "react-icons/bs";

export default class Notepad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                '#e63946', '#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff', '#70e000', '#2f4550',
            ],
            notes: [],
            noteTitle: "",
            inputColor: '#ffff'
        };

        this.noteTitleHandler = this.noteTitleHandler.bind(this);
        this.inputColorHandler = this.inputColorHandler.bind(this);
        this.emptyInput = this.emptyInput.bind(this);
    }

    // Empty Input Value
    emptyInput() {
        this.setState({
            noteTitle: ""
        });
    }

    // Update Input Value
    noteTitleHandler(event) {
        this.setState({
            noteTitle: event.target.value
        });
    }

    // Change Background Input
    inputColorHandler(color) {
        this.setState({
            inputColor: color
        });
    }

    render() {
        return (
            <>
                <h1 className="notePad__title">یاد داشت من</h1>
                <input 
                    type="text" 
                    className="notePad__input" 
                    placeholder="یادداشت" 
                    style={{ backgroundColor: this.state.inputColor }} 
                    value={this.state.noteTitle} 
                    onChange={this.noteTitleHandler} 
                />
                <div className="notepad__btns-box">
                    <button className="notepad-btn__add"><IoIosAdd className="notepad-btn__add-icon" /></button>
                    <button className="notepad-btn__remove" onClick={this.emptyInput}>
                        <BsEraser className="notepad-btn__remove-icon" />
                    </button>
                </div>
                {this.state.colors.map(color => {
                    return <Colors color={color} key={color} onColor={this.inputColorHandler} />
                })}
                <Not />
            </>
        );
    }
}
