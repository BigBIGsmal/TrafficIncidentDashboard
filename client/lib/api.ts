export const fetchTrafficData = async () => {
    const response = await fetch("http://127.0.0.1:5000/api/data");
    return response.json();
  };
  