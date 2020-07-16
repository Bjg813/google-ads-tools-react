import React from 'react'

// Stateless Functional Component
const ConvertBraodMatchKeyword = ({broadKeyword, onRemove=f=>f}) =>
    <section>
        <p>{broadKeyword.split(' ').map(keyword => `+${keyword}`).join(' ')}</p>
        <button onClick={onRemove}>Remove</button>
    </section>

export default ConvertBraodMatchKeyword;