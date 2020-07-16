import React from 'react';
import CapitalizeKeywordView from './CapitalizeKeywordView';

// Sateless Functional Component
const CapitalizeKeywordList = ({ keywords=[], onRemove=f=>f }) => 
    <div>
        {(keywords.length === 0) ?
        <p>No Keywords (Add Keywords)</p> :
        keywords.map(keyword => 
            <CapitalizeKeywordView key={keyword.id} {...keyword}
                    onRemove={() => onRemove(keyword.id)} />
        )    
    }
    </div>

export default CapitalizeKeywordList;