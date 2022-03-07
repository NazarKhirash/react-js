import React, {useEffect, useState} from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => setUsers(users))
    }, [])
    return (
        <div>
            {users.map(user => <li key={user.id}> ID:{user.id} <br/> Name:{user.name} <br/> UserName:{user.username} <br/>
                Email:{user.email} <br/> Street:{user.address.street} <br/> Suite:{user.address.suite} <br/> City:{user.address.city} <br/> ZipCode:{user.address.zipcode}

            </li>)}
        </div>
    );
};

export default Users;