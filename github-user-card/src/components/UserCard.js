import React from 'react';

class UserCard extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div>
                <h2>{user.login}</h2>
                <img src={user.avatar_url} alt={`${user.login}`} />
                {user.location && <p>{user.location}</p>}
                {user.bio && <p>{user.bio}</p>}
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
            </div>
        );
    }
}

export default UserCard;