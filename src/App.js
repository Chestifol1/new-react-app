import React, {useState} from "react";
import Counter from "./components/Counter";
import Input from "./components/Input";
import PostItem from "./components/PostItem";
function App(){

    const [post, setPost] = useState([
        {title:'Js bg1' , id : 1 , body: 'description1'},
        {title:'Js bg2' , id : 2 , body: 'description2'},
        {title:'Js bg3' , id : 3 , body: 'description3'},
        {title:'Js bg4' , id : 4 , body: 'description4'}
    ])

    return(
        <div className={'app'}>

            {post.map(element =>
            <PostItem post = {element} key={element.id}/>
            )}


        </div>
    );
}

export  default App