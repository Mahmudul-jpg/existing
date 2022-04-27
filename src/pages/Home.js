import React, { useState, useEffect } from 'react'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { db, auth } from '../firebase/firebaseConfig'
import './Page.css'
const Home = ({ isAuth }) => {
    const [postList, setPostList] = useState([])
    const postsDiary = collection(db, "diary")
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsDiary)
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getPosts()
    })
    const deletePost = async (id) => {
        const postDoc = doc(db, 'diary', id)
        await deleteDoc(postDoc)
    }
    return (
        <div className="homepage">
            {postList.map((post) => {
                return (<div className="post">

                    <div className="postHeader">
                        <div className='title'>
                            <h1>{post.title}</h1>

                        </div>
                        <div className="post-text">{post.post}</div>

                        <div className="below">
                            <h3>@{post.author.name}</h3>


                            <div className="delete">
                                {isAuth && post.author.id === auth.currentUser.uid && (

                                    <button onClick={() => { deletePost(post.id) }}>&#128465;</button>)}</div>
                        </div>
                    </div>

                </div>)

            })}
        </div>
    )
}

export default Home
