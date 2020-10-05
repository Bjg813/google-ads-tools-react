import React from 'react';
import LowerCaseKeywordView from './LowerCaseKeywordView'

// Sateless Functional Component
const LowerCaseKeywordList = ({ lowercasekeywords=[], onRemove=f=>f }) => 
    <div>
        {(lowercasekeywords.length === 0) ?
        <p>No Keywords (Add Keywords)</p> :
        lowercasekeywords.map(keyword => 
            <LowerCaseKeywordView key={keyword.id} {...keyword}
                    onRemove={() => onRemove(keyword.id)} />
        )    
    }
    </div>

export default LowerCaseKeywordList;