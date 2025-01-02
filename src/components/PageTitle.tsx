import React from "react";

interface PageTitleProps {
    isTitleVisible?: boolean,
    title : string
}


const PageTitle : React.FC<PageTitleProps> = ({isTitleVisible, title}) => {
    return (
        <div
            className={`w-full h-4/5 min-h-[80%] flex flex-col items-center justify-center transition-all duration-[700ms] ${isTitleVisible ? 'opacity-100' : 'opacity-0 translate-y-5'}`}>
            <div className='text-white m-10 text-6xl font-bold'>{title}</div>
        </div>
    )
}

export default PageTitle;