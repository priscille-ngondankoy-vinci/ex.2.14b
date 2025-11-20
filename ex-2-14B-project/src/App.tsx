import { useState } from 'react'

import './App.css'



const RandomDog = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const loadDog = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    setImageUrl(data.message);
  };
  

  return (
    <div>
      <button onClick={loadDog}>Charger un chien</button>
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
  const [refreshToken, setRefreshToken] = useState(0);
  

  const refreshDogs = () => {
    setRefreshToken((t) => t + 1);
  };
  

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Random Dogs 🐶</h1>

      <button onClick={refreshDogs} style={{ marginBottom: "20px" }}>
        Rafraîchir les photos
      </button>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <RandomDog  />
        <RandomDog  />
        <RandomDog  />
      </div>
    </div>
  );
}


export default App;
