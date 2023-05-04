const CreateReviewFrom = (handleReviewSubmit, handleChange, reviewTitle, reviewDescription) => {
  
  return (
    <>
      <h2>Add a Review</h2>

      <form onSubmit={handleReviewSubmit}>
        <div>
          <label htmlFor='reviewTitle'>Title:</label><br />
          <input id='reviewTitle' type="text" value={reviewTitle} placeholder='Title' onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor='reviewDescription'>Description:</label><br />
          <input id='reviewDescription' type="text" value={reviewDescription} placeholder='Type a description' onChange={handleChange}/>
        </div>
        <br />
        <button>Add Review</button>
      </form>
    </>
  )
}

export default CreateReviewFrom;
