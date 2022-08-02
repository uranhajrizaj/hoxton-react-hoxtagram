export function NewPost({createNewPost}){
    return (
        <section className="image-container">
        <form className="comment-form image-card" 
        onSubmit={(event)=>{
           event.preventDefault()
           createNewPost(event.target.title.value,event.target.image.value)

        }}>
        <h2 className="title">New Post</h2>
        <input
          className="comment-input"
          type="text"
          name="title"
          id="title"
          placeholder="Add a title..."
          required
        />
        <input
          className="comment-input"
          type="url"
          name="image"
          id="image"
          placeholder="Add an image url..."
          required
        />
        <button className="comment-button" type="submit">Post</button>
      </form> 
      </section>

    )
}