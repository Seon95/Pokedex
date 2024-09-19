import React from 'react';
import { capitalizeFirstLetter } from '../utils/stringUtils';

interface StatListProps {
  stats: { stat: { name: string }; base_stat: number }[];
}

const StatList: React.FC<StatListProps> = ({ stats }) => (
  <div className="info-section">
    <h2>Stats</h2>
    <ul className="stat-list">
      {stats.map((stat, index) => (
        <li key={index} className="stat-item">
          <span className="stat-name">{capitalizeFirstLetter(stat.stat.name)}:</span>
          <div className="stat-bar-container">
            <div 
              className="stat-bar"
              style={{ width: `${(stat.base_stat / 255) * 100}%` }}
            ></div>
          </div>
          <span className="stat-value">{stat.base_stat}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default StatList;