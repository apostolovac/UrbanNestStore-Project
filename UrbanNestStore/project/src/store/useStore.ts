import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "../types/Product";


interface User {
  userName: string;
  email: string;
  password: string;
}

interface CartItem {
  product: Product;
  quantity: number;
  size: number;
}

interface State {
  user: User | null;
  users: User[];
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
  contactFormData: ContactForm | null;
  subscriptionEmail: string | null;


  register: (userName: string, email: string, password: string) => void;
  Signin: (email: string, password: string) => void;
  Signout: () => void;
  saveContactForm: (name: string, email: string, message: string) => void;
  saveSubscriptionEmail: (email: string) => void;


  items: CartItem[];
  addItem: (product: Product, quantity: number, size: number) => void;
  removeItem: (id: number, size: number) => void;
  updateQuantity: (id: number, size: number, newQuantity: number) => void;
  clearCart: () => void;
}

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export const useStore = create<State>()(
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
        get().clearCart(); 
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

      items: [],
      addItem: (product, quantity, size) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (item) => item.product.id === product.id && item.size === size
          );

          if (existingItemIndex !== -1) {
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex].quantity += quantity;
            return { items: updatedItems };
          } else {
            return {
              items: [...state.items, { product, quantity, size }],
            };
          }
        });
      },

      removeItem: (id, size) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.product.id === id && item.size === size)
          ),
        }));
      },

      updateQuantity: (id, size, newQuantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === id && item.size === size
              ? { ...item, quantity: newQuantity }
              : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
