"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import React from "react"

export function EventsCaroussel() {

    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )
    return (
        <Carousel
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-[100%] md:w-[70%] lg:w-[90%] mx-auto -z-0   max-w-full">
            <CarouselContent className="w-full ">
                <CarouselItem className="w-full bg-cover md:h-96 bg-zinc-300 h-56 lg:h-72">...</CarouselItem>
                <CarouselItem  className="w-full bg-cover md:h-96 bg-zinc-300 h-56 lg:h-72">...</CarouselItem>
                <CarouselItem  className="w-full bg-cover md:h-96 bg-zinc-300 h-56 lg:h-72">...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden text-secondary md:flex bg-transparent border-none" />
            <CarouselNext className="hidden md:flex text-secondary bg-transparent border-none" />
        </Carousel>

    )
}