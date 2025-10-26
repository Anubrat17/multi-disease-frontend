// import React from "react";
// import { Activity, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
// import BrainImg from "../assets/brain.png";

// const Parkinson = ({ isLoading }) => {
//   const [parkinsonFormData, setParkinsonFormData] = React.useState({
//     MDVP_Fo: "",
//     MDVP_Fhi: "",
//     MDVP_Flo: "",
//     MDVP_Jitter: "",
//     MDVP_Shimmer: "",
//     NHR: "",
//     HNR: "",
//     RPDE: "",
//     DFA: "",
//     spread1: "",
//     spread2: "",
//     D2: "",
//     PPE: "",
//     age: "",
//     sex: "",
//     test_time: "",
//     other_feature1: "",
//     other_feature2: "",
//     other_feature3: "",
//     other_feature4: "",
//     other_feature5: "",
//     other_feature6: "",
//   });

//   const [predictionResult, setPredictionResult] = React.useState(null);

//   const visibleKeys = [
//     "MDVP_Fo",
//     "MDVP_Fhi",
//     "MDVP_Flo",
//     "MDVP_Jitter",
//     "MDVP_Shimmer",
//     "NHR",
//     "HNR",
//     "RPDE",
//     "DFA",
//     "spread1",
//     "spread2",
//     "D2",
//     "PPE",
//     "age",
//     "sex",
//     "test_time",
//     "other_feature1",
//     "other_feature2",
//     "other_feature3",
//     "other_feature4",
//     "other_feature5",
//     "other_feature6",
//   ];

//   const labelMap = {
//     MDVP_Fo: "Average Vocal Fundamental Frequency",
//     MDVP_Fhi: "Maximum Vocal Fundamental Frequency",
//     MDVP_Flo: "Minimum Vocal Fundamental Frequency",
//     MDVP_Jitter: "Jitter (%)",
//     MDVP_Shimmer: "Shimmer",
//     NHR: "Noise-to-Harmonics Ratio",
//     HNR: "Harmonics-to-Noise Ratio",
//     RPDE: "Recurrence Period Density Entropy",
//     DFA: "Detrended Fluctuation Analysis",
//     spread1: "Spread1",
//     spread2: "Spread2",
//     D2: "D2",
//     PPE: "Pitch Period Entropy",
//     age: "Patient Age",
//     sex: "Sex (1 = Male, 0 = Female)",
//     test_time: "Test Duration (seconds)",
//     other_feature1: "Neurological Feature 1",
//     other_feature2: "Neurological Feature 2",
//     other_feature3: "Neurological Feature 3",
//     other_feature4: "Neurological Feature 4",
//     other_feature5: "Neurological Feature 5",
//     other_feature6: "Neurological Feature 6",
//   };

//   const handleParkinsonFormChange = (key, value) => {
//     setParkinsonFormData((prev) => ({
//       ...prev,
//       [key]: value,
//     }));
//   };

//   const isParkinsonFormValid = () => {
//     return visibleKeys.every(
//       (key) => parkinsonFormData[key] !== "" && !isNaN(parkinsonFormData[key])
//     );
//   };

//   const predictParkinson = async () => {
//     if (!isParkinsonFormValid()) return;

//     try {
//       const dataToSend = Object.fromEntries(
//         Object.entries(parkinsonFormData).map(([k, v]) => [k, Number(v)])
//       );

//       const response = await fetch("http://127.0.0.1:5000/predict-parkinson", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(dataToSend),
//       });

//       const result = await response.json();

