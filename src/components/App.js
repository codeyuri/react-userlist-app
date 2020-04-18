import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';

class App extends Component {
    state = {
        users: [
            { name: 'Dan', age: 25, id: 1 },
            { name: 'Amie', age: 24, id: 2 },
            { name: 'Yuri', age: 7, id: 3 },
            { name: 'Luffy', age: 4, id: 4 }
        ]
    }
    addUser = (newuser) => {
        newuser.id = Math.random();
        let users = [...this.state.users, newuser];
        this.setState({
            users: users
        })
        console.log(users)
    }
    deleteUser = (userid) => {
        let users = this.state.users.filter(user => {
            return user.id !== userid
        })
        this.setState({
            users: users
        })
    }
    render() { 
        return (
            <div className="mainDiv">
                <h1>User List App</h1>
                <Users users={this.state.users} deleteUser={this.deleteUser} />
                <AddUser addUser={this.addUser} />
                <p className="copyright">&copy; Dan Quesada | 2020</p>
            </div>
        )
    }
}
 
export default App;