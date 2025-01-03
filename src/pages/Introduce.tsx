import TopBackground from "../components/TopBackground.tsx";
import React, {useEffect, useState} from "react";
import ScrollingInduction from "../components/ScrollingInduction.tsx";
import PageTitle from "../components/PageTitle.tsx";
import introduceData from "../assets/introduce.json";


const Introduce: React.FC = () => {
    const [isTitleVisible, setIsTitleVisible] = useState<boolean>(false);
    const [content] = useState<string[]>(introduceData.content);
    const url: string = 'introduce-background.jpg';
    const title: string = 'Introduction Lab';

    useEffect(() => {
        setTimeout(() => {
            setIsTitleVisible(true);
        }, 500);
    }, [])

    return (
        <>
            <TopBackground url={url}/>
            <PageTitle title={title} isTitleVisible={isTitleVisible}/>
            <ScrollingInduction/>

            <div className='w-full flex flex-col justify-center items-center'>
                <div className='w-11/12 md:w-2/3 m-16 mt-0'>
                    <div className='text-sm md:text-xl font-bold text-gray-900'>
                        {content[0]}
                    </div>
                    <div className='mt-10 text-xs md:text-lg font-bold text-gray-500'>
                        {content[1]}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduce