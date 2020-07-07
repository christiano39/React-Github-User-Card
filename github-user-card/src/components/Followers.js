import React from 'react';
import axios from 'axios';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {
            followers: {},
        };
    }

    componentDidMount() {
        axios.get(this.props.followersURL)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            });
    }
    
    render() {
        return (
            <div>
                <h2>Followers</h2>
            </div>
        );
    }
}

export default Followers;