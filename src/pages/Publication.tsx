import TopBackground from "../components/TopBackground.tsx";
import React, {useEffect, useState} from "react";
import ScrollingInduction from "../components/ScrollingInduction.tsx";
import PageTitle from "../components/PageTitle.tsx";
import paperData from "../assets/papers.json";

interface Paper {
    name : string;
    journal : string;
    year : string;
}

const Publication: React.FC = () => {
    const [isTitleVisible, setIsTitleVisible] = useState<boolean>(false);
    const [papers] = useState<Paper[]>(paperData);
    const url: string = 'publication-background.jpg';
    const title: string = 'Publication';
    const contentTitle: string = 'International Journal index in SCIE';


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

            <div className='flex flex-col items-center w-11/12 md:w-full justify-center mb-20 mt-0'>
                <div className='text-base md:text-4xl font-bold pl-5 text-black mb-10'>
                    {contentTitle}
                </div>

                <ol>
                    {
                        papers.map((paper, index) => {
                            return (
                                <li className='text-xs md:text-base mb-5 md:mb-2 pl-5'>
                                    {index+1}. {paper.name}, {paper.journal}, {paper.year}
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        </>
    )
}

export default Publication