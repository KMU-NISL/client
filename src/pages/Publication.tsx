import TopBackground from "../components/TopBackground.tsx";
import {useEffect, useState} from "react";


const Publication: React.FC = () => {
    const url : string = 'introduce-background.jpg';
    const [isTitleVisible, setIsTitleVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsTitleVisible(true);
        }, 500);

    }, [])

    return (
        <>
            <TopBackground url={url} />

            <div className={`w-full h-4/5 flex flex-col items-center justify-center transition-all duration-[700ms] ${isTitleVisible ? 'opacity-100' : 'opacity-0 translate-y-5'}`}>
                <div className='text-white m-10 text-6xl font-bold'>Publication</div>
            </div>

            <div className='w-full h-1/5 flex items-center justify-center animate-bounce'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"/>
                </svg>
            </div>
        </>
    )
}

export default Publication