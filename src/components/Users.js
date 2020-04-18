import React from 'react';

const Users = (props) => {
    const { users } = props;
    const { deleteUser } = props;
    const usersList = users.map(user => {
        return <li key={user.id}>Name: {user.name} | Age: {parseInt(user.age)} <span className="delete" onClick={() => {deleteUser(user.id)}}>x</span></li>
    })
    
    return (
        <ul>
            { usersList }
        </ul>
    )
}

export default Users;