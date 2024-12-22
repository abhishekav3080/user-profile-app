import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]));
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="sm:flex sm:items-center px-6 py-4">
          <img
            className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-24 sm:h-32 rounded-full border-4 border-gray-300"
            src={user.picture.large}
            alt="User"
          />
          <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p className="text-xl leading-tight font-bold text-gray-900">
              {user.name.first} {user.name.last}
            </p>
            <p className="text-sm leading-tight text-gray-600">
              {user.location.city}, {user.location.country}
            </p>
            <div className="mt-4">
              <p className="text-sm leading-tight text-gray-600">
                Gender: {user.gender}
              </p>
              <p className="text-sm leading-tight text-gray-600">
                Phone: {user.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
