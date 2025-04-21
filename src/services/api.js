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

// Function to fetch selected posts data
export const fetchSelectedPostsData = async () => {
  try {
    const response = await api.get("/beranda-posts");

    // Check if the request was successful
    if (response.data.success) {
      // Transform the data to match the format expected by the SelectedPosts component
      const SelectedPostsData = response.data.data.map((item) => ({
        id: item.id,
        title: item.title,
        date: item.date,
        slug: item.slug,
        content: item.content,
        media: item.media,
      }));

      return SelectedPostsData;
    } else {
      throw new Error(
        response.data.message || "Failed to fetch selected posts data"
      );
    }
  } catch (error) {
    console.error("Error fetching selected posts data:", error);
    throw error;
  }
};

// Function to fetch user testimonial headline data
export const fetchUserTestimonialHeadlineData = async () => {
  try {
    const response = await api.get("/headline/beranda-testimonial");

    // Check if the request was successful
    if (response.data.success) {
      // Transform the data to match the format expected by the UserTestimonialHeadline component
      const UserTestimonialHeadlineData = {
        id: response.data.data.id,
        title: response.data.data.title,
        subtitle: response.data.data.subtitle,
      };

      return UserTestimonialHeadlineData;
    } else {
      throw new Error(
        response.data.message ||
          "Failed to fetch user testimonial headline data"
      );
    }
  } catch (error) {
    console.error("Error fetching user testimonial headline data:", error);
    throw error;
  }
};

// Function to fetch user testimonial section data
export const fetchUserTestimonialData = async () => {
  try {
    const response = await api.get("/testimonials/user");
    // Check if the request was successful
    if (response.data.success) {
      // Transform the data to match the format expected by the UserTestimonial component
      const UserTestimonialData = response.data.data.map((item) => ({
        id: item.id,
        name: item.name,
        city: item.city,
        testimonial: item.testimonial,
        date: item.created_at,
      }));

      return UserTestimonialData;
    } else {
      throw new Error(
        response.data.message || "Failed to fetch user testimonial data"
      );
    }
  } catch (error) {
    console.error("Error fetching user testimonial data:", error);
    throw error;
  }
};

// Function to submit a new testimonial
export const submitTestimonial = async (testimonialData) => {
  try {
    const response = await api.post("/testimonials", testimonialData);

    // Check if the request was successful
    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.message || "Failed to submit testimonial");
    }
  } catch (error) {
    console.error("Error submitting testimonial:", error);
    throw error;
  }
};

// Function to fetch sejarah section data
export const fetchSejarahData = async () => {
  try {
    const response = await api.get("/sections/sejarah");

    // Check if the request was successful
    if (response.data.success) {
      // Transform the data to match the format expected by the Sejarah component
      const SejarahData = {
        id: response.data.data[0].id,
        title: response.data.data[0].title,
        description: response.data.data[0].description,
        image: response.data.data[0].image_url,
      };

      return SejarahData;
    } else {
      throw new Error(response.data.message || "Failed to fetch sejarah data");
    }
  } catch (error) {
    console.error("Error fetching sejarah data:", error);
    throw error;
  }
};

// Function to fetch visi-misi section data
export const fetchVisiMisiData = async (name) => {
  try {
    const response = await api.get(`/visi-misi/${name}`);

    // Check if the request was successful
    if (response.data.success) {
      // Transform the data to match the format expected by the VisiMisi component
      let VisiMisiData;

      if (name === "visi") {
        VisiMisiData = {
          id: response.data.data.id,
          content: response.data.data.content,
        };
      } else {
        VisiMisiData = response.data.data.map((item) => ({
          id: item.id,
          content: item.content,
          orderNumber: item.order_number,
        }));
      }

      return VisiMisiData;
    } else {
      throw new Error(
        response.data.message || "Failed to fetch visi-misi data"
      );
    }
  } catch (error) {
    console.error("Error fetching visi-misi data:", error);
    throw error;
  }
};

// Function to fetch tim hero section data
export const fetchTimHeroData = async () => {
  try {
    const response = await api.get("/sections/tim-hero");

    // Check if the request was successful
    if (response.data.success) {
      // Transform the data to match the format expected by the TimHero component
      const TimHeroData = {
        id: response.data.data[0].id,
        title: response.data.data[0].title,
        description: response.data.data[0].description,
        image: response.data.data[0].image_url,
      };

      return TimHeroData;
    } else {
      throw new Error(response.data.message || "Failed to fetch tim hero data");
    }
  } catch (error) {
    console.error("Error fetching tim hero data:", error);
    throw error;
  }
};

// Function to fetch tim achievement headline data
export const fetchTimAchievementHeadlineData = async () => {
  try {
    const response = await api.get("/headline/tim-achievement");

    // Check if the request was successful
    if (response.data.success) {
      // Transform the data to match the format expected by the TimAchievementHeadline component
      const TimAchievementHeadlineData = {
        id: response.data.data.id,
        title: response.data.data.title,
        subtitle: response.data.data.subtitle,
      };

      return TimAchievementHeadlineData;
    } else {
      throw new Error(
        response.data.message || "Failed to fetch tim achievement headline data"
      );
    }
  } catch (error) {
    console.error("Error fetching tim achievement headline data:", error);
    throw error;
  }
};

// Function to fetch tim achievement section data
export const fetchTimAchievementData = async () => {
  try {
    const response = await api.get("/achievements");

    // Check if the request was successful
    if (response.data.success) {
      // Transform the data to match the format expected by the TimAchievement component
      const TimAchievementData = response.data.data.map((item) => ({
        id: item.id,
        icon: item.icon,
        count: item.count,
        label: item.label,
        color: item.color,
        iconColor: item.iconColor,
      }));

      return TimAchievementData;
    } else {
      throw new Error(
        response.data.message || "Failed to fetch tim achievement data"
      );
    }
  } catch (error) {
    console.error("Error fetching tim achievement data:", error);
    throw error;
  }
};
