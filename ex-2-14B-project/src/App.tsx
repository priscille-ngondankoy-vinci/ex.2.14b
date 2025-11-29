import { useEffect, useState } from 'react'

import './App.css'



const RandomDog = () => {
      const [imageUrl, setImageUrl] = useState<string | null>(null);

      const loadDog = async () => {
        try {
          const res = await fetch("https://dog.ceo/api/breeds/image/random");
          const data = await res.json();
          if (data && data.message) {
            setImageUrl(data.message);
          }
        } catch (err) {
          console.error("Failed to load dog image", err);
        }
      };

      useEffect(() => {
        loadDog(); // initial load
        const interval = setInterval(loadDog, 5000); // reload every 5s
        return () => clearInterval(interval);
      }, []);

      return (
        <div>
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Random dog"
              style={{ width: "300px", borderRadius: "8px" }}
            />
          )}
        </div>
      );
    };

    function App() {
      return (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h1>Random Dogs 🐶</h1>

          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <RandomDog />
            <RandomDog />
            <RandomDog />
          </div>
        </div>
      );
    }



export default App;
