import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.services";


const Posts = ({userId}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        userService.getUserPosts(userId)
            .then(posts => setPosts(posts))
    }, [userId])


    return (
        <div>
            {posts.map(post => <div>{post.userId} - ID: {post.id} - Title: {post.title} <br/> Body: {post.body}</div>)}
        </div>
    );
};

export default Posts;