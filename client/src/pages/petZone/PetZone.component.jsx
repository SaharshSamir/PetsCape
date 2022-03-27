import SmartDoggo from '../../assets/smartDoggo.png'
import StylishDoggos from '../../assets/stylishDoggos.png'
import HappyDoggo from '../../assets/happyDoggo.png'
import Post from '../../components/post/Post.component';
import "./petZone.css"

const posts = [
    {
        photo: SmartDoggo,
        author: "Johnathan Doe",
        caption: "Cooking lessons with Bean <3. Today, we’re making.... treats",
        likes: 142
    },
    {
        photo: StylishDoggos,
        author: "Amelia Cooper",
        caption: "CWe’re cute. And also dangerous. But mostly cute.",
        likes: 104
    },
    {
        photo: HappyDoggo,
        author: "Johnathan Doe",
        caption: "Fun day in the park chasing squirrels :)",
        likes: 122
    }
]

const PetZone = () => {
    return (
        <div className='container'>
            {posts.map((post, idx) => {
                // console.log(post);
                return (
                    <Post post={post}/>
                )
            })}
        </div>
    )
}

export default PetZone;