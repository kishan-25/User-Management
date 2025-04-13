import React from 'react';

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-center pt-6 pb-2">
        <img 
          src={user.avatar} 
          alt={`${user.first_name} ${user.last_name}`} 
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
        />
      </div>
      
      <div className="px-6 py-4">
        <h3 className="text-xl font-bold text-center text-gray-800">
          {user.first_name} {user.last_name}
        </h3>
        <p className="text-gray-600 text-center">{user.email}</p>
      </div>
      
      <div className="px-6 py-4 flex justify-center space-x-4 border-t border-gray-100">
        <button
          onClick={onEdit}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;

