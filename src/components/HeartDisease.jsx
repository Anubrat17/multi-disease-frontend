import React, { useState } from "react";
import { Shield, Activity, TrendingUp, CheckCircle } from "lucide-react";
import HeartImg from "../assets/heart.png";
import { predictHeart } from "./api";

const HeartDisease = () => {
  const [heartFormData, setHeartFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const handleHeartFormChange = (field, value) => {
    setHeartFormData((prev) => ({ ...prev, [field]: value }));
  };

  // ✅ FIXED: 0 is now treated as valid input
  const isHeartFormValid = () => {
    const requiredFields = [
      "age", "sex", "cp", "trestbps", "chol", "fbs", "restecg",
      "thalach", "exang", "oldpeak", "slope", "ca", "thal"
    ];
    return requiredFields.every(
      (field) => heartFormData[field] !== "" && heartFormData[field] !== undefined
    );
  };

  // const predictHeartDisease = async () => {
  //   setIsLoading(true);
  //   setPrediction(null);
  //   try {
  //     const response = await fetch("http://127.0.0.1:5000/predict-heart", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(heartFormData),
  //     });
  //     const result = await response.json();
  //     setPrediction(result.prediction);
  //   } catch (error) {
  //     console.error("Error predicting heart disease:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const predictHeartDisease = async () => {
  setIsLoading(true);
  setPrediction(null);
  try {
    const result = await predictHeart(heartFormData);
    setPrediction(result.prediction);
  } catch (error) {
    console.error("Error predicting heart disease:", error);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <img src={HeartImg} alt="Heart" className="h-5 w-5 mr-2 object-contain" />
            Cardiovascular Analysis
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Heart Disease Risk Assessment
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our advanced AI analyzes 13 critical clinical parameters to provide
            accurate heart disease risk prediction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-200/30 rounded-full blur-2xl"></div>
              <div className="text-center relative z-10">
                <div className="w-32 h-32 mx-auto relative mb-8 flex items-center justify-center">
                  <img src={HeartImg} alt="Heart" className="w-32 h-32 object-contain" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  AI-Powered Cardiac Analysis
                </h3>
                <p className="text-gray-600 mb-6">
                  Utilizing machine learning algorithms trained on thousands of
                  cardiac cases to provide precise risk assessment.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="inline-flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                    <Activity className="h-3 w-3 mr-1" />
                    Real-time Analysis
                  </div>
                  <div className="inline-flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    95% Accuracy
                  </div>
                  <div className="inline-flex items-center bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                    <Shield className="h-3 w-3 mr-1" />
                    HIPAA Compliant
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl">
              <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <img src={HeartImg} alt="Heart" className="h-6 w-6 mr-3 object-contain" />
                Heart Health Guidelines
              </h4>
              <div className="space-y-4">
                {[
                  "Engage in regular physical activity",
                  "Maintain a balanced diet rich in fruits and vegetables",
                  "Avoid smoking and limit alcohol consumption",
                  "Manage stress levels and ensure adequate sleep",
                ].map((tip, idx) => (
                  <div
                    key={idx}
                    className="flex items-start p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border-l-4 border-red-300"
                  >
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3 mt-1" />
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Patient Information
            </h3>

            <div className="space-y-6">
              {[
                "age", "sex", "cp", "trestbps", "chol", "fbs", "restecg",
                "thalach", "exang", "oldpeak", "slope", "ca", "thal"
              ].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.toUpperCase()} *
                  </label>
                  <input
                    type="number"
                    value={heartFormData[field] || ""}
                    onChange={(e) => handleHeartFormChange(field, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder={`Enter ${field}`}
                  />
                </div>
              ))}

              {/* Predict Button */}
              <div className="pt-4">
                <button
                  onClick={predictHeartDisease}
                  disabled={!isHeartFormValid() || isLoading}
                  className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    !isHeartFormValid() || isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white"
                  }`}
                >
                  {isLoading ? "Analyzing..." : "Predict Heart Disease Risk"}
                </button>
              </div>

              {/* ✅ Styled Prediction Result */}
              {prediction !== null && (
                <p
                  className={`mt-6 text-center font-semibold rounded-xl px-4 py-3 border transition-all duration-300 ${
                    prediction === 1
                      ? "text-red-700 bg-red-100 border-red-300"
                      : "text-green-700 bg-green-100 border-green-300"
                  }`}
                >
                  {prediction === 1
                    ? "⚠️ High Risk of Heart Disease Detected"
                    : "✅ Low Risk. No Heart Disease Detected"}
                </p>
              )}

              <p className="text-xs text-gray-500 text-center mt-4">
                * All fields are required. This prediction is for informational
                purposes only and should not replace professional medical advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartDisease;
