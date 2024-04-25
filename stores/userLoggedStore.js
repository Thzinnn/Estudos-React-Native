import { create } from 'zustand'

 export const useUserLoggedStore = create((set) => ({
    nome: '',
    email: '',
    avatar: '',
    token: '',
    isLogged: false,

  login: (nome, email, avatar, token) => set(() => ({ nome, email, avatar, token, isLogged: true })),
  loggout: () => set(() => ({
    nome: '',
    email: '',
    avatar: '',
    token: '',
    isLogged: false,
    })),


}))