import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import watch from "../../Images/watch.jpg"
import watch2 from "../../Images/watch2.jpg"
import MacBook from "../../Images/Mac pro book.jpg"
import fitness from "../../Images/fitness.jpg";
import phone from "../../Images/phone.jpg"
import phone2 from "../../Images/phone2.jpg"
import { FaApple } from "react-icons/fa";

const Headline = [
    {
        id: 1,
        name: 'Watch',
        specify:'SERIES 9',
        description: 'Smarter.Brighter.Mightier.',
        image: watch,
        tag:'Learn More',
        tag2:'Buy'
    },
    {
        id: 2,
        name: 'Watch',
        specify:'ULTRA 2',
        description: 'Next level adventure.',
        image: watch2,
        tag:'Learn More',
        tag2:'Buy'
    },
    {
        id: 3,
        name: 'MacBook Pro',
        description: 'Mind-blowing. Head-turning.',
        image: MacBook,
        tag:'Learn More',
        tag2:'Buy'
    },
    {
        id: 4,
        name: 'iPad',
        description: 'Lovable. Drawable. Magical.',
        image: fitness,
        tag:'Learn More',
        tag2:'Try it free1'
    }, 
    {
        id: 5,
        name: 'Card',
        description: 'Get up to 3% Daily Cash back with every purchase.',
        image: phone,
        tag:'Learn More',
        tag2:'Apply now'
    },
    {
        id: 6,
        name: 'Trade In',
        description: 'Get $200-$650 in credit when you trade in iPhone 11 or higher.2',
        image: phone2,
        tag:'See what your device is worth',
    }

]
function UnitWrapper() {
    return (
        <div className="md:grid-cols-2 grid grid-cols-1 md:space-y-3 md:space-x-[12px] mt-4 w-100% h-[570%] md:h-[255%]">
            {Headline.map((number) => <>
                <div key={number.id} className='h-[100%] w-full ' >
                    <div className='w-full relative h-full'>
                        <div className="absolute w-full text-center top-[59px]">
                            <p className={number.id===1 | number.id === 4 ? 'text-white md:text-[40px] text-[32px] sm:text-[36px] leading-[44px] text-center font-sans font-[600] inline':'text-[40px] leading-[44px] text-center font-sans font-[600]'}>
                                <FaApple className="inline pb-2"></FaApple>
                                {number.name}
                            </p>
                            <p className="md:text-[15px] text-[10px]  text-[400] text-red-700 md:tracking-wide">{number.specify}</p>
                            <p className={number.id===1 | number.id === 4 ? "text-[19px] md:text-[21px] tracking-[0.22px] font-[400] text-white leading-[26px]":'text-[21px] font-[400]  leading-[26px]'}>
                                {number.description}</p>
                            <a href="#">
                                <p className="text-[#2997ff] mt-[11px] md:text-[21px] text-[19px] font-[400] leading-[23px] ">
                                    {number.tag}
                                    <IoIosArrowForward className="inline-block "></IoIosArrowForward>
                                    <span className="ml-[12px]">
                                        {number.tag2}
                                            <IoIosArrowForward className={number.id === 6 ? "hidden": "inline-block"}></IoIosArrowForward>
                                       
                                    </span>
                                </p>
                            </a>
                        </div>
                        
                        <img className="w-full h-full object-cover" src={number.image} />
                    </div>
                </div>

            </>
            )}
        </div>
    );
}
export default UnitWrapper;