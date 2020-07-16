import React from 'react'
import EOMView from './EOMView'

// Stateless Functional Component
const EOMList = ({ eoms=[], onRemove=f=>f }) =>
    <div>
        {(eoms.length === 0) ?
        <p>You haven't started EOM's yet (start now)</p> :
        eoms.map(eom => 
            <EOMView key={eom.id} {...eom} 
                        onRemove={() => onRemove(eom.id)} />
            )
    }
    </div>

export default EOMList