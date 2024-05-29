"use client"

import { useContext, useEffect } from "react";
import { PartnerContainer } from "../components/partner-container";
import { LangContext } from "../contexts/langContext";
import Aos from "aos"
import 'aos/dist/aos.css'

export function Partners() {
    const {lang, setLang} = useContext(LangContext)

    useEffect(() => {
        Aos.init({
            duration: 400,
            easing: "ease-out"
        })
    }, [])
    return (
        <div id="partners" className="pb-8">
            <div data-aos="fade-up" className="w-full lg:max-w-[1400px] mx-auto lg:px-0 text-white px-8">
                <h2 className="text-2xl py-8 font-bold">
                    {lang !== "en" ? "Nossos" : "Our"} <span className="text-secondary">{lang !== "en" ? "parceiros" : "partners"}</span>
                </h2>
                <div className="grid lg:grid-cols-3 gap-4">
                    <PartnerContainer company="Marques consult" local="Limoeiro-PE" imageUrl="/marques.png" link="https://marquesconsult.com.br/" />
                </div>
            </div>
        </div>
    )
}