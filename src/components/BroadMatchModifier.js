import React, { Component } from 'react';

class BroadMatchModifier extends Component {
    constructor(props) {
        super(props)
        // Create Refs for input
        this.keywordInput = React.createRef();
        // Bind 'this' to the event handler so it doesn't reload ref's twice
        this.handleSubmit = this.handleSubmit.bind(this);
        // Model (data)
        this.state = {
            keywordInput: ''
        }
    }
    // Controller
    handleSubmit = e => {
        // Don't allow browser to trigger GET action to submit the form since we don't have a database yet - use preventDefault method
        e.preventDefault();
        this.setState({ keywordInput: this.keywordInput.current.value });
    }

    // View
    render() {
        const { keywordInput } = this.state;
        const broadMatchModifier = keywordInput.split(' ').map(keyword => `+${keyword}`).join(' ');
        return (
            <div>
                <h2>Broad Match Modifier</h2>
                <form className='flex flexColumn' onSubmit={this.handleSubmit}>
                    <input type="text" ref={this.keywordInput} placeholder='Input Keyword'/>
                    <button>Submit</button>
                </form>
                <p>{broadMatchModifier}</p>
            </div>
        )
    }
}

export default BroadMatchModifier