import React from 'react';
import ConvertBraodMatchKeyword from './ConvertBroadMatchKeyword';

// Sateless Functional Component
const BroadKeywordList = ({ broadKeywords=[], onRemove=f=>f }) => 
    <div>
        {(broadKeywords.length === 0) ?
        <p>No Keywords (Add Keywords)</p> :
        broadKeywords.map(keyword => 
            <ConvertBraodMatchKeyword key={keyword.id} {...keyword}
                    onRemove={() => onRemove(keyword.id)} />
        )    
    }
    </div>

export default BroadKeywordList;