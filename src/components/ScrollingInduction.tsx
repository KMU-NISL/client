import React from "react";

const ScrollingInduction: React.FC = () => {
    return (
        <div className='w-full h-1/5 flex items-center justify-center animate-bounce'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"/>
            </svg>
        </div>
    )
}

export default ScrollingInduction