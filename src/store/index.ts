import { create } from "zustand";

interface authState {
  user: string | null;
  login: (id: string) => void;
  logout: () => void;
  isLoginFormOpened: boolean;
  openLoginForm: () => void;
  closeLoginForm: () => void;
}

const useAuthStore = create<authState>()((set) => ({
  user: null,
  login: (id: string) => set(() => ({ user: id })),
  logout: () => set(() => ({ user: null })),
  isLoginFormOpened: false,
  openLoginForm: () => set(() => ({ isLoginFormOpened: true })),
  closeLoginForm: () => set(() => ({ isLoginFormOpened: false })),
}));

export { useAuthStore };
