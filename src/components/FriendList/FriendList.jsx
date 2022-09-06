import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';


const FriendList = ({friends}) => {
    return (
        <ul className="friend-list" key={friends.id}>
            {friends.map(friend => {
                <FriendListItem
                key = {friend.id}
                avatar = {friend.avatar}
                name = {friend.name}
                isOnline = {friend.isOnline}
                />
            })}
        </ul>
    )
}


FriendList.propTypes = {
    friends : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}

export default FriendList