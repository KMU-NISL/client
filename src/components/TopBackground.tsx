import React from "react";

export interface TopBackgroundProps {
    url : string;
}

const TopBackground: React.FC<TopBackgroundProps> = ({url}) => {

    return (
        <>
            <div className={`absolute top-0 left-0 w-full h-4/5 z-[-1]`}>
                <img src={`/${url}`} alt="" className="w-full h-full object-cover"/>
            </div>
            <div className='absolute top-0 left-0 w-full h-4/5 z-[-1] bg-black opacity-40'></div>
        </>
    );
}


export default TopBackground;