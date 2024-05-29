"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import Cookie from "js-cookie";
import { Select, SelectContent, SelectTrigger, SelectItem } from "@/components/ui/select";
import { TbWorld } from "react-icons/tb"
import { LangContext } from "../contexts/langContext";



export function Header() {
    const [bgColor, setBgColor] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const { lang, setLang } = useContext(LangContext)
    function handleScrollToggleTransparent() {
        if (window.scrollY > 0) {
            return setBgColor("bg-[#252525]")
        }
        return setBgColor("bg-transparent")
    }
    useEffect(() => {
        const lang = Cookie.get("lang")
        setLang(lang || "pt")
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            handleScrollToggleTransparent()
        })
    }, [])
    const onSelectLang = (value: string) => {
        setLang(value)
        Cookie.set("lang", value)
    }
    return (
        <div className={`w-full ${bgColor} duration-300 fixed z-50  text-white`}>
            <div className="h-16 lg:hidden flex justify-between items-center px-8">
                <Link href="/#">
                    <p className="text-xl font-bold">
                        INSPA <span className="text-secondary">
                             academy
                        </span>
                      
                    </p>
                </Link>
                <Sheet open={isOpen} onOpenChange={setIsOpen} >
                    <SheetTrigger>
                        <MdOutlineMenu className="text-white text-3xl" />
                    </SheetTrigger>
                    <SheetContent side={"left"} className="bg-[#252525] text-white">
                        <div className="flex flex-col gap-8 font-bold text-lg">
                            <div className="flex gap-2 items-center">
                                <Image src="/logo1.png" className="py-8" alt="logo do inspa" width={70} height={70} />
                                <p className="text-2xl font-bold">
                                    INSPA
                                </p>
                            </div>
                            <Select onValueChange={(value) => {
                                onSelectLang(value)
                            }}>
                                <SelectTrigger className=" border-none mb-14  bg-[#252525]">
                                    <TbWorld className="text-white" />
                                    {lang === "pt" ? "Português" : "English"}
                                </SelectTrigger>
                                <SelectContent className=" bg-[#252525] text-white p-2 w-full">
                                    <SelectItem value="pt">Português</SelectItem>
                                    <SelectItem value="en">English</SelectItem>
                                </SelectContent>
                            </Select>
                            <Link onClick={() => setIsOpen(false)} className="hover:opacity-80 duration-300" href="/#about">{lang !== "en" ? "Sobre" : "About"}</Link>
                            <Link onClick={() => setIsOpen(false)} className="hover:opacity-80 duration-300" href="/#instructors">{lang !== "en" ? "Nossos instrutores" : "Instructors"}</Link>
                            <Link onClick={() => setIsOpen(false)} className="hover:opacity-80 duration-300" href="/#partners">{lang !== "en" ? "Parceiros" : "Partners"}</Link>
                            <button className="bg-white w-56 text-black font-bold py-1">
                                {lang !== "en" ? "Contato" : "Contact"}
                            </button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="max-w-[1400px] mx-auto hidden lg:flex justify-between items-center h-20">
                <Link href="/#home">
                    <p className="text-2xl font-bold">
                        INSPA
                        <span className="text-secondary">
                            Academy
                        </span>
                    </p>
                </Link>
                <div className="flex items-center text-zinc-300 gap-4">
                    <Link className="hover:opacity-80 duration-300" href="/#about">
                        <p className="text-sm font-medium">
                            {lang !== "en" ? "Sobre" : "About"}
                        </p>
                    </Link>
                    <Link className="hover:opacity-80 duration-300" href="/#instructors">
                        <p className="text-sm font-medium">
                            {lang !== "en" ? "Nossos instrutores" : "Instructors"}
                        </p>
                    </Link>
                    <Link className="hover:opacity-80 duration-300" href="/#partners">
                        <p className="text-sm font-medium">
                            {lang !== "en" ? "Parceiros" : "Partners"}
                        </p>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <button className="bg-white text-black font-bold w-48 h-12 hover:bg-secondary duration-500">
                        {lang !== "en" ? "Entrar em contato" : "Contact us"}
                    </button>
                    <Select onValueChange={(value) => {
                        onSelectLang(value)
                    }}>
                        <SelectTrigger className=" border-none w-36 h-12 bg-transparent">
                            <TbWorld className="text-white" />
                            {lang === "pt" ? "Português" : "English"}
                        </SelectTrigger>
                        <SelectContent className=" bg-[#252525] text-white p-2 w-full">
                            <SelectItem value="pt">Português</SelectItem>
                            <SelectItem value="en">English</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )

}