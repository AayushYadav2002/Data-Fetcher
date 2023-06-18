import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDashboard = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchData();
  },);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();
      const selectedUser = data.users.find((user) => user.id === parseInt(userId, 10));
      setUser(selectedUser);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 w-1/2">
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className='flex items-center justify-center '>
            <img src={user.image} alt={`Avatar of ${user.firstName}`} className="w-64 h-64 rounded-full" />
        </div>
        <div className=" rounded-lg p-4 bg-slate-200">
          <h3 className="text-lg font-semibold mb-2">Personal Details</h3>
          <p>
            <span className="font-semibold">Full Name:</span> {user.firstName} {user.lastName}
          </p>
          <p>
            <span className="font-semibold">Maiden Name:</span> {user.maidenName}
          </p>
          <p>
            <span className="font-semibold">Age:</span> {user.age}
          </p>
          <p>
            <span className="font-semibold">Gender:</span> {user.gender}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {user.phone}
          </p>
          <p>
            <span className="font-semibold">Username:</span> {user.username}
          </p>
          <p>
            <span className="font-semibold">Birth Date:</span> {user.birthDate}
          </p>
          <p>
            <span className="font-semibold">Blood Group:</span> {user.bloodGroup}
          </p>
        </div>
        <div className=" rounded-lg p-4 bg-slate-200">
          <h3 className="text-lg font-semibold mb-2">Physical Details</h3>
          <p>
            <span className="font-semibold">Height:</span> {user.height} cm
          </p>
          <p>
            <span className="font-semibold">Weight:</span> {user.weight} kg
          </p>
          <p>
            <span className="font-semibold">Eye Color:</span> {user.eyeColor}
          </p>
          <p>
            <span className="font-semibold">Hair Color:</span> {user.hair.color}
          </p>
          <p>
            <span className="font-semibold">Hair Type:</span> {user.hair.type}
          </p>
        </div>
        <div className="bg-slate-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p>
            <span className="font-semibold">Address:</span> {user.address.address}
          </p>
          <p>
            <span className="font-semibold">City:</span> {user.address.city}
          </p>
          <p>
            <span className="font-semibold">Postal Code:</span> {user.address.postalCode}
          </p>
          <p>
            <span className="font-semibold">State:</span> {user.address.state}
          </p>
        </div>
        <div className="bg-slate-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Bank Details</h3>
          <p>
            <span className="font-semibold">Card Expiry:</span> {user.bank.cardExpire}
          </p>
          <p>
            <span className="font-semibold">Card Number:</span> {user.bank.cardNumber}
          </p>
          <p>
            <span className="font-semibold">Card Type:</span> {user.bank.cardType}
          </p>
          <p>
            <span className="font-semibold">Currency:</span> {user.bank.currency}
          </p>
          <p>
            <span className="font-semibold">IBAN:</span> {user.bank.iban}
          </p>
        </div>
        <div className="bg-slate-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-2">Company Details</h3>
          <p>
            <span className="font-semibold">Company Name:</span> {user.company.name}
          </p>
          <p>
            <span className="font-semibold">Department:</span> {user.company.department}
          </p>
          <p>
            <span className="font-semibold">Title:</span> {user.company.title}
          </p>
          <p>
            <span className="font-semibold">Company Address:</span> {user.company.address.address}
          </p>
          <p>
            <span className="font-semibold">City:</span> {user.company.address.city}
          </p>
          <p>
            <span className="font-semibold">Postal Code:</span> {user.company.address.postalCode}
          </p>
          <p>
            <span className="font-semibold">State:</span> {user.company.address.state}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
