import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');

  const handleLogout = () => {
    navigate('/');
  };

  const menuItems = [
    { name: 'Overview', icon: '⊞' },
    { name: 'Courses', icon: '📖' },
    { name: 'Schedule', icon: '📅' },
    { name: 'Grades', icon: '🎓' },
    { name: 'Finance', icon: '💳' },
    { name: 'Library', icon: '📚' },
    { name: 'Settings', icon: '⚙' }
  ];

  return (
    <div className="db-wrapper">
      <aside className="db-sidebar">
        <div className="db-logo-container">
          <div className="db-main-icon">▲</div>
        </div>
        
        <nav className="db-nav">
          {menuItems.map((item) => (
            <div 
              key={item.name}
              className={`db-nav-item ${activeTab === item.name ? 'active' : ''}`}
              onClick={() => setActiveTab(item.name)}
              title={item.name}
            >
              <span className="db-nav-icon">{item.icon}</span>
              <span className="db-nav-label">{item.name}</span>
            </div>
          ))}
        </nav>

        <div className="db-logout-container">
          <button className="db-logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      <main className="db-content">
        <header className="db-top-bar">
          <div className="db-search-placeholder"></div>
          <div className="db-user-section">
            <div className="db-user-text">
              <div className="db-line-long"></div>
              <div className="db-line-short"></div>
            </div>
            <div className="db-user-avatar">A</div>
          </div>
        </header>

        <div className="db-scroll-area">
          <h2 className="db-view-title">{activeTab}</h2>
          
          <div className="db-banner">
            <div className="db-banner-content">
              <div className="db-line-md"></div>
              <div className="db-line-lg"></div>
            </div>
            <div className="db-banner-graphic"></div>
          </div>

          <div className="db-grid-container">
            <div className="db-left-col">
              <div className="db-section-header">
                <div className="db-line-sm"></div>
              </div>
              <div className="db-finance-row">
                <div className="db-stat-card">
                  <div className="db-card-icon"></div>
                  <div className="db-line-md"></div>
                </div>
                <div className="db-stat-card active">
                  <div className="db-card-icon"></div>
                  <div className="db-line-md"></div>
                </div>
                <div className="db-stat-card">
                  <div className="db-card-icon"></div>
                  <div className="db-line-md"></div>
                </div>
              </div>

              <div className="db-section-header">
                <div className="db-line-sm"></div>
                <div className="db-line-link"></div>
              </div>
              <div className="db-courses-row">
                <div className="db-course-card">
                  <div className="db-course-info">
                    <div className="db-line-md"></div>
                    <button className="db-view-btn">View</button>
                  </div>
                  <div className="db-course-graphic"></div>
                </div>
                <div className="db-course-card">
                  <div className="db-course-info">
                    <div className="db-line-md"></div>
                    <button className="db-view-btn">View</button>
                  </div>
                  <div className="db-course-graphic"></div>
                </div>
              </div>
            </div>

            <div className="db-right-col">
              <div className="db-section-header">
                <div className="db-line-sm"></div>
              </div>
              <div className="db-instructors">
                <div className="db-circle"></div>
                <div className="db-circle"></div>
                <div className="db-circle"></div>
              </div>
              <div className="db-notice-stack">
                <div className="db-notice-card">
                  <div className="db-line-md"></div>
                  <div className="db-line-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;