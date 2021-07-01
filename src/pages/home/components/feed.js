import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

import PostCard from '../../../Components/PostCard'

const useStyles = makeStyles ((theme) => ({
    root:{

    },
}))

const posts = [
    {id: 1, autor: {
        id: 1,
        name: 'Leonardo Brancaglione',
        username: 'leonardobrancaglione',
        avatar: "/imgs/avatars/avatar_1.jpge"
    },
        title: "Ciando um App do zero utilizando React.js",
        date: "july 25, 2021",
        description: 'Fala peesoal qual o framework favorito de vcs ?',
        hashtags: "#dotnet, #javascript, #reactjs, #developer",
        image: "/imgs/posts/post9.jpeg"
    },
    {id: 2, 
        autor: {
            id: 1,
            name: 'Leonardo Brancaglione',
            username: 'leonardobrancaglione',
            avatar: "/imgs/avatars/avatar_1.jpge"
        },
        title: 'Comparativo entre React.js e Vue.js - Performance',
        date: "july 25, 2021",
        description: "Quero criar um bootcamp gratuito para passar um pouco da minha experiência pra vcs! Quem topa?",
        hashtags: "#framework, #javascript, #reactjs, #vue",
        image: "/imgs/posts/post8.png"
    },
]

function Feed(){
    const classes = useStyles();
    return(
        <div className = {classes.root}>
        {
            posts.map(post => (
            <PostCard key={post.id} post={post}/>
            ))
        }
       </div>
    )
}

export default Feed;