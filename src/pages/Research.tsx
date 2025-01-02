import TopBackground from "../components/TopBackground.tsx";
import {useEffect, useState} from "react";
import ScrollingInduction from "../components/ScrollingInduction.tsx";

const Research: React.FC = () => {
    const url: string = 'research-background.jpg';
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const content: string = 'Next-Generation Information Security Lab (NISL) studies security of communication and networks,\n' +
        '                        blockchain technology, post-quantum cryptography, vehicle ad-hoc networks, e-commerce and so on.\n' +
        '                        There cryptographic researches guarantee confidentiality, integrity, availability of\n' +
        '                        information.'

    const researches = [
        {
            title: 'Blockchain Technology',
            content: 'A blockchain is a decentralized ledger of all transaction across a P2P(Peer to Peer) network. The innovation of this technology is that participants transfer assets or data through the internet without the need for a trusted third party. This mechanism of blockchain can be applicable for financial services, voting, cloud service, healthcare, automotive energy management and many other fields. We study the security system and cryptographic techniques using the blockchain.',
            images : ['/blockchain.jpg']
        },
        {
            title : 'Post-quantum Cryptography',
            content : 'The quantum computer will break today\'s public-key cryptosystem such as RSA and ECC using Shor and Grover algorithm. A post-quantum cryptosystem is secure cryptosystem even if an attacker has a large quantum computer and try to attack the system. Today, several post quantum cryptosystems have been proposed for preventing quantum computing attacks, including hash based, multivariate, code based and lattice based cryptosystem. We study the post quantum cryptosystem for improving security and efficiency.',
            images : ['/quantum1.png']
        },
        {
            title : 'Security of IoT',
            content : 'The concept of Internet of Things (IoT) is that every object in the Internet infrastructure is inter connected into a global dynamic expanding network. Sensors and smart objects are classical computing devices key parties of the IOT. The computing performance of those devices are comparatively low, hence, it is hard to apply traditional cryptographic technologies. We study user authentication and key management suitable for IoT environments.',
            images : ['/smart-city.gif']
        },
        {
            title : 'Security of Vehicular Ad-hoc Networks',
            content : 'Vehicular Ad-Hoc Networks (VANETs) are distributed, self-organized networks built up by many high-speed vehicles. All vehicles in the network would install onboard units (OBU), which would integrate the vehicles’ wireless communications, micro-sensors, embedded systems, and Global Positioning System (GPS). These smart vehicles could then communicate with each other as well as with roadside units (RSU), such as traffic lights or traffic signs, which would then improve the driving experience and make driving safer. Despite these advantages, VANETs come with their own set of challenges, particularly in the aspects of security and privacy. Lack of authenticated information shared in the network may lead to malicious attacks and service abuses, which could pose great threats to drivers. We study authentication and key distribution between vehicles and RSUs.',
            images : ['/adhoc.jpg']
        },
        {
            title : 'Security of Fintech',
            content : 'FinTech (Financial Technology) is defined as the technique to create efficient financial services using IT technologies. FinTech is an innovative technology through IT platform and big data, and is expected to improve the security and solve problems of the conventional banking system. Financial institutions has introduced the technologies and investment in order to provide safe and effective services to users, such as Samsung pay and Apple pay. However, In the financial environment, information disclosure and security incident has occurred so they has lost the trust from their customers. Moreover new variant of the security threats and attack techniques have occurred. We study user identification, non-repudiation, integrity and confidentiality of data for secure user authentication.',
            images : ['/fintech1.jpg', '/fintech2.jpg']
        }
    ]

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

            <div
                className={`w-full h-4/5 flex flex-col items-center justify-center transition-all duration-[700ms] ${isTitleVisible ? 'opacity-100' : 'opacity-0 translate-y-5'}`}>
                <div className='text-white m-10 text-6xl font-bold'>Research</div>
            </div>

            <ScrollingInduction />


            <div className='flex flex-col items-center justify-center'>
                <div className='w-3/4 mb-20'>
                    <div className='text-black'>
                        {content}
                    </div>
                </div>

                {
                    researches.map((research) => {
                        return (
                            <div
                                className='box transition-all duration-1000 flex flex-col w-1/2 justify-center items-center mb-20 shadow-2xl rounded-2xl p-10'>
                                <div className='text-black text-xl mb-5 font-bold'>
                                    {research.title}
                                </div>
                                <div className='text-black mb-5'>
                                    {research.content}
                                </div>
                                <div className='flex'>
                                {
                                    research.images.map((image) => {
                                        return (
                                            <img src={image} alt={'not found'} className={`w-1/${research.images.length}`}/>
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