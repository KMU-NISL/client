import TopBackground from "../components/TopBackground.tsx";
import {useEffect, useState} from "react";
import ScrollingInduction from "../components/ScrollingInduction.tsx";


const Introduce: React.FC = () => {
    const url: string = 'introduce-background.jpg';
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
                <div className='text-white m-10 text-6xl font-bold'>Introduction Lab</div>
            </div>

            <ScrollingInduction />

            <div className='w-full flex flex-col justify-center items-center'>
                <div className='w-2/3  m-16 mt-0'>
                    <div className='text-xl font-bold text-gray-900'>
                        In the 21st century with information and telecommunication more important than ever before, the
                        mobile network field is rapidly developing as the core of the information and telecommunication
                        field.
                    </div>
                    <div className='mt-10 text-lg font-bold text-gray-500'>
                        The importance of information security is being more emphasized, as we live in the information
                        society with system development. Information security is a social and national issue rather than
                        personal. Under these circumstances, we have established Next-Generation Information Security
                        Laboratory(NISL). "Next-Generation Information Security Technology" includes internet of
                        things(IoT) security, vehicle ad hoc network(VANET) security, FinTech security, information
                        security service technology for the mobile Internet, and authentication technology for the
                        various network security system. These are the core of the next-generation network security
                        technology. NISL at Keimyung University will do its best to improve the information security
                        field in Korea, meet international standards, and enhance its competitive edge in the rapidly
                        changing information and telecommunication society.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduce