import React, { useState } from 'react';
import './App.css';

// Sample data (5 candidates)
const candidatesData = [
  { id: 1, name: 'John', role: 'Developer', score: 90 },
  { id: 2, name: 'Smith', role: 'Manager', score: 85 },
  { id: 3, name: 'Tom', role: 'Designer', score: 88 },
  { id: 4, name: 'Emily', role: 'Developer', score: 95 },
  { id: 5, name: 'Daniel', role: 'Tester', score: 80 },
  { id: 6, name: 'James', role: 'Developer', score: 92 },
  { id: 7, name: 'Rachel', role: 'Manager', score: 75 },
  { id: 8, name: 'Scott', role: 'Tester', score: 78 },
  { id: 9, name: 'Olivia', role: 'Designer', score: 85 },
  { id: 10, name: 'Amy', role: 'Developer', score: 90 },
];

function App() {
  const [roleFilter, setRoleFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const candidatesPerPage = 5;

  // Filter candidates by selected role
  const filteredCandidates = roleFilter === 'All'
    ? candidatesData
    : candidatesData.filter(candidate => candidate.role === roleFilter);

  // Pagination logic
  const indexOfLastCandidate = currentPage * candidatesPerPage;
  const indexOfFirstCandidate = indexOfLastCandidate - candidatesPerPage;
  const currentCandidates = filteredCandidates.slice(indexOfFirstCandidate, indexOfLastCandidate);

  const totalPages = Math.ceil(filteredCandidates.length / candidatesPerPage);

  // Handle page change
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Candidate Dashboard</h1>

      <div className="filter">
        <label>Filter by Role: </label>
        <select onChange={(e) => setRoleFilter(e.target.value)} value={roleFilter}>
          <option value="All">All</option>
          <option value="Developer">Developer</option>
          <option value="Manager">Manager</option>
          <option value="Tester">Tester</option>
          <option value="Designer">Designer</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {currentCandidates.map(candidate => (
            <tr key={candidate.id}>
              <td>{candidate.id}</td>
              <td>{candidate.name}</td>
              <td>{candidate.role}</td>
              <td>{candidate.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <span>{currentPage} of {totalPages}</span>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default App;
