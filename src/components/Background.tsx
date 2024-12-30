import React from "react";


const Background: React.FC = () => {
    return (
        <span className='absolute top-0 z-[-1]'>
            <img src='/background.jpg' alt='background' className='h-screen w-screen'/>
            <div className='absolute top-0 h-full w-full bg-black opacity-60'></div>
        </span>
    )
}

export default Background;