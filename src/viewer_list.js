import React, { useState } from 'react';

const Viewers = ({viewers, openViewer}) => {

    const viewerList = viewers.map(viewer => {
            return (
                <div className="viewer-item" key={viewer.key} onClick={()=>{openViewer(viewer.key)}}>
                    {viewer.name}
                </div>
            )
        });
        return(
            <div >
                {viewerList}
            </div>
        )
}

export default Viewers;