import React from "react";


const Footer: React.FC = () => {
    return (
        <div className='w-full h-[8%] md:h-[10%] p-2 bg-black opacity-60'>
            <div className='flex flex-col justify-center items-center text-white'>
                <div className='text-white text-[0.6rem] md:text-base'>Next-generation Information Security Laboratory</div>
                <div className='text-white text-[0.6rem] md:text-base'>Room #1305, #1319, #1321, Engineering Building, Keimyung University, South Korea.</div>
                <div className='text-white text-[0.6rem] md:text-base'>Tel.(+82) 53-580-5270</div>
            </div>
        </div>
    )
}

export default Footer