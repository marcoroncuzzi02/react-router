import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

function PostsPage() {
    const [posts,setPosts] = useState([])

    function fetchPosts() {
        fetch("http://localhost:3000/api/posts")
        .then((res)=> res.json())
        .then(setPosts)
    }

    useEffect(fetchPosts, [])

    return(
        <>
            <div>
                <h3>posts</h3>
                <ul>
                {posts.map( (element) => {
                    return(
                        <li key={element.id}>
                            <NavLink to={`/posts/${element.id}`}>
                                POST : {element.id}
                            </NavLink>
                        </li>
                    )
                })}
                </ul>
                
            </div>
        </>
    )
}
export default PostsPage