"use client"

export function Instructors() {
    return (
        <div id="#instructors" className="pb-8">
            <div className="w-full lg:max-w-[1400px] mx-auto lg:px-0 text-white px-8 ">
                <div className="lg:flex lg:justify-center">
                    <h2 className="text-2xl py-8 font-bold">
                        Alguns de nossos <span className="text-secondary">
                            instrutores
                        </span>
                    </h2>
                </div>
                <div className="grid lg:grid-cols-3 lg:gap-28 gap-4">
                    <div onClick={()=>{
                        window.open("https://www.linkedin.com/in/joaonetoti/")
                    }} className="w-full h-40 grid items-center justify-center cursor-pointer hover:shadow duration-300 px-8 grid-cols-2 bg-[#252525]">
                        <div style={{backgroundImage: "url('/joao.jpeg')"}} className="bg-cover bg-no-repeat rounded-full w-20 h-20">

                        </div>
                        <div>
                            <h3>
                                João Neto
                            </h3>
                            <p>
                                Tech Lead - NLC
                            </p>
                        </div>
                    </div>
                    <div 
                    onClick={()=>{
                        window.open("https://www.linkedin.com/in/davydfelipe/")
                    }} 
                    className="w-full h-40 grid items-center justify-center cursor-pointer hover:shadow duration-300 px-8 grid-cols-2 bg-secondary">
                        <div style={{backgroundImage: "url('/davyd.jpeg')"}} className="bg-cover bg-no-repeat rounded-full  w-20 h-20">

                        </div>
                        <div>
                            <h3>
                                Davyd Maker
                            </h3>
                            <p>
                                Software engeneer sênior - Nomad
                            </p>
                        </div>
                    </div>
                    <div
                    onClick={()=>{
                        window.open("https://www.linkedin.com/in/deyvison-tavares/")
                    }} 
                    className="w-full h-40 grid items-center justify-center cursor-pointer hover:shadow duration-300 px-8 grid-cols-2 bg-[#252525]">
                        <div style={{backgroundImage: "url('/deyvison.jpeg')"}} className="bg-cover bg-no-repeat rounded-full w-20 h-20">

                        </div>
                        <div>
                            <h3>
                                Deyvison Tavares
                            </h3>
                            <p>
                                Sofware engeneer pleno
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}