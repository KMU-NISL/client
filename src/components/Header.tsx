import React from "react";

const Header: React.FC = () => {
    return (
        <>
            <header className='absolute bg-white w-full h-[8%] shadow-2xl flex items-center'>
                <div className='absolute left-1/2 transform -translate-x-1/2'>
                    <div className='text-2xl'>NISL</div>
                </div>

                <div className='absolute left-4 hidden xl:inline'>
                    <div className='flex justify-between'>
                        <div className='text-slate-700 text-xl m-2 cursor-pointer'>Introduce</div>
                        <div className='text-slate-700 text-xl m-2 cursor-pointer'>Members</div>
                        <div className='text-slate-700 text-xl m-2 cursor-pointer'>Research</div>
                        <div className='text-slate-700 text-xl m-2 cursor-pointer'>Publication</div>
                        <div className='text-slate-700 text-xl m-2 cursor-pointer'>Recruitment</div>
                    </div>
                </div>

                <div className='absolute left-4 xl:hidden'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" className='cursor-pointer m-2'
                             viewBox="0 0 448 512">
                            <path fill="#000000"
                                  d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </div>
                </div>

            </header>
        </>
    )
}


export default Header