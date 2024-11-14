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
  user: User | null; // Stores the currently logged-in user
  users: User[]; // Stores the list of all registered users
  isLoggedIn: boolean; // To track if a user is logged in
  loading: boolean;
  error: string | null;
  contactFormData: ContactForm | null; //  Stores form data for the contact form
  subscriptionEmail: string | null; // Stores the email entered for newsletter subscription

  // Cart related state and methods
  items: CartItem[]; // To store items added to the cart
  addItem: (product: Product, quantity: number, size: number) => void;
  removeItem: (id: number, size: number) => void;
  updateQuantity: (id: number, size: number, newQuantity: number) => void;
  clearCart: () => void;

  // Wishlist related state and methods
  wishlist: Product[]; // Add wishlist to the state
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;

  // Methods for user authentication and contact form handling
  register: (userName: string, email: string, password: string) => void;
  Signin: (email: string, password: string) => void;
  Signout: () => void;
  resetPassword: (newPassword: string) => void;
  saveContactForm: (name: string, email: string, message: string) => void;
  saveSubscriptionEmail: (email: string) => void;
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

      // Cart related methods
      items: [],
      // Add items to the shopping cart
      addItem: (product, quantity, size) => {
        set((state) => {
          // check if the product exists in the cart
          const existingItemIndex = state.items.findIndex(
            (item) => item.product.id === product.id && item.size === size
          );
          //findIndex returns -1 if it doesn’t find a matching item in the array
          if (existingItemIndex !== -1) {
            // Copies the existing items in the cart to a new array
            const updatedItems = [...state.items];
            // Increase the quantity of the existing cart item
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
          // Updating the items array 
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

      // Wishlist related methods
      wishlist: [], // Initialize an empty wishlist
      addToWishlist: (product) => {
        set((state) => {
          if (!state.wishlist.some((item) => item.id === product.id)) {
            return { wishlist: [...state.wishlist, product] };
          }
          return state; // Product already in wishlist, no change
        });
      },

      removeFromWishlist: (productId) => {
        set((state) => ({
          wishlist: state.wishlist.filter((product) => product.id !== productId),
        }));
      },

      // User authentication methods
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
        get().clearCart(); // Clear cart on sign out
        set({
          user: null,
          users: [],
          isLoggedIn: false,
          contactFormData: null,
          subscriptionEmail: null,
          error: null,
          wishlist: []
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

      resetPassword: (newPassword) => {
        const user = get().user;
        if (user) {
          set((state) => ({
            users: state.users.map((user) =>
              user.email === user.email ? { ...user, password: newPassword } : user
            ),
            user: { ...user, password: newPassword },
          }));
          console.log("Password updated successfully");
        } else {
          console.log("No user is signed in");
        }
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);