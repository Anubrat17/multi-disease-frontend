// import React, { useState } from 'react';
// import { Heart, Activity, Droplet, Home as HomeIcon } from 'lucide-react';

// // Import components
// import Home from './components/Home.jsx';
// import HeartDisease from './components/HeartDisease.jsx';
// import Parkinson from './components/Parkinson.jsx';
// import Diabetes from './components/Diabetes.jsx';

// export default function App() {
//   const [activeSection, setActiveSection] = useState('home');
//   const [showPrediction, setShowPrediction] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [prediction, setPrediction] = useState(null);

//   // Heart form data
//   const [heartFormData, setHeartFormData] = useState({
//     age: '',
//     sex: '',
//     cp: '',
//     trestbps: '',
//     chol: '',
//     fbs: '',
//     restecg: '',
//     thalach: '',
//     exang: '',
//     oldpeak: '',
//     slope: '',
//     ca: '',
//     thal: '',
//   });

//   // Parkinson form data
//   const [parkinsonFormData, setParkinsonFormData] = useState({
//     MDVPFo: '',
//     MDVPFhi: '',
//     MDVPFlo: '',
//     MDVPJitter: '',
//     MDVPShimmer: '',
//     NHR: '',
//     HNR: '',
//     RPDE: '',
//     DFA: '',
//     spread1: '',
//     spread2: '',
//     D2: '',
//     PPE: '',
//   });

//   // Diabetes form data
//   const [diabetesFormData, setDiabetesFormData] = useState({
//     Pregnancies: '',
//     Glucose: '',
//     BloodPressure: '',
//     SkinThickness: '',
//     Insulin: '',
//     BMI: '',
//     DiabetesPedigreeFunction: '',
//     Age: '',
//   });

//   // Navigation items
//   const navItems = [
//     { id: 'home', label: 'Home', icon: HomeIcon },
//     { id: 'heart', label: 'Heart', icon: Heart },
//     { id: 'parkinson', label: 'Parkinson', icon: Activity },
//     { id: 'diabetes', label: 'Diabetes', icon: Droplet },
//   ];

//   // ========== Heart Handlers ==========
//   const handleHeartFormChange = (field, value) => {
//     setHeartFormData((prev) => ({ ...prev, [field]: value }));
//   };
//   const isHeartFormValid = () =>
//     Object.values(heartFormData).every((v) => v !== '');
//   const predictHeartDisease = () => {
//     if (!isHeartFormValid()) return;
//     setIsLoading(true);
//     setTimeout(() => {
//       const riskScore = Math.random();
//       let risk, percentage, recommendations;
//       if (riskScore > 0.7) {
//         risk = 'High';
//         percentage = 75 + Math.floor(Math.random() * 25);
//         recommendations = [
//           'Consult a cardiologist immediately',
//           'Consider lifestyle modifications',
//         ];
//       } else if (riskScore > 0.4) {
//         risk = 'Moderate';
//         percentage = 40 + Math.floor(Math.random() * 35);
//         recommendations = ['Exercise regularly', 'Monitor blood pressure'];
//       } else {
//         risk = 'Low';
//         percentage = 10 + Math.floor(Math.random() * 30);
//         recommendations = ['Maintain healthy lifestyle', 'Routine checkups'];
//       }
//       setPrediction({ risk, percentage, recommendations });
//       setShowPrediction(true);
//       setActiveSection('home');
//       setIsLoading(false);
//     }, 2000);
//   };

//   // ========== Parkinson Handlers ==========
//   const handleParkinsonFormChange = (field, value) => {
//     setParkinsonFormData((prev) => ({ ...prev, [field]: value }));
//   };
//   const isParkinsonFormValid = () =>
//     Object.values(parkinsonFormData).every((v) => v !== '');
//   const predictParkinson = () => {
//     if (!isParkinsonFormValid()) return;
//     setIsLoading(true);
//     setTimeout(() => {
//       const prob = Math.random();
//       let risk = prob > 0.5 ? 'Positive' : 'Negative';
//       let percentage =
//         prob > 0.5
//           ? 60 + Math.floor(Math.random() * 40)
//           : 5 + Math.floor(Math.random() * 40);
//       let recommendations =
//         risk === 'Positive'
//           ? ['Consult a neurologist', 'Speech therapy may help']
//           : ['Maintain healthy lifestyle', 'No immediate concern'];
//       setPrediction({ risk, percentage, recommendations });
//       setShowPrediction(true);
//       setActiveSection('home');
//       setIsLoading(false);
//     }, 2000);
//   };

