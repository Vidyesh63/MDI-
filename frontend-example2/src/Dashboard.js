// src/Dashboard.js
import React, { useState, useEffect } from "react";
import "./Dashboard.css";

// Simulate fetching user data (this can be replaced with real API calls later)
const fetchUserData = () => 
  new Promise((resolve) => 
    setTimeout(
      () => 
        resolve([
          { id: 1, name: "John", role: "Researcher", score: 85 },
          { id: 2, name: "Amy", role: "Data Analyst", score: 90 },
          { id: 3, name: "Jonathon", role: "Developer", score: 78 },
          { id: 4, name: "Brandon", role: "Researcher", score: 92 },
        ]), 1000
    )
  );

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [sortCriterion, setSortCriterion] = useState("id");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchUserData().then((data) => setUsers(data));
  }, []);

  const sortUsers = (key) => {
    setSortCriterion(key);
    const sortedData = [...users].sort((a, b) => 
      a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
    );
    setUsers(sortedData);
  };

  const filteredUsers = users.filter(
    (user) => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Search by name or role"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="sorting-buttons">
          <button onClick={() => sortUsers("id")}>Sort by ID</button>
          <button onClick={() => sortUsers("name")}>Sort by Name</button>
          <button onClick={() => sortUsers("score")}>Sort by Score</button>
        </div>
      </div>
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.score}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No matching records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
