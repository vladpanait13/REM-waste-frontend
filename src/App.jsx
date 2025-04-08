import React, { useState } from "react";
import {
  Truck,
  Clipboard,
  Calendar,
  CreditCard,
  MapPin,
  Trash2,
  ChevronRight,
} from "lucide-react";

const skipData = [
  {
    id: 17933,
    size: 4,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 277.95,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-03T13:51:46.897146",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17934,
    size: 6,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 305.15,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-03T13:51:46.897146",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17935,
    size: 8,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 374.85,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-03T13:51:46.897146",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17936,
    size: 10,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 399.5,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-03T13:51:46.897146",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17937,
    size: 12,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 438.6,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-03T13:51:46.897146",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17938,
    size: 14,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 470.05,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-03T13:51:46.897146",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17939,
    size: 16,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 496.4,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-03T13:51:46.897146",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 15124,
    size: 20,
    hire_period_days: 14,
    transport_cost: 248,
    per_tonne_cost: 248,
    price_before_vat: null,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2025-04-03T13:51:40.344435",
    updated_at: "2025-04-03T13:51:40.344435",
    allowed_on_road: false,
    allows_heavy_waste: true,
  },
  {
    id: 15125,
    size: 40,
    hire_period_days: 14,
    transport_cost: 248,
    per_tonne_cost: 248,
    price_before_vat: null,
    vat: 20,
    postcode: "NR32",
    area: null,
    forbidden: false,
    created_at: "2025-04-03T13:51:40.344435",
    updated_at: "2025-04-03T13:51:40.344435",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
];

// Calculate total price with VAT
const calculateTotalPrice = (priceBeforeVat, vatPercentage) => {
  const vatAmount = (priceBeforeVat * vatPercentage) / 100;
  return priceBeforeVat + vatAmount;
};

const ProgressBar = ({ currentStep }) => {
  const steps = [
    { icon: <MapPin />, label: "Postcode", completed: currentStep >= 1 },
    { icon: <Trash2 />, label: "Waste Type", completed: currentStep >= 2 },
    {
      icon: <Truck />,
      label: "Select Skip",
      completed: currentStep >= 3,
      active: currentStep === 3,
    },
    { icon: <Clipboard />, label: "Permit Check", completed: currentStep >= 4 },
    { icon: <Calendar />, label: "Choose Date", completed: currentStep >= 5 },
    { icon: <CreditCard />, label: "Payment", completed: currentStep >= 6 },
  ];

  return (
    <div className="w-full px-4 py-6">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center relative w-full"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center z-10 
              ${
                step.active
                  ? "bg-green-600 text-white"
                  : step.completed
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {step.icon}
            </div>
            <p
              className={`mt-2 text-xs sm:text-sm font-medium ${
                step.completed || step.active
                  ? "text-green-600"
                  : "text-gray-500"
              }`}
            >
              {step.label}
            </p>
            {index < steps.length - 1 && (
              <div
                className={`absolute top-5 left-1/2 w-full h-1 
                ${step.completed ? "bg-green-500" : "bg-gray-200"}`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const SkipCard = ({ skip, onSelect }) => {
  const totalPrice = calculateTotalPrice(skip.price_before_vat, skip.vat);
  const weeklyPrice = (totalPrice / 2).toFixed(2);
  const isRoadRestricted = !skip.allowed_on_road;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <div className="bg-gray-200 aspect-video">
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-green-700 to-green-900">
            <Truck size={64} className="text-white" />
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-green-600 text-white rounded-full px-3 py-1 font-bold">
          {skip.size} Yards
        </div>
        {isRoadRestricted && (
          <div className="absolute bottom-3 right-3 bg-amber-500 text-white rounded-lg px-2 py-1 text-xs flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Private Property Only
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">
          {skip.size} Yard Skip
        </h3>
        <p className="text-gray-600">{skip.hire_period_days} day hire period</p>
        <div className="mt-4">
          <p className="text-2xl font-bold text-green-600">£{weeklyPrice}</p>
          <p className="text-sm text-gray-500">per week</p>
        </div>
        <button
          onClick={() => onSelect(skip)}
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center transition-colors duration-300"
        >
          Select This Skip <ChevronRight className="ml-2" size={18} />
        </button>
      </div>
    </div>
  );
};

const selectSkipApp = () => {
  const [selectedSkip, setSelectedSkip] = useState(null);

  const handleSelectSkip = (skip) => {
    setSelectedSkip(skip);
    console.log("Selected skip:", skip);
    // In a real app, we would navigate to the next step
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-700 text-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center">
            <Truck className="mr-2" />
            REM Waste
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li className="hover:text-green-200">Home</li>
              <li className="hover:text-green-200">Services</li>
              <li className="hover:text-green-200">Pricing</li>
              <li className="hover:text-green-200">Contact</li>
            </ul>
          </nav>
          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="container mx-auto">
        <ProgressBar currentStep={3} />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Choose Your Skip Size
          </h2>
          <p className="text-gray-600 mt-2">
            Select the skip size that best suits your needs
          </p>
        </div>

        {/* Skip Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skipData.map((skip) => (
            <SkipCard key={skip.id} skip={skip} onSelect={handleSelectSkip} />
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-stone-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-amber-900 mb-4">
            Skip Size Guide
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-stone-800 mb-2">4-6 Yard Skips</h4>
              <p className="text-stone-700">
                Perfect for small home renovations, garden clearance, and minor
                household waste. These skips can fit on most residential roads.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-stone-800 mb-2">8 Yard Skips</h4>
              <p className="text-stone-700">
                Ideal for medium-sized projects, kitchen renovations, or larger
                garden clearances. Still suitable for most residential areas.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-stone-800 mb-2">
                10-14 Yard Skips
              </h4>
              <p className="text-stone-700">
                Best for major renovations, construction waste, and large
                cleanouts. Note that these larger skips may have placement
                restrictions.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-stone-800 mb-2">
                Private Property Note
              </h4>
              <p className="text-stone-700">
                Skips marked "Private Property Only" cannot be placed on public
                roads and require sufficient space on your property.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Truck className="mr-2" />
                REM Waste
              </h3>
              <p className="text-gray-400">
                Professional waste management and skip hire services.
                Environmentally responsible waste disposal for residential and
                commercial customers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li className="hover:text-green-300 cursor-pointer">
                  Services
                </li>
                <li className="hover:text-green-300 cursor-pointer">
                  Skip Sizes
                </li>
                <li className="hover:text-green-300 cursor-pointer">
                  Waste Types
                </li>
                <li className="hover:text-green-300 cursor-pointer">FAQ</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>207 Regent St.</li>
                <li>Third Floor</li>
                <li>London England W1B 3HH</li>
                <li>UNITED KINGDOM</li>
                <li>info@remwaste.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© 2025 REM Waste Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default selectSkipApp;
