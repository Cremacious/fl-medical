import FriendSearch from './friend-search';
import FriendCard from '@/components/friends/friend-card';

const FriendsPage = () => {
  return (
    <>
      <FriendSearch />
      <div className="newPage">
        <div className="customBlue px-4 py-8 mx-4 roundShadow">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 customCyan p-6 roundShadow">
              <FriendCard />
              <FriendCard />
          
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsPage;
