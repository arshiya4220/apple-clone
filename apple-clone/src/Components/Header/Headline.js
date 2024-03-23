import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import iphone from "../../Images/iphone.jpg";
import iphone2 from "../../Images/iphone2.jpg";
const Headline = [
    {
        id: 2,
        name: 'iPhone 15 Pro',
        description: 'Titanium. So strong. So light. So Pro.',
        image: iphone
    },
    {
        id: 1,
        name: 'iPhone 15',
        description: 'New camera. New design. Newphoria.',
        image: iphone2
    }
]
function HeaderLine() {
    return (
        <>{Headline.map((number) => <>
            <div key={number.id} className={number.id === 2 ? ' bg-black h-[100%] z-10 text-white text-center  pt-[53px]' : 'z-10 bg-white h-[100%] text-black text-center  pt-[53px]'} >
            <div className={number.id === 2 ? 'w-full h-[100%] relative' : 'w-full h-[100%] relative'}>
                    <img className="w-full  h-full object-cover" src={number.image} />
            <div className="absolute left-0 right-0 top-[160px] md:top-[140px] mx-auto transform translate-y-[-50%]">
            <p className="z-40 md:text-[56px] text-[32px] sm:text-[48px] font-semibold leading-[52px]">{number.name}</p>
                <p className="md:text-[28px] text-[19px] sm:text-[24px] font-[400] leading-[28px]">{number.description}</p>
                <a href="#">
                    <p className="text-[#2997ff] mt-[14px] md:text-[21px] text-[19px] font-[400] leading-[23px] ">
                    Learn more 
                    <div className="inline-block"><IoIosArrowForward />
                    </div>
                    <span className="ml-[12px]">
                        Buy
                        <div className="inline-block">
                            <IoIosArrowForward />
                            </div>
                    </span>
                    </p>
                </a>
                </div>
                </div>
            </div>

        </>
        )}
        </>
    );
}
export default HeaderLine;