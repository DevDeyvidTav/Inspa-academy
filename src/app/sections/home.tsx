import Image from "next/image";
import { AvatarGroup } from "../components/avatar-group";
import { Header } from "../components/header";
import { PhotosGroup } from "../components/photos-group";

export function Home() {
    return (
        <div id="home" className="bg-home lg:bg-home-pc bg-cover bg-no-repeat z-40 w-full h-screen">
            <Header />
            <div className="px-8 py-8 lg:hidden">
                <Image src="/logo1.png" className="mx-auto py-8" alt="logo do inspa" width={100} height={100}></Image>
                <p className="text-white font-bold text-2xl  my-8">
                    Aprenda programação e inicie sua brilhante carreira como <span className="text-secondary">Dev.</span>
                </p>
                <p className="text-white">
                    Curso de programação que revolucionará sua vida! Aprenda, codifique e trilhe uma brilhante carreira, com uma imensidão de conteúdos e oportunidades para você.
                </p>
                <div className="flex my-8 items-end gap-2 text-white">
                    <AvatarGroup />
                    <div>
                        <p className="-mb-1">
                            +10
                        </p>
                        <p>
                            Participantes
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <button className="bg-white text-black font-bold px-4 h-12 mx-auto my-8">
                        Entrar em contato
                    </button>
                </div>
                <PhotosGroup />
            </div>
            <div className="max-w-[1400px] pt-20 mx-auto hidden lg:grid">
                <div className=" flex justify-between items-start gap-4 ">
                    <div className="w-[25%] mt-8">
                        <p className="text-white text-[18px]">
                            Curso de programação que revolucionará sua vida! Aprenda, codifique e trilhe uma brilhante carreira, com uma imensidão de conteúdos e oportunidades para você.
                        </p>
                        <div className="flex my-8 items-end gap-2 text-white">
                            <AvatarGroup />
                            <div>
                                <p className="-mb-1">
                                    +10
                                </p>
                                <p>
                                    Participantes
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 ml-16">
                        <p className="text-white font-bold text-5xl  my-8">
                            Aprenda programação e inicie sua brilhante carreira como <span className="text-secondary">Dev.</span>
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