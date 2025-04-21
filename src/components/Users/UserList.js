import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../../services/api';
import UserCard from './UserCard';
import Pagination from '../UI/Pagination';
import Loader from '../UI/Loader';
import { toast } from 'react-toastify';
import EditUserForm from './EditUserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    total_pages: 1,
    total: 0,
    per_page: 6
  });
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async (page = 1) => {
    try {
      setLoading(true);
      const response = await getUsers(page);
      setUsers(response.data.data);
      setPagination({
        page: response.data.page,
        total_pages: response.data.total_pages,
        total: response.data.total,
        per_page: response.data.per_page
      });
    } catch (error) {
      toast.error('Failed to fetch users');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handlePageChange = (newPage) => {
    fetchUsers(newPage);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(id);
        setUsers(users.filter(user => user.id !== id));
        toast.success('User deleted successfully!');
      } catch (error) {
        toast.error('Failed to delete user');
      }
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.length > 0 ? (
              users.map(user => (
                <UserCard
                  key={user.id}
                  user={user}
                  onEdit={() => handleEdit(user)}
                  onDelete={() => handleDelete(user.id)}
                />
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-500">No users found</p>
            )}
          </div>

          <div className="mt-8">
            <Pagination
              currentPage={pagination.page}
              totalPages={pagination.total_pages}
              onPageChange={handlePageChange}
            />
          </div>
        </>
      )}

      {editingUser && (
        <EditUserForm
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onUpdate={(updatedUser) => {
            setUsers(users.map(u => u.id === updatedUser.id ? {...u, ...updatedUser} : u));
            setEditingUser(null);
          }}
        />
      )}
    </div>
  );
};

export default UserList;