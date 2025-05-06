import FriendSearch from './friend-search';
import FriendCard from '@/components/friends/friend-card';

const FriendsPage = () => {
  return (
    <div className="newPage min-h-screen">
      <div className="customBlue px-4 py-8 mx-4 roundShadow">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 customCyan p-6 roundShadow">
          <FriendCard />
          <FriendCard />
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;
