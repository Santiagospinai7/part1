import { useState } from 'react';

const CreateReviewFrom = ({ addReview }) => {
  // const [newReview, setNewReview] = handleChangeReview
  const [newReview, setNewReview] = useState({title: "", description: ""})

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const createNewReview = {
      title: newReview.title,
      content: newReview.description
    }

    addReview(createNewReview)

    setNewReview({title: "", description: ""})
  }

  return (
    <div>
      <h2>Add a Review</h2>

      <form onSubmit={handleReviewSubmit}>
        <div>
          <label htmlFor='reviewTitle'>Title:</label><br />
          <input id='reviewTitle'
            type="text" 
            value={newReview.title} 
            placeholder='Title'
            onChange={({ target }) => setNewReview({ ...newReview, title: target.value })}/>
        </div>
        <div>
          <label htmlFor='reviewDescription'>Description:</label><br />
          <input id='reviewDescription' 
            type="text" 
            value={newReview.description} 
            placeholder='Type a description' 
            onChange={({ target }) => setNewReview({ ...newReview, description: target.value })}/>
        </div>
        <br />
        <button>Add Review</button>
      </form>
    </div>
  )
}

export default CreateReviewFrom;
