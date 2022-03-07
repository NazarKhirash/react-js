import React, {useEffect, useState} from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts=>setPosts(posts))
    }, [])
    return (
        <div>
            {posts.map(post=>
                <li key={post.id}> UserID:{post.postId} -- ID:{post.id} -- Title:{post.title}  <br/> Body:{post.body}</li>
            )}
        </div>
    );
};

export default Posts;