import React from 'react';
import {connect} from 'react-redux';

class AddForm extends React.Component{
    state={
        content:'',
        
    }

    handleChange = (e) =>{ 
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const content = this.state.content;
        const isFav = false
        const editing = false
        const isComplete = false
        const data = {
            id: this.generateOTP(),
            content,
            isFav,
            editing,
            isComplete
        }
        console.log(data)
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.setState({
            content:''
        })
    }

    // Function to generate OTP 
    generateOTP() { 
        var digits = '0123456789'; 
        let OTP = ''; 
        for (let i = 0; i < 4; i++ ) { 
            OTP += digits[Math.floor(Math.random() * 10)]; 
        } 
        return OTP; 
    } 

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Add new todo:</label>
                <input type="text" onChange={this.handleChange} value={this.state.content} />
                
            </form>
        )
    }
}

export default connect()(AddForm);