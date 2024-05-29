"use client";

import Image from "next/image";
import { AvatarGroup } from "../components/avatar-group";
import { Header } from "../components/header";
import { PhotosGroup } from "../components/photos-group";
import { useContext, useEffect } from "react";
import { LangContext } from "../contexts/langContext";
import Aos from "aos"
import 'aos/dist/aos.css'

export function Home() {
    useEffect(() => {
        Aos.init({ duration: 400, easing: "ease-out" })
    })
    const { lang, setLang } = useContext(LangContext);
    return (
        <div id="home" className="bg-home lg:bg-home-pc  bg-cover bg-no-repeat z-40 w-full">
            <Header />
            <div data-aos="fade-up" className="px-8 py-8 lg:hidden">
                <Image src="/logo1.png" className="mx-auto py-8" alt="logo do inspa" width={100} height={100}></Image>
                <p className="text-white font-bold text-2xl  my-8">
                    {lang !== "en" ? "Aprenda programação e inicie sua brilhante carreira como" : "Learn programming and begin your brilliant career as"} <span className="text-secondary">Dev.</span>
                </p>
                <p className="text-white">
                    {
                        lang !== "en" ? "Curso de programação que revolucionará sua vida! Aprenda, codifique e trilhe uma brilhante carreira, com uma imensidão de conteúdos e oportunidades para você." : "Programming course that will revolutionize your life! Learn, code and pursue a brilliant career, with a wealth of content and opportunities for you."
                    }
                </p>
                <div className="flex my-8 items-end gap-2 text-white">
                    <AvatarGroup />
                    <div>
                        <p className="-mb-1">
                            +10
                        </p>
                        <p>
                            {
                                lang !== "en" ? "Participantes" : "Participants"
                            }
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <button className="bg-white text-black font-bold px-4 h-12 mx-auto my-8">
                        {
                            lang !== "en" ? "Entre em contato" : "Contact us"}
                    </button>
                </div>
                <PhotosGroup />
            </div>
            <div data-aos="fade-up" className="max-w-[1400px] pt-20 mx-auto hidden lg:grid">
                <div className=" flex justify-between items-start gap-4 ">
                    <div className="w-[25%] mt-8">
                        <p className="text-white text-[18px]">
                            {
                                lang !== "en" ? "Curso de programação que revolucionará sua vida! Aprenda, codifique e trilhe uma brilhante carreira, com uma imensidão de conteúdos e oportunidades para você." : "Programming course that will revolutionize your life! Learn, code and pursue a brilliant career, with a wealth of content and opportunities for you."
                            }
                        </p>
                        <div className="flex my-8 items-end gap-2 text-white">
                            <AvatarGroup />
                            <div>
                                <p className="-mb-1">
                                    +10
                                </p>
                                <p>
                                    {
                                        lang !== "en" ? "Participantes" : "Participants"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 ml-16">
                        <p className="text-white font-bold text-5xl  my-8">
                            {lang !== "en" ? "Aprenda programação e inicie sua brilhante carreira como" : "Learn programming and start your brilliant career as"} <span className="text-secondary">Dev.</span>
                        </p>
                    </div>
                    <div className="w-1/4">
                        <Image src="/logo1.png" className="mx-auto my-8" alt="logo do inspa" width={100} height={100}></Image>
                    </div>
                </div>
                <PhotosGroup />
            </div>
        </div>
    );
}