//   // ========== Diabetes Handlers ==========
//   const handleDiabetesFormChange = (field, value) => {
//     setDiabetesFormData((prev) => ({ ...prev, [field]: value }));
//   };
//   const isDiabetesFormValid = () =>
//     Object.values(diabetesFormData).every((v) => v !== '');
//   const predictDiabetes = () => {
//     if (!isDiabetesFormValid()) return;
//     setIsLoading(true);
//     setTimeout(() => {
//       const prob = Math.random();
//       let risk = prob > 0.5 ? 'High Risk' : 'Low Risk';
//       let percentage =
//         prob > 0.5
//           ? 60 + Math.floor(Math.random() * 40)
//           : 5 + Math.floor(Math.random() * 40);
//       let recommendations =
//         risk === 'High Risk'
//           ? ['Consult endocrinologist', 'Monitor glucose levels']
//           : ['Maintain healthy diet', 'Regular exercise'];
//       setPrediction({ risk, percentage, recommendations });
//       setShowPrediction(true);
//       setActiveSection('home');
//       setIsLoading(false);
//     }, 2000);
//   };

//   // Render content
//   const renderContent = () => {
//     switch (activeSection) {
//       case 'home':
//         return (
//           <Home
//             showPrediction={showPrediction}
//             prediction={prediction}
//             setShowPrediction={setShowPrediction}
//             setActiveSection={setActiveSection}
//           />
//         );
//       case 'heart':
//         return (
//           <HeartDisease
//             heartFormData={heartFormData}
//             handleHeartFormChange={handleHeartFormChange}
//             predictHeartDisease={predictHeartDisease}
//             isLoading={isLoading}
//             isHeartFormValid={isHeartFormValid}
//           />
//         );
//       case 'parkinson':
//         return (
//           <Parkinson
//             parkinsonFormData={parkinsonFormData}
//             handleParkinsonFormChange={handleParkinsonFormChange}
//             predictParkinson={predictParkinson}
//             isLoading={isLoading}
//             isParkinsonFormValid={isParkinsonFormValid}
//           />
//         );
//       case 'diabetes':
//         return (
//           <Diabetes
//             diabetesFormData={diabetesFormData}
//             handleDiabetesFormChange={handleDiabetesFormChange}
//             predictDiabetes={predictDiabetes}
//             isLoading={isLoading}
//             isDiabetesFormValid={isDiabetesFormValid}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
//       {/* Header */}
//       <header className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-white/20 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 py-6">
//           <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent text-center">
//             AI Medical Prediction Platform
//           </h1>
//         </div>
//       </header>

//       {/* Nav */}
//       <nav className="bg-white/70 backdrop-blur-sm shadow-lg border-b border-white/20 sticky top-20 z-40">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-center space-x-2 md:space-x-8">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => setActiveSection(item.id)}
//                   className={`flex items-center px-4 md:px-6 py-4 text-sm font-semibold transition-all duration-300 border-b-3 transform hover:scale-105 ${
//                     activeSection === item.id
//                       ? 'border-blue-500 text-blue-600 bg-blue-50/50 rounded-t-lg shadow-lg'
//                       : 'border-transparent text-gray-600 hover:text-blue-600 hover:bg-white/50 rounded-t-lg'
//                   }`}
//                 >
//                   <Icon className="h-5 w-5 mr-2" />
//                   <span className="hidden md:inline">{item.label}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </nav>

//       {/* Main */}
//       <main>{renderContent()}</main>

//       {/* Footer */}
//       <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-16">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <p className="text-gray-300">
//             © 2024 AI Medical Prediction Platform. This tool is for educational
//             purposes only.
//           </p>
//           <p className="text-gray-400 text-sm mt-2">
//             Always consult with qualified healthcare professionals for medical
//             advice.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Heart, Activity, Droplet, Home as HomeIcon } from 'lucide-react';

