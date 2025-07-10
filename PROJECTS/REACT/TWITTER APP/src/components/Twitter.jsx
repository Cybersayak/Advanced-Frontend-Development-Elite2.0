import TweetList from './TweetList';
import AddTweet from './AddTweet';
import '../App.css'; 

const initDummyTweets = [
  { id: 0 , content: "Hello World! , Lets start learning JavaScript", likeCount: 10 , commentCount: 15 },
  { id: 1 , content: "Learning React is fun! , But not Vanilla JS ", likeCount: 5 , commentCount: 25 },
  { id: 2 , content: "I love coding! but more i like debugging ", likeCount: 20 , commentCount: 28 }
];   


function Twitter() {
  return (
    <>
      <AddTweet />
      <TweetList tweets={initDummyTweets} />
    </>
  )
}

export default Twitter
