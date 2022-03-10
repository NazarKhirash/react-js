import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.services";
import User from "../User/User";



const Users = ({setUserId}) => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)

    useEffect(()=>{
        userService.getUsers()
            .then(user=>setUsers(user))
    },[])

    const getUserId = (id)=>{
        userService.getUserId(id)
            .then(user=>setUser(user))
    }

    return (
        <div>
            <div className='main' >
                <div className='users'>{users.map(user=><User key={user.id} user={user} getUserId={getUserId}/>)}</div>

                {user && <div className='user_details'>{user.id} - Name: {user.name} UserName: {user.username} - Email: {user.email}
                <br/> Street: {user.address.street} - Suite: {user.address.suite} - City: {user.address.city}
                <br/> Phone: {user.phone} Company: {user.company.name} - WebSite: {user.website}
                    <button onClick={()=>setUserId(user.id)}>get User Posts</button>
                </div>}



            </div>
        </div>
    );
};

export default Users;