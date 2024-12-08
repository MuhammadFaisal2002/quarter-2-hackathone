import Link from "next/link"
import { faCircleInfo, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Dropdowneng from "./Dropdowneng"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image";
export default function Header() {
    return (
        <div>
            <div className="bg-[#272343] h-[45px] w-full text-[13px] text-white flex justify-between px-[250px] py-[14px]">
                <div><span><input type="checkbox" checked /></span>Free Shipping on order more than 50$</div>
                <div className="flex">
                    <Dropdowneng />
                    <Link href="#" className="px-4">FAQs</Link>
                    <Link href='#' className="flex gap-[6px]"><FontAwesomeIcon icon={faCircleInfo} className="text-[#ffffff] h-[16px] w-[16px] Opacity-[70%] " />Need help</Link>
                </div>
            </div>
            <div className="bg-[#F0F2F3] h-[84px] w-full px-[250px] py-[22px] flex justify-between">
                <div className="flex gap-[8px] "><span><img src="icon.png" alt="" className="w-[26.267px] h-[23.33px]" /></span><span className="text-[26px] bold leading-[31.2px] text-[#272343]">Comforty</span></div>
                <div className="bg-white rounded-lg w-[120px] h-[44px] flex items-center justify-between gap-[12px] p-[8px]">
                    <button className="flex items-center gap-[8px]">
                        <FontAwesomeIcon icon={faCartShopping} className="w-[26px] h-[26px]" />
                        <span className="text-[12px]">Cart</span>
                        <div className="h-[20px] w-[20px] bg-[#007580] rounded-xl text-white flex items-center justify-center text-[10px] ml-[5px]">
                        2
                    </div>
                    </button>
                    
                </div>

            </div>
            <div className="h-[74px] bg-white py-[20px] px-[250px] w-full flex justify-between">
                <div>
                    <ul className="text-[14px] leading-[15.4px] text-[#636270] flex justify-evenly list-none font-medium">
                        <li><Link href="#" className="text-[#007580]">Home</Link></li>
                        <li><Link href="#" className="px-4">Shop</Link></li>
                        <li><Link href="#">Product</Link></li>
                        <li><Link href="#" className="px-4">Pages</Link></li>
                        <li><Link href="#">About</Link></li>
                    </ul>
                </div>
                <div className="text-[14px]">
                    <span className="font-medium text-[#636270]">Contact: <span className="font-normal text-black">(808) 555-0111</span></span>
                </div>
            </div>
        </div>
    )
}
