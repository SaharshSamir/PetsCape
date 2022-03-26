import {useEffect,useState} from 'react'
import Post from '../../components/post/Post.component';
import {IoMdAddCircle} from 'react-icons/io'
import "./petZone.css"
import {Box} from '@chakra-ui/react'

import API from "../../utils/axios";



const PetZone = () => {
    const [posts,setPosts] = useState(null)

    const getAllPosts = async()=>{
        const res = await API.get("/getAllPosts");
       setPosts(res.data.getAll)
    }

    
    useEffect(() => {
        getAllPosts()
    }, [])
    console.log(posts)
    return (
        <div className='container'>
        <Box position={"absolute"} bottom={"10%"} left={"90%"}>
            <IoMdAddCircle fontSize={"4rem"} />
        </Box>
            {posts?.map((post, idx) => {
                return (
                    <Post post={post}/>
                )
            })}
        </div>
    )
}

export default PetZone;