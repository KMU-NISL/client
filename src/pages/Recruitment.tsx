import TopBackground from "../components/TopBackground.tsx";
import {useEffect, useState} from "react";
import ScrollingInduction from "../components/ScrollingInduction.tsx";

const Recruitment: React.FC = () => {
    const url: string = 'recruitment-background.jpg';
    const [isTitleVisible, setIsTitleVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsTitleVisible(true);
        }, 500);

    }, [])


    return (
        <>
            <TopBackground url={url}/>

            <div
                className={`w-full h-4/5 flex flex-col items-center justify-center transition-all duration-[700ms] ${isTitleVisible ? 'opacity-100' : 'opacity-0 translate-y-5'}`}>
                <div className='text-white m-10 text-6xl font-bold'>Recruitment</div>
            </div>

            <ScrollingInduction />

            <div className='flex flex-col items-center justify-center mb-20'>
                <div className={'text-black text-2xl font-bold'}>
                    Please contact with the following mail
                </div>
                <div className={'text-black text-xl font-bold'}>
                    yhpark@kmu.ac.kr
                </div>
            </div>
        </>
    )
}

export default Recruitment