import React from 'react';
import ResourceHP from './ResourceHP';
import ResourceO2 from './ResourceO2';
import ResourceFUEL from './ResourceFUEL';

function ResourceBar() {

    return (
        <div id="resourceBar">
            <ResourceHP />
            <ResourceO2 />
            <ResourceFUEL />
        </div>
    )
}

export default ResourceBar;