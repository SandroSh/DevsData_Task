export const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error Fetching Data ${response.status}`);
  }

  const data = await response.json();
  
  return data;
};
