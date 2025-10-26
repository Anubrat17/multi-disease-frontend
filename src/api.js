// const API_URL = "https://multi-disease-backend.onrender.com";
// export const predictHeart = async (data) => {
//   const res = await fetch(`${API_URL}/predict-heart`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   return res.json();
// };

// export const predictParkinson = async (data) => {
//   const res = await fetch(`${API_URL}/predict-parkinson`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   return res.json();
// };

// export const predictDiabetes = async (data) => {
//   const res = await fetch(`${API_URL}/predict-diabetes`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   return res.json();
// };
// Replace this with your actual Render backend URL
const API_BASE_URL = "https://multi-disease-backend.onrender.com";

export const predictHeart = async (data) => {
  const response = await fetch(`${API_BASE_URL}/predict-heart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return await response.json();
};

export const predictParkinson = async (data) => {
  const response = await fetch(`${API_BASE_URL}/predict-parkinson`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return await response.json();
};

export const predictDiabetes = async (data) => {
  const response = await fetch(`${API_BASE_URL}/predict-diabetes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return await response.json();
};