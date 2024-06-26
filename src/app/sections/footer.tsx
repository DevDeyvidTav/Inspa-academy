"use client"

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import { LangContext } from "../contexts/langContext";

export function Footer() {
    const { lang, setLang } = useContext(LangContext);
    const router = useRouter();
    return (
        <div className="bg-[#252525] py-8">
            <div className="w-full lg:max-w-[1400px] mx-auto lg:px-0 text-white px-8">
                <div className="flex justify-between items-center border-b-[0.5px] pb-8">
                    <h2 className="text-2xl font-bold">
                        INSPA <span className="text-secondary">
                            academy
                        </span>
                    </h2>
                    <button onClick={() => router.push("#home")} className="w-12 h-12 bg-secondary hover:opacity-80 duration-300 flex justify-center items-center">
                        <FaArrowUp className="text-black" />
                    </button>
                </div>
                <div className="mt-8 lg:mt-16">
                    <p className="text-xl font-bold ">
                        {lang !== "en" ? "Fique por dentro de todas as" : "Stay up to date with"} <span className="text-secondary">
                           {lang !== "en" ? "novidades" : "news"}
                        </span>
                    </p>
                    <div className="flex gap-2 items-center mt-4 pb-8 lg:pb-16 border-b-[0.5px]">
                        <input placeholder={lang !== "en" ? "Digite seu email" : "Enter your email"} className="bg-[#0D0D0D] text-white px-4 h-12" />
                        <button className="bg-white text-black font-semibold px-4 h-12">
                            {lang !== "en" ? "Enviar" : "Send"}
                        </button>
                    </div>
                    <div className="flex justify-between mt-8">
                        <p>
                        copyright © 2024. {lang !== "en" ? "Todos os direitos reservados" : "All rights reserved"}
                        </p>

                        <div className="flex gap-4">
                            <button>
                                <IoLogoYoutube />   
                            </button>
                            <button>
                                <IoLogoInstagram />
                            </button>
                            <button>
                                <IoLogoFacebook />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}