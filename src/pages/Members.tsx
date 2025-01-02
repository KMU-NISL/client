import TopBackground from "../components/TopBackground.tsx";
import {useEffect, useState} from "react";
import ScrollingInduction from "../components/ScrollingInduction.tsx";


const Members: React.FC = () => {
    const url: string = 'members-background.jpg';
    const [isTitleVisible, setIsTitleVisible] = useState(false);

    const members = {
        members: [{
            name: 'Professor',
            members: [{
                name: 'Yohan Park',
                affiliation: 'Department of Computer Engineering, Keimyung University',
                email: 'yhpark@kmu.ac.kr'
            }]
        },
            {
                name: 'Master\'s Students',
                members: [
                    {
                        name: 'Sengmin Lee',
                        affiliation: 'Department of Computer Engineering, Keimyung University',
                        email: 'lsm@ydonsecurity.com'
                    },
                    {
                        name: 'Hyewon Park',
                        affiliation: 'Department of Computer Engineering, Keimyung University',
                        email: 'wldnjsfuf@stu.kmu.ac.kr'
                    }
                ]
            },
            {
                name: 'Undergraduate Students',
                "members": [
                    {
                        "name": "Donghyeon Kim",
                        "affiliation": "Department of Computer Engineering, Keimyung University",
                        "email": "laders23@naver.com"
                    },
                    {
                        "name": "Hyeonmin Kim",
                        "affiliation": "Department of Computer Engineering, Keimyung University",
                        "email": "c3man161@gmail.com"
                    },
                    {
                        "name": "Chaeyun Son",
                        "affiliation": "Department of Computer Engineering, Keimyung University",
                        "email": "sonchaeyun0604@gmail.com"
                    },
                    {
                        "name": "Mingyu Oh",
                        "affiliation": "Department of Computer Engineering, Keimyung University",
                        "email": "alsrb4719@gmail.com"
                    },
                    {
                        "name": "Changui Lee",
                        "affiliation": "Department of Computer Engineering, Keimyung University",
                        "email": "rhljh7410@gmail.com"
                    },
                    {
                        "name": "Sieun Ju",
                        "affiliation": "Department of Computer Engineering, Keimyung University",
                        "email": "juse@gmail.com"
                    }
                ]
            }]
    }


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

            <div
                className={`w-full h-4/5 flex flex-col items-center justify-center transition-all duration-[700ms] ${isTitleVisible ? 'opacity-100' : 'opacity-0 translate-y-5'}`}>
                <div className='text-white m-10 text-6xl font-bold'>Members</div>
            </div>

            <ScrollingInduction />

            <div className='flex flex-col items-center justify-center mb-20 mt-0'>

                {
                    members.members.map((member) => {
                        return (
                            <>
                                <div className=' font-bold text-black text-3xl mb-10'>
                                    {member.name}
                                </div>
                                {
                                    member.members.map((member) => {
                                        return (
                                            <>
                                                <div className='box transition-all duration-1000 shadow-2xl rounded-2xl w-1/2 p-16 mb-20'>
                                                    <div className='flex flex-col items-start justify-start text-black'>
                                                        <div className='font-bold text-5xl mb-10'>
                                                            {member.name}
                                                        </div>
                                                        <div>
                                                            {member.affiliation}
                                                        </div>
                                                        <div>
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