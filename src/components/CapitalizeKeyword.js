import React from 'react'

// Stateless Functional Component
const CapitalizeKeyword = ({ keyword, onRemove=f=>f }) => 
    <section className='keyword'>
        <p>{keyword.split(' ').map(keyword => `${keyword.charAt(0).toUpperCase()}${keyword.substr(1).toLowerCase()} `)}</p>
        <button onClick={onRemove}>Remove</button>
    </section>

export default CapitalizeKeyword;