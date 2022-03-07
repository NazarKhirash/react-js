import React, {useEffect, useState} from 'react';

const Comments = () => {
    const [comments, setComments] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(comments=>setComments(comments))
    })
    return (
        <div>
            {comments.map(comment=><li key={comment.id}>PostId: {comment.postId} -- ID: {comment.id} <br/> Name: {comment.name} -- Email: {comment.email} <br/> Body: {comment.body}</li>)}
        </div>
    );
};

export default Comments;