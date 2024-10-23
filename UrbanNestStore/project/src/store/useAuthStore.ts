import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  userName: string;
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  users: User[]; // Array to store registered users
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;

  // Actions for authentication
  register: (userName: string, email: string, password: string) => void;
  Signin: (email: string, password: string) => void;
  Signout: () => void;
}

// Create the Zustand store for authentication
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      users: [],
      isLoggedIn: false,
      loading: false,
      error: null,

      // Register user
      register: (userName, email, password) => {
        set({ loading: true });
        setTimeout(() => {
          // Save the user data in the store
          set((state) => ({
            users: [...state.users, { userName, email, password }], 
            user: { userName, email, password },
            isLoggedIn: true,
            loading: false,
            error: null,
          }));
        }, 1000);
      },

      // Login user
      Signin: (email, password) => {
        set({ loading: true });
        setTimeout(() => {
          // Check if the email and password match any registered user
          const user = get().users.find(
            (user) => user.email === email && user.password === password
          );
          if (user) {
            set({
              user,
              isLoggedIn: true,
              loading: false,
              error: null,
            });
          } else {
            set({ error: "Invalid credentials", loading: false });
          }
        }, 1000);
      },

      // Logout user
      Signout: () => {
        set({ user: null, isLoggedIn: false });
        localStorage.removeItem("auth-storage");
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
