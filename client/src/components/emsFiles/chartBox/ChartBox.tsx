import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

interface User {
  id: number;
  todo: string;
}

interface Props {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  note:string;
}

const ChartBox: React.FC<Props> = (props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // Fetch users from the backend when the component mounts
    axios.get('/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setError('Failed to fetch users');
      });
  }, []); // Empty dependency array ensures the effect runs only once

  const renderUsers = () => {
    return users.map(user => (
      <li key={user.id}>{user.todo}</li>
    ));
  };

  const getStatusColor = () => {
    return props.percentage < 50 ? "tomato" : "limegreen";
  };

  return (
    <div>
      <div className="chartBox" style={{ color: 'white', fontSize: '18px' }}>
        <div className="boxInfo">
          <div className="title">
            <img src={props.icon} alt="" />
            <span>{props.title}</span>
          </div>
          <h1>
            {/* Render users */}
            {renderUsers()}
          </h1>
        </div>
        <div className="texts">
        Status: 
          <span
            className="percentage"
            style={{ color: getStatusColor() }}
          >
             {" " +props.dataKey}
          </span>
        </div>
      </div>
      <br/>
      <div style={{ color: "white" }}>
        Manager: {props.number}
      </div>
      <br/>
      <div style={{ color: "white" }}>
        Notes: {props.note}
      </div>
      
    </div>
  );
};

export default ChartBox;
