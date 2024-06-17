import NavBar from "../NavBar"

function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}

export default NavLayout
