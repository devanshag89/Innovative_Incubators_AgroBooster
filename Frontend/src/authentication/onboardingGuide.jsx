import React, { useState } from 'react';
import {
  ChevronRight, Map, Calendar, Beaker, Tractor, Bot,
  ArrowRight, CheckCircle, Leaf, Sun, Cloud, Droplets,
  ThermometerSun, Sprout, Wheat
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { TranslatedText } from '../languageTranslation/TranslatedText';

const OnboardingGuide = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const steps = [
    {
      title: <TranslatedText text="Smart Farming Assistant" />,
      icon: <Sprout className="w-12 h-12 text-emerald-500 animate-bounce" />,
      description: <TranslatedText text="Your digital farming companion that brings traditional farming wisdom together with modern technology." />,
      details: [
        <TranslatedText text="Simple farmer-friendly interface" />,
        <TranslatedText text="Local language support" />,
        <TranslatedText text="Voice-guided assistance" />
      ],
      bgColor: "bg-gradient-to-br from-emerald-100/80 to-emerald-200/80",
      accent: "emerald"
    },
    {
      title: <TranslatedText text="Local Field Conditions" />,
      icon: <ThermometerSun className="w-12 h-12 text-amber-500 animate-pulse" />,
      description: <TranslatedText text="Get precise weather and soil insights specific to your field location." />,
      details: [
        <TranslatedText text="Field-specific weather alerts" />,
        <TranslatedText text="Soil condition monitoring" />,
        <TranslatedText text="Local climate patterns" />
      ],
      bgColor: "bg-gradient-to-br from-amber-100/80 to-amber-200/80",
      accent: "amber"
    },
    {
      title: <TranslatedText text="Crop Management" />,
      icon: <Wheat className="w-12 h-12 text-yellow-600 animate-spin-slow" />,
      description: <TranslatedText text="Track your crops from sowing to harvest with expert guidance at every step." />,
      details: [
        <TranslatedText text="Crop health monitoring" />,
        <TranslatedText text="Growth stage tracking" />,
        <TranslatedText text="Harvest timing optimization" />
      ],
      bgColor: "bg-gradient-to-br from-yellow-100/80 to-yellow-200/80",
      accent: "yellow"
    },
    {
      title: <TranslatedText text="Seasonal Planning" />,
      icon: <Calendar className="w-12 h-12 text-lime-600" />,
      description: <TranslatedText text="Plan your farming activities according to seasons and market demands." />,
      details: [
        <TranslatedText text="Seasonal crop recommendations" />,
        <TranslatedText text="Market price predictions" />,
        <TranslatedText text="Planting schedules" />
      ],
      bgColor: "bg-gradient-to-br from-lime-100/80 to-lime-200/80",
      accent: "lime"
    },
    {
      title: <TranslatedText text="Equipment & Tools" />,
      icon: <Tractor className="w-12 h-12 text-stone-600 animate-bounce-slow" />,
      description: <TranslatedText text="Access modern farming equipment and tools when you need them." />,
      details: [
        <TranslatedText text="Local equipment rentals" />,
        <TranslatedText text="Tool sharing network" />,
        <TranslatedText text="Maintenance schedules" />
      ],
      bgColor: "bg-gradient-to-br from-stone-100/80 to-stone-200/80",
      accent: "stone"
    },
    {
      title: <TranslatedText text="Soil Care" />,
      icon: <Beaker className="w-12 h-12 text-orange-600" />,
      description: <TranslatedText text="Understand and improve your soil health for better yields." />,
      details: [
        <TranslatedText text="Soil testing services" />,
        <TranslatedText text="Fertilizer recommendations" />,
        <TranslatedText text="Organic farming tips" />
      ],
      bgColor: "bg-gradient-to-br from-orange-100/80 to-orange-200/80",
      accent: "orange"
    }
  ];

  const CropPattern = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
        {[...Array(16)].map((_, i) => (
          <React.Fragment key={i}>
            <Wheat
              className={`absolute w-16 h-16 ${i % 3 === 0 ? 'text-amber-800' :
                i % 3 === 1 ? 'text-yellow-800' :
                  'text-lime-800'
                } transform transition-all duration-1000 ease-in-out`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${i * 45}deg) ${i % 2 === 0 ? 'scale(1.2)' : 'scale(1)'}`,
                animation: `${i % 2 === 0 ? 'float 6s infinite' : 'sway 4s infinite'}`
              }}
            />
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f4f1de] p-6 relative overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes sway {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>

      <CropPattern />

      <div className="max-w-5xl mx-auto space-y-12 relative">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block relative mb-8 group">
            <div className="absolute inset-0 bg-amber-600 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-emerald-200 to-lime-300 rounded-full p-8 transform transition-transform duration-500 group-hover:scale-105">
              <Wheat className="w-20 h-20 text-amber-700 animate-bounce" />
            </div>
          </div>

          <h1 className="text-5xl font-bold text-stone-800 mb-6">
            <TranslatedText text="Welcome to Agro Booster" />
          </h1>

          <p className="text-xl text-stone-700 max-w-2xl mx-auto leading-relaxed">
            <TranslatedText text="Combining generations of farming wisdom with modern technology for sustainable agriculture." />
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg border border-emerald-200 hover:scale-105 transition-transform duration-300">
              <Sprout className="w-5 h-5 text-emerald-600" />
              <span className="text-stone-800 font-medium"><TranslatedText text="Farmer-First Approach" /></span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg border border-amber-200 hover:scale-105 transition-transform duration-300">
              <Sun className="w-5 h-5 text-amber-600" />
              <span className="text-stone-800 font-medium"><TranslatedText text="Weather-Smart" /></span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg border border-lime-200 hover:scale-105 transition-transform duration-300">
              <Leaf className="w-5 h-5 text-lime-600" />
              <span className="text-stone-800 font-medium"><TranslatedText text="Sustainable Methods" /></span>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              onMouseEnter={() => {
                setActiveStep(index);
                setIsHovering(true);
              }}
              onMouseLeave={() => setIsHovering(false)}
              className={`rounded-2xl transform transition-all duration-500 backdrop-blur-sm
                ${index === activeStep ? 'scale-100 opacity-100 shadow-2xl' : 'scale-95 opacity-90'}
                ${step.bgColor} border-2 border-stone-200/50 hover:scale-[1.02]`}
            >
              <div className="flex flex-row items-center gap-6 p-6 border-b border-stone-200/50">
                <div className="p-4 rounded-2xl bg-white/95 shadow-lg relative group">
                  <div className="absolute inset-0 bg-amber-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative">{step.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-stone-800">
                  {step.title}
                </h3>
              </div>
              <div className="pt-4 pb-6 px-6">
                <p className="text-lg text-stone-700 mb-6 leading-relaxed">{step.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {step.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-white/95 backdrop-blur p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-stone-200/50 hover:scale-105"
                    >
                      <CheckCircle className={`w-5 h-5 text-${step.accent}-600 flex-shrink-0`} />
                      <span className="text-stone-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-12 pb-16 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/farmer-Information" className="block w-full sm:w-auto">
              <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-700 to-lime-600 text-white px-8 py-4 rounded-full hover:from-emerald-600 hover:to-lime-500 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl w-full sm:w-auto">
                <span className="relative z-10"><TranslatedText text="Start Your Journey" /></span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-lime-400 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              </button>
            </Link>
            <Link to="/farmerdashboard" className="block w-full sm:w-auto">
              <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-amber-700 to-yellow-600 text-white px-8 py-4 rounded-full hover:from-amber-600 hover:to-yellow-500 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl w-full sm:w-auto">
                <span className="relative z-10"><TranslatedText text="Browse Equipment" /></span>
                <Tractor className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              </button>
            </Link>
          </div>
          <p className="text-sm text-stone-600"><TranslatedText text="Begin your sustainable farming journey today" /></p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingGuide;