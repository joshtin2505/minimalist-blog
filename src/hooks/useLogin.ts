import { useActionState } from "react"
import { authenticate } from "@/lib/actions"

function useLogin() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  )

  return { errorMessage, formAction, isPending }
}

export default useLogin
