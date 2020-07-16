import React from 'react';

// Stateless Functional Component
const AddBroadKeywordForm =({onNewBroadKeyword=f=>f}) => {
    let _broadKeyword
    const submit = e => {
        e.preventDefault()
        onNewBroadKeyword(_broadKeyword.value)
        _broadKeyword.value = ''
        _broadKeyword.focus()
    }
    return (
        <form onSubmit={submit}>
            <input ref={input => _broadKeyword = input} 
                    type="text"
                    placeholder='broad keyword' />
            <button>ADD</button>
        </form>
    )
}

export default AddBroadKeywordForm;