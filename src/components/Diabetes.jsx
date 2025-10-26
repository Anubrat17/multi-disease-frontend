import React, { useState } from "react";
import { Activity, CheckCircle } from "lucide-react";
import DiabetesImg from "../assets/diabetes.png";

const Diabetes = () => {
  const [diabetesFormData, setDiabetesFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);

  // Handle input changes
  const handleDiabetesFormChange = (key, value) => {
    setDiabetesFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Validate all fields are filled
  const isDiabetesFormValid = () => {
    return Object.values(diabetesFormData).every(
      (val) => val !== "" && !isNaN(val)
    );
  };

  // Predict Diabetes
  const predictDiabetes = async () => {
    if (!isDiabetesFormValid()) return;

    setIsLoading(true);
    setPredictionResult(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict-diabetes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(diabetesFormData),
      });

      const data = await response.json();

      if (data?.prediction === 1) {
        setPredictionResult("⚠️ High Risk of Diabetes Detected");
      } else if (data?.prediction === 0) {
        setPredictionResult("✅ Low Risk. No Diabetes Detected");
      } else {
        setPredictionResult("❌ Unexpected response from server");
      }
    } catch (error) {
      console.error("Prediction error:", error);
      setPredictionResult("❌ Error while predicting. Try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <img src={DiabetesImg} alt="Diabetes" className="h-6 w-6 mr-2" />
            Glucose & Insulin Analysis
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Diabetes Risk Assessment
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Using clinical parameters (glucose, BMI, insulin, blood pressure,
            and more) to estimate diabetes risk with AI-powered prediction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - Info */}
          <div className="space-y-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl text-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-200/30 rounded-full blur-2xl"></div>
              <div className="w-full flex justify-center mb-6 relative z-10">
                <img
                  src={DiabetesImg}
                  alt="Diabetes"
                  className="w-28 h-28 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">
                Why Diabetes Prediction Matters
              </h3>
              <p className="text-gray-600 mb-6 relative z-10">
                Early prediction of diabetes helps in prevention and timely
                intervention. Our AI tool leverages medical data to assess the
                probability of diabetes.
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 justify-center relative z-10">
                <div className="inline-flex items-center bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                  <Activity className="h-3 w-3 mr-1" />
                  Glucose Monitoring
                </div>
                <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                  <img src={DiabetesImg} alt="Diabetes" className="h-3 w-3 mr-1" />
                  Insulin Levels
                </div>
              </div>
            </div>

            {/* Health Tips */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl">
              <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <img src={DiabetesImg} alt="Diabetes" className="h-6 w-6 mr-3" />
                Diabetes Prevention Tips
              </h4>
              <div className="space-y-4">
                {[
                  "Maintain a healthy weight and active lifestyle",
                  "Eat balanced meals with whole grains, fruits, and vegetables",
                  "Regularly monitor blood sugar levels",
                ].map((tip, idx) => (
                  <div
                    key={idx}
                    className="flex items-start p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl border-l-4 border-teal-300"
                  >
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3 mt-1" />
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Patient Information
            </h3>

            <div className="space-y-6">
              {[
                { key: "Pregnancies", label: "Pregnancies" },
                { key: "Glucose", label: "Glucose Level" },
                { key: "BloodPressure", label: "Blood Pressure" },
                { key: "SkinThickness", label: "Skin Thickness" },
                { key: "Insulin", label: "Insulin" },
                { key: "BMI", label: "BMI" },
                {
                  key: "DiabetesPedigreeFunction",
                  label: "Diabetes Pedigree Function",
                },
                { key: "Age", label: "Age" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label} *
                  </label>
                  <input
                    type="number"
                    value={diabetesFormData[field.key]}
                    onChange={(e) =>
                      handleDiabetesFormChange(field.key, e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder={`Enter ${field.label}`}
                  />
                </div>
              ))}

              {/* Predict Button */}
              <div className="pt-4">
                <button
                  onClick={predictDiabetes}
                  disabled={!isDiabetesFormValid() || isLoading}
                  className={`w-full font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    !isDiabetesFormValid() || isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white"
                  }`}
                >
                  {isLoading ? "Analyzing..." : "Predict Diabetes Risk"}
                </button>
              </div>

              {/* Result */}
              {predictionResult && (
                <p className="mt-6 text-center font-semibold text-teal-700 bg-teal-100 border border-teal-300 rounded-xl px-4 py-3">
                  {predictionResult}
                </p>
              )}

              <p className="text-xs text-gray-500 text-center mt-4">
                * All fields are required. This prediction is for informational
                purposes only and should not replace professional medical
                advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diabetes;
