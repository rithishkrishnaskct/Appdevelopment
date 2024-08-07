import React from 'react';
import '../User/User.css'; // Ensure you have appropriate styles

const Users = () => {
  // Sample data for the users
  const users = [
    { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', joined: '2023-01-15' },
    { id: 2, name: 'Bob Smith', email: 'bob.smith@example.com', joined: '2023-02-20' },
    { id: 3, name: 'Carol White', email: 'carol.white@example.com', joined: '2023-03-25' },
    { id: 4, name: 'David Brown', email: 'david.brown@example.com', joined: '2023-04-30' },
    { id: 5, name: 'Emma Davis', email: 'emma.davis@example.com', joined: '2023-05-05' },
    { id: 6, name: 'Frank Harris', email: 'frank.harris@example.com', joined: '2023-06-10' },
    { id: 7, name: 'Grace Lee', email: 'grace.lee@example.com', joined: '2023-07-15' },
    { id: 8, name: 'Hank Miller', email: 'hank.miller@example.com', joined: '2023-08-20' },
    { id: 9, name: 'Ivy Wilson', email: 'ivy.wilson@example.com', joined: '2023-09-25' },
    { id: 10, name: 'Jack Moore', email: 'jack.moore@example.com', joined: '2023-10-30' },
    { id: 11, name: 'Kathy Martin', email: 'kathy.martin@example.com', joined: '2023-11-05' },
    { id: 12, name: 'Larry Clark', email: 'larry.clark@example.com', joined: '2023-12-10' },
    { id: 13, name: 'Mona King', email: 'mona.king@example.com', joined: '2024-01-15' },
    { id: 14, name: 'Nina Adams', email: 'nina.adams@example.com', joined: '2024-02-20' },
    { id: 15, name: 'Oscar Perry', email: 'oscar.perry@example.com', joined: '2024-03-25' },
    { id: 16, name: 'Paul Wright', email: 'paul.wright@example.com', joined: '2024-04-30' },
    { id: 17, name: 'Quincy Harris', email: 'quincy.harris@example.com', joined: '2024-05-05' },
    { id: 18, name: 'Rachel Carter', email: 'rachel.carter@example.com', joined: '2024-06-10' },
    { id: 19, name: 'Steve Martinez', email: 'steve.martinez@example.com', joined: '2024-07-15' },
    { id: 20, name: 'Tina Lewis', email: 'tina.lewis@example.com', joined: '2024-08-20' },
    // Add more user objects as needed
  ];

  return (
    <div className="users">
      <h3>Users</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Joined</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.joined}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;