import { auth } from "@/auth"
import Logout from "@/components/Logout"

export default async function Page() {
  const session = await auth()

  if (!session) {
    return <div>Not authenticated</div>
  }

  return (
    <div className="container">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Logout />
    </div>
  )
}
