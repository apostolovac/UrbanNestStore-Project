import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
  userName: string;
  email: string;
  password: string;
}

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

interface AuthState {
  user: User | null;
  users: User[];
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
  contactFormData: ContactForm | null;
  subscriptionEmail: string | null;

  // Actions for authentication
  register: (userName: string, email: string, password: string) => void;
  Signin: (email: string, password: string) => void;
  Signout: () => void;
  saveContactForm: (name: string, email: string, message: string) => void;
  saveSubscriptionEmail: (email: string) => void;
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
      contactFormData: null,
      subscriptionEmail: null,

      register: (userName, email, password) => {
        set({ loading: true });
        setTimeout(() => {
          set((state) => ({
            users: [...state.users, { userName, email, password }],
            user: { userName, email, password },
            isLoggedIn: true,
            loading: false,
            error: null,
          }));
        }, 1000);
      },

      Signin: (email, password) => {
        set({ loading: true });
        setTimeout(() => {
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

      Signout: () => {
        set({
          user: null,
          users: [],
          isLoggedIn: false,
          contactFormData: null,
          subscriptionEmail: null,
          error: null,
        });
        localStorage.removeItem("user-storage");
      },

      saveContactForm: (name, email, message) => {
        set({ contactFormData: { name, email, message } });
        console.log('Contact form submitted:', { name, email, message });
      },
      saveSubscriptionEmail: (email) => {
        set({ subscriptionEmail: email });
        console.log('Subscribed email:', email);
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);