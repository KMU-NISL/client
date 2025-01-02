import TopBackground from "../components/TopBackground.tsx";
import React, {useEffect, useState} from "react";
import ScrollingInduction from "../components/ScrollingInduction.tsx";
import PageTitle from "../components/PageTitle.tsx";

const Recruitment: React.FC = () => {
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const url: string = 'recruitment-background.jpg';
    const title: string = 'Recruitment';

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