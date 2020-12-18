import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    onFormSubmit = (event) => {
        //form will not automatically refresh itself
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    //alternate input
    //<input type="text" onChange={this.onInputChange}/>
    //<form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;