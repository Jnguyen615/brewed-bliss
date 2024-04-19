export const getTeas = async () => {

  try {
    const response = await fetch(
      "https://boonakitea.cyclic.app/api/all"
    );

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
   console.log('Network error: Please check your internet connection');
    
    throw error;
  }
};

