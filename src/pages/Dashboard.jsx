import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaPhone, FaHome, FaDollarSign, FaChartLine } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({ total: 0, new: 0, contacted: 0 });

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/leads');
      setLeads(response.data);
      calculateStats(response.data);
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  };

  const calculateStats = (data) => {
    setStats({
      total: data.length,
      new: data.filter(l => l.status === 'new').length,
      contacted: data.filter(l => l.status === 'contacted').length
    });
  };

  const updateLeadStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/api/leads/${id}`, { status });
      fetchLeads();
    } catch (error) {
      console.error('Error updating lead:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="dashboard-container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Lead Dashboard</h1>
          <p className="dashboard-subtitle">Manage and track your real estate leads</p>
        </div>
        
        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card total">
            <div className="stat-content">
              <div className="stat-info">
                <h3>Total Leads</h3>
                <div className="stat-number">{stats.total}</div>
              </div>
              <FaChartLine className="stat-icon" />
            </div>
          </div>
          
          <div className="stat-card new">
            <div className="stat-content">
              <div className="stat-info">
                <h3>New Leads</h3>
                <div className="stat-number">{stats.new}</div>
              </div>
              <FaUser className="stat-icon" />
            </div>
          </div>
          
          <div className="stat-card contacted">
            <div className="stat-content">
              <div className="stat-info">
                <h3>Contacted</h3>
                <div className="stat-number">{stats.contacted}</div>
              </div>
              <FaPhone className="stat-icon" />
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="leads-table-container">
          <div className="leads-table-header">
            <h2 className="leads-table-title">All Leads</h2>
          </div>
          
          <div style={{ overflowX: 'auto' }}>
            <table className="leads-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Property</th>
                  <th>Budget</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => (
                  <tr key={lead._id}>
                    <td>
                      <div className="table-cell-content">
                        <FaUser className="table-icon user" />
                        <span className="table-text">{lead.name}</span>
                      </div>
                    </td>
                    <td>
                      <div className="table-cell-content">
                        <FaEnvelope className="table-icon email" />
                        <span className="table-text">{lead.email || 'N/A'}</span>
                      </div>
                    </td>
                    <td>
                      <div className="table-cell-content">
                        <FaPhone className="table-icon phone" />
                        <span className="table-text">{lead.phone}</span>
                      </div>
                    </td>
                    <td>
                      <div className="table-cell-content">
                        <FaHome className="table-icon home" />
                        <span className="table-text">{lead.interestedProject || lead.propertyType || 'N/A'}</span>
                      </div>
                    </td>
                    <td>
                      <div className="table-cell-content">
                        <FaDollarSign className="table-icon dollar" />
                        <span className="table-text">{lead.budget || 'N/A'}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`status-badge ${lead.status || 'new'}`}>
                        {lead.status || 'new'}
                      </span>
                    </td>
                    <td>
                      <select
                        onChange={(e) => updateLeadStatus(lead._id, e.target.value)}
                        defaultValue={lead.status || 'new'}
                        className="status-select"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="closed">Closed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {leads.length === 0 && (
              <div className="empty-state">
                <p className="empty-state-text">No leads yet. Start capturing leads from your website!</p>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
