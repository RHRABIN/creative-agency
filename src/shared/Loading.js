import React from 'react';

const Loading = () => {
    return (
        <div className='relative h-full'>
            {/* <p className='top-1/2 left-1/2 absolute'>Loading...</p> */}
            <progress class="progress w-56  progress-success top-1/4 left-2/4 absolute border"></progress>
        </div>
    );
};

export default Loading;