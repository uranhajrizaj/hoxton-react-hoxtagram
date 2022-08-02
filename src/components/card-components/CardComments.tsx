import { Image } from "../../App";


export function CardComments({image}:Image){
    return(
        <ul className="comments">
         {image.comments.map(comment => (
          <li className="comment"> {comment.content} </li>
        ))}
        </ul>
    )
}