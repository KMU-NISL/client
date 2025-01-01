import React from "react";
import Background from "../components/Background.tsx";

const Main : React.FC = () => {
    return (
        <div className='h-screen w-screen'>
            {/*<Header />*/}
            <Background />
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <div className='text-6xl text-white'>Next-generation Information Security Lab</div>
            </div>
        </div>
    )
}

export default Main;