import React, {useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Post Title', description: 'post description'},
        {id: 2, title: 'Post Title 2', description: 'post description'},
        {id: 3, title: 'Post Title 3', description: 'post description'},
    ]);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            name,
            description
        }
        console.log(newPost)
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    id='name'
                    onChange={e => setName(e.target.value)}
                    type='text'
                    placeholder='Post Name'
                />
                <MyInput
                    id='description'
                    onChange={e => setDescription(e.target.value)}
                    type='text'
                    placeholder='Post Description'
                />
                <MyButton onClick={addNewPost}>Add Post</MyButton>
            </form>
            <PostList title='Post List' posts={posts}/>
        </div>
    );
}

export default App;
