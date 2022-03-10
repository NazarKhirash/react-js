import React from 'react';

const User = ({user:{id,name}, getUserId}) => {
    return (
        <div>
            {id} - {name}
            <button onClick={()=>getUserId(id)}>Get User Details</button>
        </div>
    );
};

export default User;