//       if (result.prediction === 1) {
//         setPredictionResult("Parkinson's Likely");
//       } else {
//         setPredictionResult("No Parkinson's Detected");
//       }
//     } catch (error) {
//       console.error("Error predicting Parkinson's:", error);
//       setPredictionResult("Prediction failed. Please try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
//             <img src={BrainImg} alt="Brain" className="w-6 h-6 mr-2" />
//             Voice & Neurological Signals
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
//             Parkinson's Disease Assessment
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             An advanced tool analyzing vocal biomarkers and neurological
//             features to assist in Parkinson's disease detection using
//             AI-powered prediction.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Left Section */}
//           <div className="space-y-8">
//             <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 shadow-xl relative overflow-hidden">
//               <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
//               <div className="text-center relative z-10">
//                 <div className="w-full flex justify-center mb-6">
//                   <img
//                     src={BrainImg}
//                     alt="Brain"
//                     className="w-28 h-28 object-contain"
//                   />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                   Why Parkinson's Detection Matters
//                 </h3>
//                 <p className="text-gray-600 mb-6">
//                   Early assessment of Parkinson's disease through vocal and
//                   medical features allows timely intervention and better
//                   management of the condition.
//                 </p>
//                 <div className="flex flex-wrap gap-3 justify-center">
//                   <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
//                     <Activity className="h-3 w-3 mr-1" />
//                     Vocal Patterns
//                   </div>
//                   <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
//                     <img src={BrainImg} alt="Brain" className="h-3 w-3 mr-1" />
//                     Neurological Signals
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 shadow-xl">
//               <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
//                 <img src={BrainImg} alt="Brain" className="h-6 w-6 mr-3" />
//                 Parkinson's Management Tips
//               </h4>
//               <div className="space-y-4">
//                 {[
//                   "Engage in regular physical activity and voice exercises",
//                   "Maintain a balanced diet rich in antioxidants",
//                   "Regularly consult neurologists for monitoring",
//                 ].map((tip, idx) => (
//                   <div
//                     key={idx}
//                     className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-300"
//                   >
//                     <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-1" />
//                     <p className="text-gray-700">{tip}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

          
//           <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
//             <h3 className="text-2xl font-bold text-gray-800 mb-6">
//               Patient Voice Analysis
//             </h3>

//             <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
//               {visibleKeys.map((key) => (
//                 <div key={key}>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     {labelMap[key]} *
//                   </label>
//                   <input
//                     type="number"
//                     step="any"
//                     value={parkinsonFormData[key]}
//                     onChange={(e) =>
//                       handleParkinsonFormChange(key, e.target.value)
//                     }
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     placeholder={`Enter ${labelMap[key]}`}
//                   />
//                 </div>
//               ))}

//               <div className="pt-4">
//                 <button
//                   onClick={predictParkinson}
//                   disabled={!isParkinsonFormValid() || isLoading}
//                   className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
//                     !isParkinsonFormValid() || isLoading
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
//                   }`}
//                 >
//                   {isLoading ? "Analyzing..." : "Predict Parkinson's Risk"}
//                 </button>
//               </div>

              
//               {predictionResult && (
//                 <div
//                   className={`mt-6 flex items-center justify-center gap-2 text-center font-semibold rounded-xl px-4 py-3
//                     ${
//                       predictionResult === "Parkinson's Likely"
//                         ? "text-red-700 bg-red-100 border border-red-300"
//                         : predictionResult === "No Parkinson's Detected"
//                         ? "text-green-700 bg-green-100 border border-green-300"
//                         : "text-yellow-700 bg-yellow-100 border border-yellow-300"
//                     }
//                   `}
//                 >
//                   {predictionResult === "Parkinson's Likely" && (
//                     <XCircle className="w-5 h-5" />
//                   )}
//                   {predictionResult === "No Parkinson's Detected" && (
//                     <CheckCircle className="w-5 h-5" />
//                   )}
//                   {predictionResult !== "Parkinson's Likely" &&
//                     predictionResult !== "No Parkinson's Detected" && (
//                       <AlertTriangle className="w-5 h-5" />
//                     )}
//                   <span>{predictionResult}</span>
//                 </div>
//               )}

//               <p className="text-xs text-gray-500 text-center mt-4">
//                 * All fields are required. This prediction is for informational
//                 purposes only and should not replace professional medical advice.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Parkinson;

