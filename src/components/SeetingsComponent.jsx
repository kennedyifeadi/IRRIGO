import { FaCrown, FaShieldAlt, FaClock, FaSearch, FaEnvelope, FaUserAlt, FaWrench, FaEye, FaUserFriends } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { GiCycle } from "react-icons/gi";
import { FaGlassWaterDroplet } from "react-icons/fa6";
import { GiRobotGrab } from "react-icons/gi";
import MaleProfile from "../assets/male profile.jpg"
export const SettingsPage = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 font-sans">
      {/* Header */}
      <div className="text-center">
        <div className="relative inline-block">
          <img
            src={MaleProfile} // Replace with actual profile image
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
            <span className="text-white text-sm font-bold">*</span>
          </div>
        </div>
        <h2 className="text-xl font-bold mt-4">Xantha&apos;s farm</h2>
        <p className="text-gray-500">No 2 Avenue Street Bodija Ibadan</p>
      </div>

      {/* Edit Profile Button */}
      <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
        Edit Profile
      </button>

      {/* Premium Section */}
      <div className="flex items-center justify-center text-yellow-500 mt-4 space-x-2">
        <FaCrown />
        <span className="font-semibold">Upgrade to Premium</span>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-4 mt-6 text-center">
        <div className="bg-gray-100 p-4 rounded-lg">
          <FaShieldAlt className="text-blue-500 text-xl mx-auto" />
          <p className="text-lg font-semibold mt-2">4</p>
          <p className="text-sm text-gray-500">Identified Soil problems</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <FaGlassWaterDroplet className="text-blue-500 text-xl mx-auto"  />
          <p className="text-lg font-semibold mt-2">29L</p>
          <p className="text-sm text-gray-500">Water saved through irrigation</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <GiCycle className="text-blue-500 text-xl mx-auto"/>
          <p className="text-lg font-semibold mt-2">513</p>
          <p className="text-sm text-gray-500">Cycles completed</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <FaEnvelope className="text-blue-500 text-xl mx-auto" />
          <p className="text-lg font-semibold mt-2">171</p>
          <p className="text-sm text-gray-500">Numbers of days</p>
        </div>
      </div>

      {/* Menu Section */}
      <div className="mt-6">
        <MenuItem icon={<FaWrench />} text="Manage soil defects" />
        <MenuItem icon={<GiRobotGrab />} text="Robot profile" />
        <MenuItem icon={<IoMdSettings />} text="Cycle Settings" />
        <MenuItem icon={<FaEye />} text="See soil profile" />
        <MenuItem icon={<FaUserFriends />} text="Community forum" />
        <MenuItem icon={<FaUserAlt />} text="Contact requests" />
      </div>
    </div>
  );
};

const MenuItem = ({ icon, text }) => (
  <div className="flex items-center py-3 border-b border-gray-200">
    <div className="text-blue-500 text-lg mr-4">{icon}</div>
    <span className="text-gray-700">{text}</span>
  </div>
);

