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

// Function to fetch featured products headline data
export const fetchFeaturedProductsHeadlineData = async () => {
  try {
    const response = await api.get("/headline/beranda-product");
    // Check if the request was successful
    if (response.data.success) {
      // Transform the data to match the format expected by the FeaturedProductsHeadline component
      const FeaturedProductsHeadlineData = {
        id: response.data.data.id,
        title: response.data.data.title,
        subtitle: response.data.data.subtitle,
      };

      return FeaturedProductsHeadlineData;
    } else {
      throw new Error(
        response.data.message ||
          "Failed to fetch featured products headline data"
      );
    }
  } catch (error) {
    console.error("Error fetching featured products headline data:", error);
    throw error;
  }
};

// Function to fetch featured products section data
export const fetchFeaturedProductsData = async () => {
  try {
    const response = await api.get("/sections/beranda-product");

    // Check if the request was successful
    if (response.data.success) {
      // Transform the data to match the format expected by the FeaturedProducts component
      const FeaturedProductsData = response.data.data.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        image: item.image_url,
      }));

      return FeaturedProductsData;
    } else {
      throw new Error(
        response.data.message || "Failed to fetch featured products data"
      );
    }
  } catch (error) {
    console.error("Error fetching featured products data:", error);
    throw error;
  }
};
