import React, { Component } from 'react';

class AddUser extends Component {
    state = {
        name: '',
        age: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name == '' || this.state.age == '' ) {
            console.log('please enter values')
        } else {
            this.props.addUser(this.state)
            this.setState({
                name: '',
                age: ''
            })
        }
        
    }

    render() { 
        return (
            <div>
                <h3>Add new user here:</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} value={this.state.name} />
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} value={this.state.age}  />
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                </form>
            </div>
        );
    }
}
 
export default AddUser;