import React from "react";
import { predictParkinson } from "../api";
import { Activity, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import BrainImg from "../assets/brain.png";

const Parkinson = () => {
  const [parkinsonFormData, setParkinsonFormData] = React.useState({
    MDVP_Fo: "",
    MDVP_Fhi: "",
    MDVP_Flo: "",
    MDVP_Jitter: "",
    MDVP_Shimmer: "",
    NHR: "",
    HNR: "",
    RPDE: "",
    DFA: "",
    spread1: "",
    spread2: "",
    D2: "",
    PPE: "",
    age: "",
    sex: "",
    test_time: "",
    other_feature1: "",
    other_feature2: "",
    other_feature3: "",
    other_feature4: "",
    other_feature5: "",
    other_feature6: "",
  });

  const [predictionResult, setPredictionResult] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const visibleKeys = Object.keys(parkinsonFormData);

  const labelMap = {
    MDVP_Fo: "Average Vocal Fundamental Frequency",
    MDVP_Fhi: "Maximum Vocal Fundamental Frequency",
    MDVP_Flo: "Minimum Vocal Fundamental Frequency",
    MDVP_Jitter: "Jitter (%)",
    MDVP_Shimmer: "Shimmer",
    NHR: "Noise-to-Harmonics Ratio",
    HNR: "Harmonics-to-Noise Ratio",
    RPDE: "Recurrence Period Density Entropy",
    DFA: "Detrended Fluctuation Analysis",
    spread1: "Spread1",
    spread2: "Spread2",
    D2: "D2",
    PPE: "Pitch Period Entropy",
    age: "Patient Age",
    sex: "Sex (1 = Male, 0 = Female)",
    test_time: "Test Duration (seconds)",
    other_feature1: "Neurological Feature 1",
    other_feature2: "Neurological Feature 2",
    other_feature3: "Neurological Feature 3",
    other_feature4: "Neurological Feature 4",
    other_feature5: "Neurological Feature 5",
    other_feature6: "Neurological Feature 6",
  };

  const handleParkinsonFormChange = (key, value) => {
    setParkinsonFormData((prev) => ({ ...prev, [key]: value }));
  };

  const isParkinsonFormValid = () =>
    visibleKeys.every((key) => parkinsonFormData[key] !== "" && !isNaN(parkinsonFormData[key]));

  const handlePredict = async () => {
    if (!isParkinsonFormValid()) return;

    setIsLoading(true);
    setPredictionResult(null);

    try {
      const numericData = Object.fromEntries(
        Object.entries(parkinsonFormData).map(([k, v]) => [k, Number(v)])
      );
      const result = await predictParkinson(numericData);

      setPredictionResult(result.prediction === 1 ? "Parkinson's Likely" : "No Parkinson's Detected");
    } catch (err) {
      console.error(err);
      setPredictionResult("Prediction failed. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <img src={BrainImg} alt="Brain" className="w-6 h-6 mr-2" />
            Voice & Neurological Signals
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Parkinson's Disease Assessment
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            AI-powered analysis of vocal biomarkers and neurological features.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Info Panel */}
          <div className="space-y-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Parkinson's Detection Matters</h3>
              <p className="text-gray-600">
                Early detection using vocal and neurological features helps timely intervention.
              </p>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100 max-h-[80vh] overflow-y-auto">
            {visibleKeys.map((key) => (
              <div key={key} className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">{labelMap[key]} *</label>
                <input
                  type="number"
                  step="any"
                  value={parkinsonFormData[key]}
                  onChange={(e) => handleParkinsonFormChange(key, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={`Enter ${labelMap[key]}`}
                />
              </div>
            ))}

            <button
              onClick={handlePredict}
              disabled={!isParkinsonFormValid() || isLoading}
              className={`w-full py-3 mt-4 rounded-lg font-semibold text-white shadow-lg transition-transform transform hover:scale-105 ${
                !isParkinsonFormValid() || isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600"
              }`}
            >
              {isLoading ? "Analyzing..." : "Predict Parkinson's Risk"}
            </button>

            {predictionResult && (
              <div className={`mt-6 p-3 rounded-xl font-semibold text-center ${
                predictionResult === "Parkinson's Likely"
                  ? "bg-red-100 text-red-700 border border-red-300"
                  : "bg-green-100 text-green-700 border border-green-300"
              }`}>
                {predictionResult}
              </div>
            )}

            <p className="text-xs text-gray-500 text-center mt-4">
              * All fields are required. For informational purposes only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parkinson;
