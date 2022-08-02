import { Image } from "../../App";

type Props={
    incrementLike: (image: Image) => void;
    image: Image;
 }

export function LikeButton({incrementLike,image}: Props) {
  return (
    <div className="likes-section">
          <span className="likes">{image.likes}</span>
          <button className="like-button"  
          onClick={function(event){
            incrementLike(image)
            event.currentTarget.disabled = true;}}>♥</button>
        </div>
  );
}