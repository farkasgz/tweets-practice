import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp"
import User from "./User"

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <ProfileImage img = {tweet.user.image} />
      <div className="body">
        <div className="top">
          <User name = {tweet.user.name} handle = {tweet.user.handle} />
          <Timestamp tstamp = {tweet.timestamp}/>
        </div>
        <Message message = {tweet.message}/>
        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
