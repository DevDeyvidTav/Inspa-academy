"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";


export function Header() {
    const [bgColor, setBgColor] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    function handleScrollToggleTransparent() {
        if (window.scrollY > 0) {
            return setBgColor("bg-[#252525]")
        }
        return setBgColor("bg-transparent")
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            handleScrollToggleTransparent()
        })
    }, [])

    return (
        <div className={`w-full ${bgColor} duration-300 fixed z-50  text-white`}>
            <div className="h-16 lg:hidden flex justify-between items-center px-8">
                <Link href="/#">
                    <p className="text-xl font-bold">
                        INSPA
                        <span className="text-secondary">
                            Academy
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
                            <Link onClick={() => setIsOpen(false)} className="hover:opacity-80 duration-300" href="/#about">Sobre</Link>
                            <Link onClick={() => setIsOpen(false)} className="hover:opacity-80 duration-300" href="/#instructors">Nossos instrutores</Link>
                            <Link onClick={() => setIsOpen(false)} className="hover:opacity-80 duration-300" href="/#partners">Parceiros</Link>
                            <button className="bg-white w-56 text-black font-bold py-1">
                                Entrar em contato
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
                            Sobre nós
                        </p>
                    </Link>
                    <Link className="hover:opacity-80 duration-300" href="/#instructors">
                        <p className="text-sm font-medium">
                            Nossos instrutores
                        </p>
                    </Link>
                    <Link className="hover:opacity-80 duration-300" href="/#partners">
                        <p className="text-sm font-medium">
                            Parceiros
                        </p>
                    </Link>
                </div>
                <button className="bg-white text-black font-bold px-4 h-12 hover:bg-secondary duration-500">
                    Entrar em contato
                </button>
            </div>
        </div>
    )

}