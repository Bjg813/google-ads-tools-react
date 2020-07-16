import React from 'react';

// Stateless Functional Component
const AddKeywordForm =({onNewKeyword=f=>f}) => {
    let _keyword
    const submit = e => {
        e.preventDefault()
        onNewKeyword(_keyword.value)
        _keyword.value = ''
        _keyword.focus()
    }
    return (
        <form onSubmit={submit}>
            <input ref={input => _keyword = input} 
                    type="text"
                    placeholder='capitalize keyword' />
            <button>ADD</button>
        </form>
    )
}

export default AddKeywordForm;

// import React, { Component } from 'react';

// class CapitalizeMachine extends Component {
//     constructor(props) {
//         super(props)
//         // Create Refs for input
//         this.keywordInput = React.createRef();
//         // Bind 'this' to the handler to prevent refs from being loaded twice
//         this.handleSubmit = this.handleSubmit.bind(this);
//         // Model (data)
//         this.state = {
//             keywordInput: ''
//         }
//     }
//     // Controller
//     handleSubmit = e => {
//         e.preventDefault();
//         this.setState({ keywordInput: this.keywordInput.current.value });
//     }
//     // View
//     render() {
//         const { keywordInput } = this.state;
//         const capitalizeKeyword = keywordInput.split(' ').map(keyword => `${keyword.charAt(0).toUpperCase()}${keyword.substr(1).toLowerCase()} `);
//         return (
//             <div>
//                 <h2>Capitalize Machine</h2>
//                 <form className='flex flexColumn' onSubmit={this.handleSubmit}>
//                     <input type="text" ref={this.keywordInput} placeholder='Input Keyword'/>
//                     <button>Submit</button>
//                 </form>
//                     <p>{capitalizeKeyword}</p>
//             </div>
//         )
//     }
// }

// export default CapitalizeMachine