import React from 'react'

// Stateless Functional Component
const LowerCaseKeywordView = ({ lowercasekeyword, onRemove=f=>f }) => 
    <section className='keyword'>
        <p>{lowercasekeyword.split(' ').map(keyword => `${keyword.charAt(0).toLowerCase()}${keyword.substr(1).toLowerCase()} `)}</p>
        <button onClick={onRemove}>Remove</button>
    </section>

export default LowerCaseKeywordView;