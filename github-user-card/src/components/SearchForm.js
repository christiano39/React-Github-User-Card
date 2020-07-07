import React from 'react';

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }

    onInputChange = e => {
        const { value } = e.target;
        this.setState({
            search: value,
        });
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.setUsername(this.state.search);
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type='text'
                    name='search'
                    value={this.state.search}
                    onChange={this.onInputChange}
                    placeholder='GitHub username'
                />&nbsp;
                <button>Search</button>
            </form>
        )
    }
}

export default SearchForm;