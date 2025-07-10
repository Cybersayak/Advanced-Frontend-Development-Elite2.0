import Tweet from "./Tweet";
import '../css/TweetList.css';

function TweetList({tweets}) {
  return (
    <div>
      <ul className='tweet-list'>
        {
            tweets.map((tweet) => (
                <li class="tweet-wrap">
                    <Tweet content={tweet.content} likeCount={tweet.likeCount} commentCount={tweet.commentCount} />
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default TweetList;
  