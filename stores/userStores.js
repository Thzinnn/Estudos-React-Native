import { create } from 'zustand'

 export const useUserStore = create((set) => ({
  users: [],
  setUsers: (newUsers) => set(() => ({ users: newUsers })),
  addUser: (newUser) => set((state) => ({ users: [...state.users, newUser]})),
  removeUser: (id) => set((state) => {
    const usersFiltrado = state.users.filter((user => user.id !== id))
    return {users: usersFiltrado}
  })


}))