import { CardComments } from "./card-components/CardComments";
import { LikeButton } from "./card-components/LikeButton";
 import { Image } from "../App";
import { NewComment } from "./card-components/NewComment";
 
 type Props={
    imgAndCommen: Image[];
    incrementLike: (image: Image) => void;
 }

export function SingleCard({
    imgAndCommen,
    incrementLike,

}: Props) {
    return(
        <section className="image-container">
        
      {imgAndCommen.map((image:Image) => (
        <article className="image-card">
       <h2 className="title">{image.title}</h2>
         <img src={image.image} className="image" />
        <LikeButton
       incrementLike={incrementLike}
       image={ image}
        />
        <CardComments image={image}/>
      </article>
      ))}
    
      
</section>
    )
}