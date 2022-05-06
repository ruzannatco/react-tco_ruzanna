import {Component} from "react";
import "./styles.css"

export class MirrorInput extends Component {
    state = {
        inputValue: "",
        prevValue: ""
    }
    handleChange = (e) => {
        const value = e.target.value;
        console.log(value)
        this.setState((prev) => {
            return {
                ...prev,
                prevValue: this.state.inputValue,
                inputValue: value,
            };
        });
    }
    render() {
        const { inputValue, prevValue } = this.state;
        return (
            <div className="mirror-input">
                <input type="text" onChange={this.handleChange}/>
                <p className="input-prev paragraph">Prev Result:: {prevValue}</p>
                <p className="input-result paragraph">Input Result:: {inputValue}</p>
            </div>
        );
    }
}