import TopBackground from "../components/TopBackground.tsx";
import React, {useEffect, useState} from "react";
import ScrollingInduction from "../components/ScrollingInduction.tsx";
import PageTitle from "../components/PageTitle.tsx";
import researchData from "../assets/researches.json";

interface ResearchProps {
    content : string,
    researches : Research[]
}

interface Research{
    title: string,
    content: string,
    images: string[]
}

const Research: React.FC = () => {
    const [isTitleVisible, setIsTitleVisible] = useState<boolean>(false);
    const [researches] = useState<ResearchProps>(researchData);
    const url: string = 'research-background.jpg';
    const title = 'Research'

    useEffect(() => {
        setTimeout(() => {
            setIsTitleVisible(true);
        }, 500);

    }, [])

    useEffect(() => {
        const boxes = document.querySelectorAll(".box");
        const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // 화면 안으로 들어오면 요소를 나타나게 함
                        entry.target.classList.remove("opacity-0", "translate-y-4");
                        entry.target.classList.add("opacity-100", "translate-y-0");
                    } else {
                        // 화면 밖으로 나가면 요소를 다시 숨김
                        entry.target.classList.remove("opacity-100", "translate-y-0");
                        entry.target.classList.add("opacity-0", "translate-y-4");
                    }
                });
            },
            {
                root: null, // 뷰포트 기준
                rootMargin: "0px", // 추가 여백 없음
                threshold: 0.4,
            }
        );

        boxes.forEach((box) => observer.observe(box));
        // 클린업 함수로 observer 해제
        return () => {
            boxes.forEach((box) => observer.unobserve(box));
        };
    }, []);

    return (
        <>
            <TopBackground url={url}/>
            <PageTitle title={title} isTitleVisible={isTitleVisible} />
            <ScrollingInduction />


            <div className='flex flex-col items-center justify-center'>
                <div className='w-3/4 mb-20'>
                    <div className='text-black text-xs md:text-base'>
                        {researches.content}
                    </div>
                </div>

                {
                    researches.researches.map((research) => {
                        return (
                            <div
                                className='box transition-all duration-1000 flex flex-col w-11/12 md:w-1/2 justify-center items-center mb-20 shadow-2xl rounded-2xl p-10'>
                                <div className='text-black text-base  md:text-2xl mb-5 font-bold'>
                                    {research.title}
                                </div>
                                <div className='text-black mb-5 text-xs md:text-base'>
                                    {research.content}
                                </div>
                                <div className='flex'>
                                {
                                    research.images.map((image) => {
                                        return (
                                            <img src={image} alt={'not found'}
                                                 style={{ width: `${100 / research.images.length}%` }} />
                                        )
                                    })
                                }
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Research