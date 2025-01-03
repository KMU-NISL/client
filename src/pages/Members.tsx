import TopBackground from "../components/TopBackground.tsx";
import React, {useEffect, useState} from "react";
import ScrollingInduction from "../components/ScrollingInduction.tsx";
import PageTitle from "../components/PageTitle.tsx";
import membersData from "../assets/members.json";

interface Group {
    name: string,
    members: Member[]
}

interface Member {
    name: string,
    affiliation: string,
    email: string
}

const Members: React.FC = () => {
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const [members] = useState<Group[]>(membersData);
    const url: string = 'members-background.jpg';
    const title: string = 'Members';

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
                threshold: 0.6,
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
            <PageTitle title={title} isTitleVisible={isTitleVisible}/>
            <ScrollingInduction/>

            <div className='flex flex-col items-center justify-center mb-20 mt-0'>
                {
                    members.map((member) => {
                        return (
                            <>
                                <div className=' font-bold text-black text-3xl mb-10 text-center'>
                                    {member.name}
                                </div>
                                {
                                    member.members.map((member) => {
                                        return (
                                            <>
                                                <div
                                                    className='box transition-all duration-1000 shadow-2xl rounded-2xl w-11/12 md:w-1/2 p-10 md:p-16 mb-20'>
                                                    <div className='flex flex-col items-start justify-start text-black'>
                                                        <div className='font-bold text-4xl md:text-5xl mb-10'>
                                                            {member.name}
                                                        </div>
                                                        <div className='text-sm md:text-base'>
                                                            {member.affiliation}
                                                        </div>
                                                        <div className='text-sm md:text-base'>
                                                            {member.email}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </>
                        )
                    })
                }
            </div>

        </>
    )
}

export default Members;