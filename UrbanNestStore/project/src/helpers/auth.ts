const API_BASE_URL: string = import.meta.env.VITE_API_AUTH_URL_PRODUCTION;


// Function to handle user registration
export const register = async (userName: string, email: string, password: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userName, email, password }),
    });

    if (!response.ok) {
      throw new Error("Registration failed!");
    }

    return (await response.json());
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

// Function to handle user Signin
export const signin = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Signin Failed!");
    }

    return (await response.json());
  } catch (error) {
    console.error("Signin error:", error);
    throw error;
  }
};

// Function to handle user Signout
export const signOut = (): void => {
  localStorage.removeItem("token");
  window.location.href = "/";
};