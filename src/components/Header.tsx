import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const Header: React.FC = () => {
    const [isVisibleSlider, setIsVisibleSlider] = useState(false);


    const navigate = useNavigate();

    const handleNavigate = (url: string) => {
        setIsVisibleSlider(false);
        navigate(`/${url}`)
    }

    const handleSlider = () => {
        setIsVisibleSlider(!isVisibleSlider);
    }


    return (
        <>
            <header className='absolute top-0 w-full max-w-full h-[8%] flex items-center'>
                <div className='transition-all transform flex justify-between items-center max-w-full w-full'>
                    <div onClick={() => handleNavigate('')}
                         className='text-3xl text-white font-bold ml-10 m-2 cursor-pointer'>NISL
                        <div className='text-xs text-slate-400'>Next-Generation Information Security Lab</div>
                    </div>
                    <div className='lg:flex justify-between hidden gap-4'>
                        <div onClick={() => handleNavigate('introduce')}
                             className='text-white text-lg m-2 cursor-pointer transition-all underline-offset-4  hover:underline duration-500 hover:text-red-600 hover:border-red-600'>Introduce
                        </div>
                        <div onClick={() => handleNavigate('members')}
                             className='text-white text-lg m-2 cursor-pointer transition-all underline-offset-4  hover:underline duration-500 hover:text-red-600 hover:border-red-600'>Members
                        </div>
                        <div onClick={() => handleNavigate('research')}
                             className='text-white text-lg m-2 cursor-pointer transition-all underline-offset-4  hover:underline duration-500 hover:text-red-600 hover:border-red-600'>Research
                        </div>
                        <div onClick={() => handleNavigate('publication')}
                             className='text-white text-lg m-2 cursor-pointer transition-all underline-offset-4  hover:underline duration-500 hover:text-red-600 hover:border-red-600'>Publication
                        </div>
                        <div onClick={() => handleNavigate('recruitment')}
                             className='text-white text-lg m-2 cursor-pointer transition-all underline-offset-4  hover:underline duration-500 hover:text-red-600 hover:border-red-600'>Recruitment
                        </div>
                    </div>
                    <div className='justify-self-end m-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleSlider()}
                             height="20" width="17.5" className='cursor-pointer'
                             viewBox="0 0 448 512">
                            <path fill="#ffffff"
                                  d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </div>
                </div>


            </header>
            <div
                className={`top-0 absolute min-w-60 w-1/6 h-full transition-all duration-1000 transform bg-white ${isVisibleSlider ? 'opacity-100 left-0' : 'opacity-0 -left-1/2'}`}>

                <div className='text-2xl text-black m-2'>NISL
                    <div className='text-sm text-slate-400'>
                        Next-Generation Information Security Lab
                    </div>
                </div>


                <div
                    className={`flex flex-col justify-center items-start mt-5 ${isVisibleSlider ? 'opacity-100' : 'opacity-0 hidden'}`}>

                    <div onClick={() => handleNavigate('introduce')}
                         className='text-black text-xl m-2 cursor-pointer transition-all duration-500 hover:text-green-500'>Introduce
                    </div>
                    <div className='w-10/12 h-[0.1rem] bg-slate-400 opacity-60 mb-4'></div>
                    <div onClick={() => handleNavigate('members')}
                         className='text-black text-xl m-2 cursor-pointer transition-all duration-500 hover:text-green-500'>Members
                    </div>
                    <div className='w-10/12 h-[0.1rem] bg-slate-400 opacity-60 mb-4'></div>
                    <div onClick={() => handleNavigate('research')}
                         className='text-black text-xl m-2 cursor-pointer transition-all duration-500 hover:text-green-500'>Research
                    </div>
                    <div className='w-10/12 h-[0.1rem] bg-slate-400 opacity-60 mb-4'></div>
                    <div onClick={() => handleNavigate('publication')}
                         className='text-black text-xl m-2 cursor-pointer transition-all duration-500 hover:text-green-500'>Publication
                    </div>
                    <div className='w-10/12 h-[0.1rem] bg-slate-400 opacity-60 mb-4'></div>
                    <div onClick={() => handleNavigate('recruitment')}
                         className='text-black text-xl m-2 cursor-pointer transition-all duration-500 hover:text-green-500'>Recruitment
                    </div>
                    <div className='w-10/12 h-[0.1rem] bg-slate-400 opacity-60 mb-4'></div>
                </div>

            </div>
        </>
    )
}


export default Header