import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to fetch hero section data
export const fetchHeroData = async () => {
  try {
    const response = await api.get("/sections/beranda-hero");

    // Check if the request was successful
    if (response.data.success) {
      // Transform the data to match the format expected by the Hero component
      const heroData = response.data.data.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        image: item.image_url,
        // Add any other fields needed by your component
      }));

      return heroData;
    } else {
      throw new Error(response.data.message || "Failed to fetch hero data");
    }
  } catch (error) {
    console.error("Error fetching hero data:", error);
    throw error;
  }
};

// Function to fetch about section data
export const fetchAboutData = async () => {
  try {
    const response = await api.get("/sections/beranda-about");

    // Check if the request was successful
    if (response.data.success) {
      // Transform the data to match the format expected by the About component
      const aboutData = response.data.data.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        image: item.image_url,
        content: item.content,
      }));

      return aboutData;
    } else {
      throw new Error(response.data.message || "Failed to fetch about data");
    }
  } catch (error) {
    console.error("Error fetching about data:", error);
    throw error;
  }
};
