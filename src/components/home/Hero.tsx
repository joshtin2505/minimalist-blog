import React from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import Image from "next/image"

function Hero() {
  return (
    <section className="heroContainer overflow-hidden z-10">
      <header className="grid col-span-5 gap-4">
        <h1 className="text-5xl ">
          Stay up to date with the latest news and trends in Information
          Technology!
        </h1>
        <p className="text-xl text-primary/60 font-light ">
          Explore practical tips, tutorials, and the latest trends to hone your
          web development skills.
        </p>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            className="bg-primary-foreground"
            type="email"
            placeholder="Email"
          />
          <Button type="submit">Suscribe</Button>
        </div>
      </header>
      <Image
        className="col-start-7 col-end-12 border border-primary rounded aspect-[3/2] w-[800px] md:block hidden layerShadow"
        src="/imgHero.jpg"
        alt="Hero Image"
        width={1000}
        height={1000}
      />
    </section>
  )
}

export default Hero
