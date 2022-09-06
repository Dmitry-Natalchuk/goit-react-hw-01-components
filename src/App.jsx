import user from 'components/Profile/user.json'
import data from "components/Statistics/data.json"
import friends from "components/FriendList/friends.json";


import Profile from 'components/Profile/Profile'
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';

const App = () => {
  return (
    <div>
      <Profile
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      stats = {user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;

    </div>
  );
};

export default App