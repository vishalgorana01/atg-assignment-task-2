import React from 'react'
import { Loader, Placeholder } from 'rsuite';
import "rsuite/dist/rsuite.min.css";

function PreLoader() {
    return (
        <div className='h-full w-full'>
            <Placeholder.Paragraph className='bg-red-500' rows={40} />
            <Loader backdrop content="loading" vertical />
        </div>
    )
}

export default PreLoader