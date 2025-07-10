import '../css/Tweet.css';

function Tweet({ content , likeCount, commentCount }) {
  return (
    <div className='tweet-container'>
       <div className='tweet-content'>
         {content}
      </div> 
      
      <div className='likes'>
         {`${likeCount} people ❤️ Your Thread`}
      </div> 
      <div className='comments'>
         {`${commentCount} people 💬 commented your Thread`}
      </div> 
    </div>
    
  )
}

export default Tweet
