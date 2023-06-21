import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from "../Features/posts/actionCreator"

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts.posts);

    useEffect(() => {
        dispatch(fetchPosts({ category: 'politics', sortBy: 'name' }))
    }, [])

    // const handleClick = ()=> {
    //     dispatch(fetchPosts({ category: 'politics', sortBy: 'name' }))
    // }

    return (
        <>
            <h2>Blog Posts</h2>
            {/* <button onClick={handleClick}>show posts</button> */}

            {posts?.map((post) => (
                <p key={post.id}> {post.title}</p>
            ))}
            <hr></hr>
        </>
    );
}

export default Posts;