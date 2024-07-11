import Hero from "@/sections/home/Hero"
import NavLayout from "@/components/layouts/NavLayout"
import Categories from "@/sections/home/Categories"

export default function Home() {
  return (
    <NavLayout>
      <Hero />
      <Categories />
    </NavLayout>
  )
}
