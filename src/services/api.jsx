const BASE_URL = "https://reqres.in/api";

export const getUsers = async (page) => {
  try {
    const response = await fetch(`${BASE_URL}/users?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return { data: [], total_pages: 1 };
  }
};

export const getUserById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    const data = await response.json();
    return data.data; // Karena API reqres mengembalikan user di dalam `data`
  } catch (error) {
    console.error("Error fetching user detail:", error);
    return null;
  }
};
