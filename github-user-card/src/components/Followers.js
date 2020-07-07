import React from 'react';
import axios from 'axios';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {
            followers: [],
        };
    }

    componentDidMount() {
        axios.get(this.props.followersURL)
            .then(res => {
                console.log(res.data);
                this.setState({ followers: res.data })
            })
            .catch(err => {
                console.log(err)
            });
    }

    componentDidUpdate(prevProps) {
        if (this.props.followersURL !== prevProps.followersURL) {
            axios.get(this.props.followersURL)
            .then(res => {
                console.log(res.data);
                this.setState({ followers: res.data })
            })
            .catch(err => {
                console.log(err)
            });
        }
    }
    
    render() {
        if (this.state.followers.length === 0){
            return <h2>No followers</h2>
        }
        return (
            <div>
                <h2>Followers</h2>
                {
                    this.state.followers.map(follower => {
                        return (
                            <div key={follower.id}>
                                <img src={follower.avatar_url} alt={follower.login} />
                                <div>
                                    <p>{follower.login}</p>
                                    <p>{follower.name}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Followers;