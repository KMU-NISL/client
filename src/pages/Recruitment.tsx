import TopBackground from "../components/TopBackground.tsx";
import React, {useEffect, useState} from "react";
import ScrollingInduction from "../components/ScrollingInduction.tsx";
import PageTitle from "../components/PageTitle.tsx";

const Recruitment: React.FC = () => {
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const url: string = 'recruitment-background.jpg';
    const title: string = 'Recruitment';
    const content : string = 'Please contact with the following mail'
    const email : string = 'yhpark@kmu.ac.kr'

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
                    {content}
                </div>
                <div className={'text-black text-xl font-bold'}>
                    {email}
                </div>
            </div>
        </>
    )
}

export default Recruitment