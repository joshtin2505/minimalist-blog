import React from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import Image from "next/image"
import { FaNewspaper, FaStar } from "react-icons/fa6"

function Hero() {
  return (
    <section className="heroContainer  z-10">
      <header className="grid col-start-1 col-end-6 gap-4">
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
        <footer className="flex items-center">
          <div className="flex text-primary/50 items-center font-light pr-[15px] border-r border-primary/50">
            <FaStar className="text-primary/70 mr-2" />
            <span className="text-primary mr-2 grid place-items-center pt-0.5 font-normal">
              1,456+
            </span>
            readers
          </div>
          <div className="pl-4 flex text-primary/80 items-center">
            <FaNewspaper className="text-primary/70 mr-2" />
            Join the Newsletter now!
          </div>
        </footer>
      </header>
      <figure className="col-start-8 col-end-12 md:grid hidden place-items-center h-full">
        <Image
          className=" border border-primary rounded aspect-[3/2] w-[800px]  layerShadow"
          src="/imgHero.jpg"
          alt="Hero Image"
          width={1000}
          height={1000}
        />
      </figure>
    </section>
  )
}

export default Hero
