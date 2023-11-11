import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-4 sm:py-8'>
        <Container>
            <div className='flex flex-wrap flex-col sm:flex-row content-center  '>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-11/12 sm:p-2 sm:w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts