import React from 'react';
import CapitalizeKeyword from './CapitalizeKeyword';

// Sateless Functional Component
const CapitalizeKeywordList = ({ keywords=[], onRemove=f=>f }) => 
    <div>
        {(keywords.length === 0) ?
        <p>No Keywords (Add Keywords)</p> :
        keywords.map(keyword => 
            <CapitalizeKeyword key={keyword.id} {...keyword}
                    onRemove={() => onRemove(keyword.id)} />
        )    
    }
    </div>

export default CapitalizeKeywordList;