import { EventsCaroussel } from "@/components/events";
import Image from "next/image";

export function About() {
    return (
        <div id="about" className="w-full">
            <div className="w-full lg:max-w-[1400px] mx-auto lg:px-0 text-white px-8 md:mt-72 lg:mt-40 mt-[60vh]">
                <div className="lg:flex lg:justify-center lg:items-start">
                    <h2 className="text-3xl font-bold ">Sobre nós</h2>
                </div>
                <div className="lg:flex lg:flex-row-reverse lg:mt-20 lg:mb-10">
                    <p className="my-8 lg:w-[60%]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                    <Image src="/logo2.png" className="mx-auto my-8" alt="logo do inspa" width={150} height={150}></Image>
                </div>
                <div className="lg:flex lg:gap-8 ">
                    <div className="w-full h-96 p-4 bg-[#252525] mt-16 mb-8 lg:m-0">
                        <h2 className="text-3xl font-semibold">
                            Nossa missão
                        </h2>
                        <p className="mt-8">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </p>
                    </div>
                    <div className="w-full h-96 p-4 bg-secondary lg:my-0 my-8">
                        <h2 className="text-3xl font-semibold">Nossos valores</h2>
                        <p className="mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                </div>
                <div className="lg:hidden">
                    <h2 className="font-bold text-2xl mb-8">
                        Eventos que promovemos
                    </h2>
                    <div className="grid grid-cols-2 py-2 border-b-[0.5px] mb-8 gap-4 text-lg">
                        <p className="border-r-[0.5px]">
                            +10 parceiros
                        </p>
                        <p className="">
                            25 colaboradores
                        </p>
                    </div>
                    <EventsCaroussel />
                </div>

            </div>
            <div className="hidden text-white lg:flex my-16 border-b-[0.5px] justify-between h-[70vh]">
                <div className="w-[20%] border-r-[0.5px] flex flex-col justify-center gap-10 items-center">
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold">
                            +10
                        </h3>
                        <p className="text-zinc-600">parceiros</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold">
                            25
                        </h3>
                        <p className="text-zinc-600">Colaboradores</p>
                    </div>
                </div>
                <div className="w-[75%] flex flex-col pb-8 justify-between">
                    <h2 className="text-3xl font-bold mt-4">
                        Eventos que promovemos
                    </h2>
                    <EventsCaroussel />
                </div>
            </div>
        </div>
    )
}