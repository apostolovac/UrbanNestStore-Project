import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the structure of the AuthState interface
interface AuthState {
  user: { userName: string; email: string; password: string} | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;

  // Actions for authentication
  register: (userName: string, email: string, password: string) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}

// Create the Zustand store for authentication
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      loading: false,
      error: null,

      // Register user
      register: (userName, email, password) => {
        set({ loading: true });
        setTimeout(() => {
          set({
            user: { userName, email, password },
            isLoggedIn: true,
            loading: false,
            error: null,
          });
        }, 1000);
      },

      // Login user
      login: (email, password) => {
        set({ loading: true });
        setTimeout(() => {
          if (email === 'test@example.com' && password === '1234') {
            set({
              user: { userName: 'TestUser', email, password },
              isLoggedIn: true,
              loading: false,
              error: null,
            });
          } else {
            set({ error: 'Invalid credentials', loading: false });
          }
        }, 1000);
      },

      // Logout user
      logout: () => {
        set({ user: null, isLoggedIn: false });
        localStorage.removeItem("auth-storage");
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
