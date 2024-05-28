'use client'
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa6";


export function PartnerContainer({ company, local, imageUrl, link }: {
    company: string,
    local: string,
    imageUrl?: string
    link?: string
}) {
    return (

        <div onClick={() => link && window.open(link)} className="w-full hover:shadow hover:shadow-zinc-300 p-4 duration-300 cursor-pointer">
            <div className="flex justify-between">
                <h2>
                    {company}
                </h2>
                <button className="rotate-[45deg]">
                    <FaArrowUp />
                </button>
            </div>
            <p className="text-zinc-600 mt-8 mb-4">
                {local}
            </p>
            <Image width={300} height={300}  src={String(imageUrl)}  className="w-full h-46" quality={100} alt="logo da instituição" />
        </div>
    )
}