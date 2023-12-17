import React from 'react'
import { Loader, Placeholder } from 'rsuite';
import "rsuite/dist/rsuite.min.css";

function PreLoader({visibility}) {
    
    return (
        <div className={`${visibility ? 'flex' : 'hidden'} flex-col  h-full w-full fixed top-0 left-0 z-10`}>
            <Placeholder.Paragraph className='bg-red-500' rows={40} />
            <Loader backdrop content="loading" vertical />
        </div>
    )
}

export default PreLoader