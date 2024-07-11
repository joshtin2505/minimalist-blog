import NavBar from "../NavBar"

function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="px-16">{children}</main>
    </>
  )
}

export default NavLayout
