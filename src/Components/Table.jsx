import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Table = () => {
    const [users, setUsers] = useState([]);
    const [isDataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            setUsers(data.users);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleButtonClick = () => {
        setDataLoaded(true);
    };
    const handleClose = () => {
        setDataLoaded(false);
    };

    return (
        <div>
            <button className='text-black font-mono font-bold hover:border-2 hover:border-black/40 border-2 border-black/20 px-3 py-2 rounded bg-slate-100' onClick={handleButtonClick}>Load Data</button>
            {isDataLoaded && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-2/3 h-2/3 overflow-auto">
                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                        >
                            X
                        </button>
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">ID</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Email</th>
                                    <th className="px-4 py-2">Phone</th>
                                    <th className="px-4 py-2">Username</th>
                                    <th className="px-4 py-2">BirthDate</th>
                                    <th className="px-4 py-2">Image</th>
                                    <th className="px-4 py-2">Detalis</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td className="border px-4 py-2">{user.id}</td>
                                        <td className="border px-4 py-2">{`${user.firstName} ${user.lastName}`}</td>
                                        <td className="border px-4 py-2">{user.email}</td>
                                        <td className="border px-4 py-2">{user.phone}</td>
                                        <td className="border px-4 py-2">{user.username}</td>
                                        <td className="border px-4 py-2">{user.birthDate}</td>
                                        <td className="px-4 py-2 border">
                                            <img src={user.image} alt={`Avatar of ${user.firstName}`} className="w-10 h-10 rounded-full" />
                                        </td>
                                        <td className="px-4 py-2 border">
                                            <Link
                                                to={`/dashboard/${user.id}`}
                                                className="text-blue-500 hover:text-blue-700 font-semibold"
                                            >
                                                View Details
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Table;