// Import components
import Home from './components/Home.jsx';
import HeartDisease from './components/HeartDisease.jsx';
import Parkinson from './components/Parkinson.jsx';
import Diabetes from './components/Diabetes.jsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showPrediction, setShowPrediction] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);

  // 🔥 Scroll to top whenever section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowPrediction(false);  // reset prediction when switching pages
    setPrediction(null);
  }, [activeSection]);

  // Heart form data
  const [heartFormData, setHeartFormData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: '',
  });

  // Parkinson form data
  const [parkinsonFormData, setParkinsonFormData] = useState({
    MDVPFo: '',
    MDVPFhi: '',
    MDVPFlo: '',
    MDVPJitter: '',
    MDVPShimmer: '',
    NHR: '',
    HNR: '',
    RPDE: '',
    DFA: '',
    spread1: '',
    spread2: '',
    D2: '',
    PPE: '',
  });

  // Diabetes form data
  const [diabetesFormData, setDiabetesFormData] = useState({
    Pregnancies: '',
    Glucose: '',
    BloodPressure: '',
    SkinThickness: '',
    Insulin: '',
    BMI: '',
    DiabetesPedigreeFunction: '',
    Age: '',
  });

  // Navigation items
  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'heart', label: 'Heart', icon: Heart },
    { id: 'parkinson', label: 'Parkinson', icon: Activity },
    { id: 'diabetes', label: 'Diabetes', icon: Droplet },
  ];

  // ========== Heart Handlers ==========
  const handleHeartFormChange = (field, value) => {
    setHeartFormData((prev) => ({ ...prev, [field]: value }));
  };
  const isHeartFormValid = () =>
    Object.values(heartFormData).every((v) => v !== '');
  const predictHeartDisease = () => {
    if (!isHeartFormValid()) return;
    setIsLoading(true);
    setTimeout(() => {
      const riskScore = Math.random();
      let risk, percentage, recommendations;
      if (riskScore > 0.7) {
        risk = 'High';
        percentage = 75 + Math.floor(Math.random() * 25);
        recommendations = [
          'Consult a cardiologist immediately',
          'Consider lifestyle modifications',
        ];
      } else if (riskScore > 0.4) {
        risk = 'Moderate';
        percentage = 40 + Math.floor(Math.random() * 35);
        recommendations = ['Exercise regularly', 'Monitor blood pressure'];
      } else {
        risk = 'Low';
        percentage = 10 + Math.floor(Math.random() * 30);
        recommendations = ['Maintain healthy lifestyle', 'Routine checkups'];
      }
      setPrediction({ risk, percentage, recommendations });
      setShowPrediction(true);
      setActiveSection('home');
      setIsLoading(false);
    }, 2000);
  };

  // ========== Parkinson Handlers ==========
  const handleParkinsonFormChange = (field, value) => {
    setParkinsonFormData((prev) => ({ ...prev, [field]: value }));
  };
  const isParkinsonFormValid = () =>
    Object.values(parkinsonFormData).every((v) => v !== '');
  const predictParkinson = () => {
    if (!isParkinsonFormValid()) return;
    setIsLoading(true);
    setTimeout(() => {
      const prob = Math.random();
      let risk = prob > 0.5 ? 'Positive' : 'Negative';
      let percentage =
        prob > 0.5
          ? 60 + Math.floor(Math.random() * 40)
          : 5 + Math.floor(Math.random() * 40);
      let recommendations =
        risk === 'Positive'
          ? ['Consult a neurologist', 'Speech therapy may help']
          : ['Maintain healthy lifestyle', 'No immediate concern'];
      setPrediction({ risk, percentage, recommendations });
      setShowPrediction(true);
      setActiveSection('home');
      setIsLoading(false);
    }, 2000);
  };

  // ========== Diabetes Handlers ==========
  const handleDiabetesFormChange = (field, value) => {
    setDiabetesFormData((prev) => ({ ...prev, [field]: value }));
  };
  const isDiabetesFormValid = () =>
    Object.values(diabetesFormData).every((v) => v !== '');
  const predictDiabetes = () => {
    if (!isDiabetesFormValid()) return;
    setIsLoading(true);
    setTimeout(() => {
      const prob = Math.random();
      let risk = prob > 0.5 ? 'High Risk' : 'Low Risk';
      let percentage =
        prob > 0.5
          ? 60 + Math.floor(Math.random() * 40)
          : 5 + Math.floor(Math.random() * 40);
      let recommendations =
        risk === 'High Risk'
          ? ['Consult endocrinologist', 'Monitor glucose levels']
          : ['Maintain healthy diet', 'Regular exercise'];
      setPrediction({ risk, percentage, recommendations });
      setShowPrediction(true);
      setActiveSection('home');
      setIsLoading(false);
    }, 2000);
  };

  // Render content
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <Home
            showPrediction={showPrediction}
            prediction={prediction}
            setShowPrediction={setShowPrediction}
            setActiveSection={setActiveSection}
          />
        );
      case 'heart':
        return (
          <HeartDisease
            heartFormData={heartFormData}
            handleHeartFormChange={handleHeartFormChange}
            predictHeartDisease={predictHeartDisease}
            isLoading={isLoading}
            isHeartFormValid={isHeartFormValid}
          />
        );
      case 'parkinson':
        return (
          <Parkinson
            parkinsonFormData={parkinsonFormData}
            handleParkinsonFormChange={handleParkinsonFormChange}
            predictParkinson={predictParkinson}
            isLoading={isLoading}
            isParkinsonFormValid={isParkinsonFormValid}
          />
        );
      case 'diabetes':
        return (
          <Diabetes
            diabetesFormData={diabetesFormData}
            handleDiabetesFormChange={handleDiabetesFormChange}
            predictDiabetes={predictDiabetes}
            isLoading={isLoading}
            isDiabetesFormValid={isDiabetesFormValid}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent text-center">
            AI Medical Prediction Platform
          </h1>
        </div>
      </header>

      {/* Nav */}
      <nav className="bg-white/70 backdrop-blur-sm shadow-lg border-b border-white/20 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-2 md:space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center px-4 md:px-6 py-4 text-sm font-semibold transition-all duration-300 border-b-3 transform hover:scale-105 ${
                    activeSection === item.id
                      ? 'border-blue-500 text-blue-600 bg-blue-50/50 rounded-t-lg shadow-lg'
                      : 'border-transparent text-gray-600 hover:text-blue-600 hover:bg-white/50 rounded-t-lg'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main */}
      <main>{renderContent()}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2024 AI Medical Prediction Platform. This tool is for educational
            purposes only.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Always consult with qualified healthcare professionals for medical
            advice.
          </p>
        </div>
      </footer>
    </div>
  );
}

