import type { LoggedUserType } from "@/types"
import { create } from "zustand"

interface Store {
  auth: boolean
  user: LoggedUserType | null
  login: (user: LoggedUserType) => void
  logout: () => void
}

const useStore = create<Store>()((set) => ({
  auth: false,
  user: null,
  login: (user) => set((state) => ({ auth: (state.auth = true), user })),
  logout: () => set((state) => ({ auth: (state.auth = false), user: null })),
}))

export default useStore
