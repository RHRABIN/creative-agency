import React from 'react';

const Loading = () => {
    return (
        <div className='relative h-full'>
            {/* <p className='top-1/2 left-1/2 absolute'>Loading...</p> */}
            <progress class="progress 
            w-32 max-w-[200px]  progress-success top-1/4 left-[40%]  absolute border"></progress>
        </div>
    );
};

export default Loading;