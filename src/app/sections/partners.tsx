import { PartnerContainer } from "../components/partner-container";

export function Partners() {
    return (
        <div className="pb-8">
            <div className="w-full lg:max-w-[1400px] mx-auto lg:px-0 text-white px-8">
                <h2 className="text-2xl py-8 font-bold">
                    Nossos <span className="text-secondary">parceiros</span>
                </h2>
                <div className="grid lg:grid-cols-3 gap-4">
                    <PartnerContainer company="Marques consult" local="Limoeiro-PE" imageUrl="/marques.png" link="https://marquesconsult.com.br/" />
                </div>
            </div>
        </div>
    )
}