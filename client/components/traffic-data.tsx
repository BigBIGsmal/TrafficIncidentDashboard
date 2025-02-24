import { useEffect, useState } from "react";

const apiUrl = "http://127.0.0.1:5000/api/data";

const TrafficDataComponent = () => {
  const [trafficData, setTrafficData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTrafficData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching data: " + err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Traffic Data</h2>
      <div className="bg-gray-100 p-2 rounded-md">
        <pre className="whitespace-pre-wrap">{JSON.stringify(trafficData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default TrafficDataComponent;
