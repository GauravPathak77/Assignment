import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="title">Data</h1>
      <hr></hr>
      {data.map((rows) => (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Income</th>
              <th>City</th>
              <th>Car</th>
              <th>Quote</th>
              <th>Phone Price</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td className="firstCol">{row.id}</td>
                <td>{row.first_name}</td>
                <td>{row.last_name}</td>
                <td>{row.email}</td>
                <td>{row.gender}</td>
                <td>{row.income}</td>
                <td>{row.city}</td>
                <td>{row.car}</td>
                <td>{row.quote}</td>
                <td>{row.phone_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default App;
