import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full  bg-[#F8F6F4] rounded-xl p-4 '>
            <div className='w-full justify-center mb-4'>
                <img className='m-auto w-[150px] sm: m:2 h-[150px] sm:w-[200px] sm:h-[200px] sm:m-5 rounded-xl p-1' src={appwriteService.getFilePreview(featuredImage)} alt={title}
                 />

            </div>
            <h2
            className='text-md   sm:text-xl font-bold text-center font-serif'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard