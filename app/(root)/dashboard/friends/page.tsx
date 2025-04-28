import FriendSearch from './friend-search';
import FriendCard from '@/components/friends/friend-card';

const FriendsPage = () => {
  return (
    <>
      <FriendSearch />
      <div className="newPage">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
          <FriendCard />
        </div>
      </div>
      ;
    </>
  );
};

export default FriendsPage;
