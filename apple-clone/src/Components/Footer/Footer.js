import React from "react";
import { FaAngleDown } from "react-icons/fa6";
const stores = [{
    id : 1,
    heading:'Shop and Learn',
    content : ['Store',
    'Mac',
    'iPad',
    'iPhone',
    'Watch',
    'Vision',
    'AirPods',
    'TV & Home',
    'AirTag',
    'Accessories',
    'Gift Cards']
},
{
    id:2,
    heading:'Account ',
    content:[
        'Manage Your Apple ID',
        'Apple Store Account',
        'iCloud.com']
},
{
    id:3,
    heading:'Apple Store',
    content:[
        'Find a Store',
        'Genius Bar',
        'Today at Apple',
        'Apple Camp',
        'Apple Store App',
        'Certified Refurbished',
        'Apple Trade In',
        'Financing',
        'Carrier Deals at Apple',
        'Order Status',
        'Shopping Help'
    ]
},
{
    id:4,
    heading:'For Business',
    content:[
        'Apple and Business',
        'Shop for Business'
    ]
},
{
    id:5,
    heading:'Apple Values',
    content:[
        'Accessibility',
        'Education',
        'Environment',
        'Inclusion and Diversity',
        'Privacy',
        'Racial Equity and Justice',
        'Supplier Responsibility'
    ]
},
{
    id:6,
    heading:'Apple Wallet',
    content:[
        'Wallet',
        'Apple Card',
        'Apple Pay',
        'Apple Cash'
    ]
},

{
    id:7,
    heading:'Entertainment',
    content:[
        'Apple One',
        'Apple TV+',
        'Apple Music',
        'Apple Arcade',
        'Apple Fitness+',
        'Apple News+',
        'Apple Podcasts',
        'Apple Books',
        'App Store'
    ]
},
{
    id:8,
    heading:'For Education',
    content:[
        'Apple and Education',
        'Shop for K-12',
        'Shop for College'
    ]
},
{
    id:9,
    heading:'About Apple',
    content:[
        'Newsroom',
        'Apple Leadership',
        'Career Opportunities',
        'Investors',
        'Ethics & Compliance',
        'Events',
        'Contact Apple'
    ]
},
{
    id:10,
    heading:'For Healthcare',
    content:[
        'Apple in Healthcare',
        'Health on Apple Watch',
        'Health Records on iPhone'
    ]
},
{
    id:11,
    heading:'For Government',
    content:[
        'Shop for Government',
        'Shop for Veterans and Military'
    ]
},

]
function Footer(){
return(
    <div className="bg-[rgb(245,245,247)] px-[5%] md:px-[15%]  mt-2">
    <ul className="text-[12px] text-[rgba(0,0,0,0.56)] font-sans leading-[16px] pt-4 pb-6 font-[400]">
        <li>1. Apple Fitness+ requires iPhone 8 or later or Apple Watch Series 3 or later paired with iPhone 6s or later required. New subscribers only. $9.99/month after trial. Plan automatically renews until cancelled. Terms apply.</li>
        <br>
        </br>
        <li>2. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.</li>
        <br>
        </br>
        <li>Apple Vision Pro has not been authorized as required by the rules of the Federal Communications Commission. This device is not, and may not be, offered for sale or lease, or sold or leased, until authorization is obtained.</li>
        <br>
        </br>
        <li>Available in the U.S. on apple.com, in the Apple Store app, and at Apple Stores.</li>
        <br>
        </br>
        <li>To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.</li>
        <br>
        </br>
        <li>If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.</li>
        <br>
        </br>
        <li>Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.</li>
        <br>
        </br>
        <li>A subscription is required for Apple TV+.</li>
    </ul>
    <div className=" text-[rgba(0,0,0,0.72)] ">
        <div className="lg:grid grid-cols-5 pb-[10px] mb-[16px] border-t-[1px] border-[rgba(0,0,0,0.22)]">
            <div> {stores.filter((number) => number.id === 1 | number.id === 6 ).map((number) => 
             <ul className="lg:pt-[20px] pt-2">
             <h3 className="font-sans pb-2 lg:pb-0 lg:border-none border-b-[1px] border-[rgba(0,0,0,0.22)] text-[rgba(0,0,0,0.88)] lg:mb-[9px] leading-[16px] text-[12px] flex justify-between font-semibold">{number.heading}<FaAngleDown className="lg:hidden"></FaAngleDown></h3>
            <li className="list font-sans text-[12px] lg:block hidden text-[rgba(0,0,0,0.72)] leading-[16px] font-normal">{number.content.map((number2)=><li className="pb-[7px]">{number2}</li>)}</li>
         </ul>
            )}
            </div>
            <div> {stores.filter((number) => number.id === 2 | number.id === 7 ).map((number) => 
               <ul className="lg:pt-[20px] pt-2">
               <h3 className="font-sans  pb-2 lg:pb-0 lg:border-none border-b-[1px] border-[rgba(0,0,0,0.22)] text-[rgba(0,0,0,0.88)] lg:mb-[9px] leading-[16px] text-[12px] flex justify-between font-semibold">{number.heading}<FaAngleDown className="lg:hidden"></FaAngleDown></h3>
              <li className="font-sans lg:block hidden text-[12px] text-[rgba(0,0,0,0.72)] leading-[16px] font-normal">{number.content.map((number2)=><li className="pb-[7px]">{number2}</li>)}</li>
           </ul>
            )}
            </div>
            <div> {stores.filter((number) => number.id === 3 ).map((number) => 
         <ul className="lg:pt-[20px] pt-2">
         <h3 className="font-sans  pb-2 lg:pb-0 lg:border-none border-b-[1px] border-[rgba(0,0,0,0.22)] text-[rgba(0,0,0,0.88)] lg:mb-[9px] leading-[16px] text-[12px] flex justify-between font-semibold">{number.heading}<FaAngleDown className="lg:hidden"></FaAngleDown></h3>
        <li className="font-sans lg:block hidden text-[12px] text-[rgba(0,0,0,0.72)] leading-[16px] font-normal">{number.content.map((number2)=><li className="pb-[7px]">{number2}</li>)}</li>
     </ul>
            )}
            </div>
            <div> {stores.filter((number) => number.id === 4 | number.id === 8 | number.id === 10 | number.id === 11).map((number) => 
              <ul className="lg:pt-[20px] pt-2">
              <h3 className="font-sans  pb-2 lg:pb-0 lg:border-none border-b-[1px] border-[rgba(0,0,0,0.22)] text-[rgba(0,0,0,0.88)] lg:mb-[9px] leading-[16px] text-[12px] flex justify-between font-semibold">{number.heading}<FaAngleDown className="lg:hidden"></FaAngleDown></h3>
             <li className="font-sans lg:block hidden text-[12px] text-[rgba(0,0,0,0.72)] leading-[16px] font-normal">{number.content.map((number2)=><li className="pb-[7px]">{number2}</li>)}</li>
          </ul>
            )}
            </div>
            <div> {stores.filter((number) => number.id === 5 | number.id === 9 ).map((number) => 
                <ul className="lg:pt-[20px] pt-2">
                <h3 className=" pb-2 lg:pb-0 font-sans lg:border-none border-b-[1px] border-[rgba(0,0,0,0.22)] text-[rgba(0,0,0,0.88)] lg:mb-[9px] leading-[16px] text-[12px] flex justify-between font-semibold">{number.heading}<FaAngleDown className="lg:hidden"></FaAngleDown></h3>
               <li className="font-sans lg:block hidden text-[12px] text-[rgba(0,0,0,0.72)] leading-[16px] font-normal">{number.content.map((number2)=><li className="pb-[7px]">{number2}</li>)}</li>
            </ul>
            )}
            </div>
            {/* {stores.map((number)=>
              <ul className="">
                <h3 className="font-sans mb-[9px] leading-[16px] text-[12px] font-semibold">{number.heading}</h3>
               <li className="font-sans mb-[9px] text-[12px] leading-[16px] font-normal">{number.content.map((number2)=><li>{number2}</li>)}</li>
            </ul>
            )} */}
        </div>
        <p className =" mt-[30px] pb-[19px] font-sans border-b-[1px] border-[rgba(0,0,0,0.12)] mb-[16px] text-[12px] leading-[16px] font-normal">More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.</p>
        <div className="lg:flex w-full justify-between text-start lg:text-end text-[12px] leading-[4px] text-[rgba(0,0,0,0.72)] font-normal">
            <div className="lg:mt-[5px] lg:mb-[21px] mb-5 lg:flex-2 lg:mr-[30px]">Copyright © 2024 Apple Inc. All rights reserved.</div>
            <div className="lg:mt-[5px] lg:mb-[21px] mb-3 lg:flex-3 pb-7 lg:mr-[30px]">
            <a className="px-[9px] lg:mx-0  border-r-[1px] border-[rgba(0,0,0,0.42)]" href="#">Privacy Policy</a>
            <a className="px-[9px] lg:mx-0  border-r-[1px] border-[rgba(0,0,0,0.42)]" href="#">Terms of Use</a>
            <a className="px-[9px] lg:mx-0  border-r-[1px] border-[rgba(0,0,0,0.42)]" href="#">Sales and Refunds</a>
            <a className="px-[9px] lg:mx-0  border-r-[1px] border-[rgba(0,0,0,0.42)]" href="#">Legal</a>
            <a className="px-[9px] lg:mx-0" href="#">Site Map</a>
            </div>
            <div className="mt-[5px] hidden lg:block mb-[21px] flex-1">United States</div>
        </div>
    </div>
    </div>
)}
export default Footer;