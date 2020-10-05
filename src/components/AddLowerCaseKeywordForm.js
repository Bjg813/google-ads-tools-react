import React from 'react';

// Stateless Functional Component
const AddLowerCaseKeywordForm =({onNewLowerCaseKeyword=f=>f}) => {
    let _lowercasekeyword
    const submit = e => {
        e.preventDefault()
        onNewLowerCaseKeyword(_lowercasekeyword.value)
        _lowercasekeyword.value = ''
        _lowercasekeyword.focus()
    }
    return (
        <form onSubmit={submit}>
            <input ref={input => _lowercasekeyword = input} 
                    type="text"
                    placeholder='lowercase keyword' />
            <button>ADD</button>
        </form>
    )
}

export default AddLowerCaseKeywordForm;