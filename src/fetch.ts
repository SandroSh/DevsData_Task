export const fetchData = async (urls: string[]) => {
  try {
    const response = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );
    const data = response;
    return data;
  } catch (error) {
    console.error("Data did not fetched");
  }
};
