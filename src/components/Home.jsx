import React from "react";
import {
  AlertCircle,
  CheckCircle,
  Shield,
  TrendingUp,
  Users,
  Award,
  Clock,
  Brain as BrainIcon, 
} from "lucide-react";

// ✅ Import images
import HeartImg from "../assets/heart.png";
import BrainImg from "../assets/brain.png";
import DiabetesImg from "../assets/diabetes.png";
import StethoscopeImg from "../assets/stethoscope.png";

const Home = ({ showPrediction, prediction, setShowPrediction, setActiveSection }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div
            className="absolute top-32 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-10 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <div className="relative inline-block">
              {/* ✅ Stethoscope Image */}
              <img
                src={StethoscopeImg}
                alt="Stethoscope"
                className="h-32 w-32 mx-auto mb-6 drop-shadow-lg"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-ping"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
            AI Medical Prediction
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Harness the power of artificial intelligence to predict and analyze
            medical conditions with unprecedented accuracy. Our advanced machine
            learning algorithms provide insights that help healthcare
            professionals make informed decisions.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">10K+</div>
              <div className="text-sm text-gray-600">Patients Analyzed</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">95%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">3</div>
              <div className="text-sm text-gray-600">Disease Models</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">&lt;2min</div>
              <div className="text-sm text-gray-600">Analysis Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Disease Cards */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Choose Your Analysis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Heart Disease Card */}
          <div
            className="group relative bg-gradient-to-br from-red-50 to-pink-100 p-8 rounded-3xl border border-red-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden"
            onClick={() => setActiveSection("heart")}
          >
            <img
              src={HeartImg}
              alt="Heart"
              className="h-24 w-24 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Cardiovascular Risk
            </h3>
            <p className="text-gray-600 mb-6">
              Advanced AI analysis of 13 clinical parameters to assess heart
              disease probability and cardiovascular health risks.
            </p>
            <span className="text-red-600 font-semibold group-hover:text-red-700 transition-colors">
              Analyze Now →
            </span>
          </div>

          {/* Parkinson Card */}
          <div
            className="group relative bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden"
            onClick={() => setActiveSection("parkinson")}
          >
            <img
              src={BrainImg}
              alt="Brain"
              className="h-24 w-24 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Neurological Assessment
            </h3>
            <p className="text-gray-600 mb-6">
              Early detection and risk assessment for Parkinson's disease using
              vocal pattern analysis and motor symptoms.
            </p>
            <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
              Analyze Now →
            </span>
          </div>

          {/* Diabetes Card */}
          <div
            className="group relative bg-gradient-to-br from-emerald-50 to-green-100 p-8 rounded-3xl border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden"
            onClick={() => setActiveSection("diabetes")}
          >
            <img
              src={DiabetesImg}
              alt="Diabetes"
              className="h-24 w-24 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Metabolic Analysis
            </h3>
            <p className="text-gray-600 mb-6">
              Comprehensive diabetes risk assessment analyzing glucose levels,
              BMI, and other metabolic indicators.
            </p>
            <span className="text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
              Analyze Now →
            </span>
          </div>
        </div>
      </div>

      {/* Prediction Results */}
      {showPrediction && prediction && (
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <BrainIcon className="h-4 w-4 mr-2" />
                AI Analysis Complete
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Medical Prediction Results
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
