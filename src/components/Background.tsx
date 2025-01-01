import React from "react";


const Background: React.FC = () => {
    return (
        <span className='absolute top-0 left-0 z-[-1] w-full h-full'>
            {/*<img src='/background.jpg' alt='background' className='lg:hidden h-screen w-screen'/>*/}
            <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
                <source src="/background-video.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className='absolute top-0 left-0 h-full w-full bg-black opacity-60'></div>
        </span>
    )
}

export default Background;