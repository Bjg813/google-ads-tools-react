import React from 'react';
import BraodMatchKeywordView from './BroadMatchKeywordView';

// Sateless Functional Component
const BroadKeywordList = ({ broadKeywords=[], onRemove=f=>f }) => 
    <div>
        {(broadKeywords.length === 0) ?
        <p>No Keywords (Add Keywords)</p> :
        broadKeywords.map(keyword => 
            <BraodMatchKeywordView key={keyword.id} {...keyword}
                    onRemove={() => onRemove(keyword.id)} />
        )    
    }
    </div>

export default BroadKeywordList;