import React from 'react';

class UserCard extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div className='user-card'>
                <h2 className='user-login'>{user.login}</h2>
                <div className='pfp'><img src={user.avatar_url} alt={`${user.login}`} /></div>
                <div className='user-data'>
                    <div className='user-info'>
                        {user.name && <p>{user.name}</p>}
                        {user.location && <p>{user.location}</p>}
                        {user.bio && <p>{user.bio}</p>}
                    </div>
                    <div className='user-follow-info'>
                        <p>Followers: {user.followers}</p>
                        <p>Following: {user.following}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCard;