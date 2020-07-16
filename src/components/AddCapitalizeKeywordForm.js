import React from 'react';

// Stateless Functional Component
const AddCapitalizeKeywordForm =({onNewKeyword=f=>f}) => {
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

export default AddCapitalizeKeywordForm;