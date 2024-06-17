import { Component } from "react";
import App from "./App";

class Eventpratice extends Component {
    state = {
        "message" : '',
        "username" : ''
    }
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            massage : e.target.value
        });
    }

    handleClick() {
        alert(this.state.massage);
        this.setState({
            massage : ''
        });
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" placeholder="아무거나 입력하세요" value={this.state.message} onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}
export default Eventpratice;