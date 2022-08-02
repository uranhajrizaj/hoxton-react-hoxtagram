import { useEffect, useState } from 'react'

import './App.css'
import { Header } from './components/Header'
import { SingleCard } from './components/SingleCard'
import { NewPost } from './NewPost'
 
type Comment={
  id:number;
  content:string;
  imageId:number;
}

export type Image = {
     id: number;
    title: string;
    likes: number;
    image: string;
    comments?: Comment[];
}

function App() {
  const [imgAndCommen, setImgAndCommen] = useState([])
  
  useEffect(() => {
    fetch(`http://localhost:3000/images?_embed=comments`)
      .then(response => response.json())
      .then(imagesFromServer => setImgAndCommen(imagesFromServer))
  }, [])

   function incrementLike(image: Image) {
    const copyImgAndCommen = structuredClone(imgAndCommen)
    const match = copyImgAndCommen.find((target: { id: number }) => target.id === image.id);
    match.likes++
    console.log(match.likes)
    console.log(match)

    fetch(`http://localhost:3000/images/${match.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({likes: match.likes})
  })
    setImgAndCommen(copyImgAndCommen) 
}

function createNewPost(title:String,image:String){
  let newPost={
    "title": title,
    "likes": 0,
    "image": image,
    "comments":[]
  }

  fetch(`http://localhost:3000/images`,{
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
      },
    body: JSON.stringify(newPost)
  })
    .then(resp => resp.json())
    .then(newPost => {
      setImgAndCommen([...imgAndCommen, newPost])
    })

  }

  return (
    <div className="App">
     <Header/>
     <NewPost
     createNewPost={createNewPost}/>
      <SingleCard
      imgAndCommen={ imgAndCommen}
      incrementLike={incrementLike}
      />
    </div>
  )
}

export default App
