import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function UserPage() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/user/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  if (!currentUser) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  // Use Google profile picture with no-referrer, or local placeholder
  const profileImage = currentUser.photoURL || "/profile_icon.jpg";

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        User Details
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-center mb-6">
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
            referrerPolicy={currentUser.photoURL ? "no-referrer" : undefined} // Add no-referrer only for Google image
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <p className="text-gray-900">
            {currentUser.displayName || "Not provided"}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <p className="text-gray-900">{currentUser.email}</p>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Joined</label>
          <p className="text-gray-900">
            {currentUser.metadata.creationTime
              ? new Date(currentUser.metadata.creationTime).toLocaleDateString()
              : "Unknown"}
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserPage;
