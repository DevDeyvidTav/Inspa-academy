import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";


export function Header() {

    return (
        <div className="w-full bg-transparent  text-white">
            <div className="h-16 lg:hidden flex justify-between items-center px-8">
                <Link href="/#">
                    <p className="text-xl font-bold">
                        INSPA
                        <span className="text-secondary">
                            Academy
                        </span>
                    </p>
                </Link>
                <MdOutlineMenu className="text-white text-3xl" />
            </div>
            <div className="max-w-[1400px] mx-auto hidden lg:flex justify-between items-center h-20">
                <Link href="/#">
                    <p className="text-2xl font-bold">
                        INSPA
                        <span className="text-secondary">
                            Academy
                        </span>
                    </p>
                </Link>
                <div className="flex items-center text-zinc-300 gap-4">
                    <Link href="/#about">
                        <p className="text-sm font-medium">
                            Sobre nós
                        </p>
                    </Link>
                    <Link href="/#about">
                        <p className="text-sm font-medium">
                            Nossos instrutores
                        </p>
                    </Link>
                    <Link href="/#about">
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