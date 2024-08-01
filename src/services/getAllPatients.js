export const getAllPatients = async () => {
  try {
    const credentials = btoa(
      `${import.meta.env.VITE_USERNAME}:${import.meta.env.VITE_PASSWORD}`
    );

    const data = fetch(`${import.meta.env.VITE_BASE_URL}`, {
      method: "GET",
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    });
    return data;
  } catch (error) {
    if (error) {
      if (error) {
      }
    }
  }
};
