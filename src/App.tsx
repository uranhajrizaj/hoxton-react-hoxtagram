import { useEffect, useState } from 'react'

import './App.css'
import { Header } from './components/Header'
import { SingleCard } from './components/SingleCard'
 
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
    comments: Comment[];
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

  return (
    <div className="App">
     <Header/>
      <SingleCard
      imgAndCommen={ imgAndCommen}
      incrementLike={incrementLike}
      />
    </div>
  )
}

export default App
