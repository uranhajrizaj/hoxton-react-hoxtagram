import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [imgAndCommen, setImgAndCommen] = useState([])
  
  
  useEffect(() => {
    fetch(`http://localhost:3000/images?_embed=comments`)
      .then(response => response.json())
      .then(imagesFromServer => setImgAndCommen(imagesFromServer))
  }, [])
   function incrementLike(image) {
    const copyImgAndCommen = structuredClone(imgAndCommen)
    const match = copyImgAndCommen.find(target => target.id === image.id);
    match.likes++
    console.log(match.likes)
    setImgAndCommen([...copyImgAndCommen])
  }

  return (
    <div className="App">
     <img className="logo" src="assets/hoxtagram-logo.png" />
    <section className="image-container">
      {imgAndCommen.map(image => (
        <article className="image-card">
        <h2 className="title">{image.title}</h2>
        <img src={image.image} className="image" />
        <div className="likes-section">
          <span className="likes">{image.likes}</span>
          <button className="like-button" onClick={
            ()=>incrementLike(image)}>♥</button>
        </div>
        <ul className="comments">
         {image.comments.map(comment => (
          <li className="comment"> {comment.content} </li>
        ))}
        </ul>
      </article>
 
      ))}
    
</section>
    </div>
  )
}

export default App
