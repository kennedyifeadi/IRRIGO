import { FaGlobe, FaLock, FaInfoCircle, FaStar, FaShareAlt, FaTh } from 'react-icons/fa';

export const SettingsPage = () => {
  return (
    <div className="max-w-md mx-auto p-6 font-sans">

      {/* Upgrade Section */}
      <div className="border border-gray-300 rounded-lg p-4 text-center mb-6">
        <h2 className="text-lg font-semibold">Upgrade to Premium</h2>
        <p className="text-sm text-gray-600 mt-2">
          Enjoy an Ad-Free Experience – Upgrade to Premium for Seamless Browsing
        </p>
        <button className="mt-4 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-500">
          Remove Ads Only
        </button>
      </div>

      {/* Settings List */}
      <ul className="border border-gray-300 rounded-lg divide-y divide-gray-300">
        <li className="flex items-center p-4">
          <FaGlobe className="mr-3 text-gray-500" />
          <span className="text-sm">Language</span>
        </li>
        <li className="flex items-center p-4">
          <FaLock className="mr-3 text-gray-500" />
          <span className="text-sm">Privacy Policy</span>
        </li>
        <li className="flex items-center p-4">
          <FaLock className="mr-3 text-gray-500" />
          <span className="text-sm">Terms of Services</span>
        </li>
        <li className="flex items-center p-4">
          <FaInfoCircle className="mr-3 text-gray-500" />
          <span className="text-sm">About App</span>
        </li>
        <li className="flex items-center p-4">
          <FaStar className="mr-3 text-gray-500" />
          <span className="text-sm">Rate Us</span>
        </li>
        <li className="flex items-center p-4">
          <FaShareAlt className="mr-3 text-gray-500" />
          <span className="text-sm">Share with Friends</span>
        </li>
        <li className="flex items-center p-4">
          <FaTh className="mr-3 text-gray-500" />
          <span className="text-sm">More Apps</span>
        </li>
      </ul>

      {/* Footer */}
      <div className="text-center mt-6">
        <button className="text-sm text-gray-500 hover:text-gray-700">
          Restore Purchase
        </button>
      </div>
    </div>
  );
};

