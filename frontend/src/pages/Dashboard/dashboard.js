import React, { useState } from 'react';
import './dashboard.css';
import { PieChart, Pie, Cell } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookOpen, faBookReader, faCalendarAlt, faBars, faChevronLeft, faChevronRight, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Settings from '../Settings/settings';
import User from '../User/User';
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard'); // Default to 'dashboard'

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarItemClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="dashboard">
      <Sidebar
        isOpen={isSidebarOpen}
        onSidebarItemClick={handleSidebarItemClick} // Pass click handler to Sidebar
      />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="top-bar">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={isSidebarOpen ? faChevronLeft : faChevronRight} />
          </button>
          {activeSection === 'dashboard' && (
            <>
              <div className="header-item">
                <FontAwesomeIcon icon={faBook} />
                <span>Total Books: 50</span>
              </div>
              <div className="header-item">
                <FontAwesomeIcon icon={faBookOpen} />
                <span>Story-Books Read: 20</span>
              </div>
              <div className="header-item">
                <FontAwesomeIcon icon={faBookOpen} />
                <span>Edu-Books Read: 19</span>
              </div>
              <div className="header-item">
                <FontAwesomeIcon icon={faBookReader} />
                <span>Active Readers: 4</span>
              </div>
            </>
          )}
        </div>
        <div className='stats-revenue'>
          {activeSection === 'dashboard' && (
            <>
              <Stats />
              <ActivityChart />
              <LatestBooks />
            </>
          )}
          {activeSection === 'books' && <Books />}
          {activeSection === 'educational' && <EducationalBooks />}
          {activeSection === 'reports' && <Reports />}
          {activeSection === 'settings' && <Settings />}
          {activeSection === 'User' && <User />}
          {activeSection === 'logout' && <Logout />}
        </div>
      </div>
    </div>
  );
};

const Sidebar = ({ isOpen, onSidebarItemClick }) => (
  <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
    <ul>
      <li onClick={() => onSidebarItemClick('dashboard')}>
        <FontAwesomeIcon icon={faBook} /> {isOpen && 'Dashboard'}
      </li>
      <li onClick={() => onSidebarItemClick('books')}>
        <FontAwesomeIcon icon={faBookOpen} /> {isOpen && 'Books'}
      </li>
      <li onClick={() => onSidebarItemClick('educational')}>
        <FontAwesomeIcon icon={faBookReader} /> {isOpen && 'Educational Books'}
      </li>
      <li onClick={() => onSidebarItemClick('reports')}>
        <FontAwesomeIcon icon={faCalendarAlt} /> {isOpen && 'Reports'}
      </li>
      <li onClick={() => onSidebarItemClick('settings')}>
        <FontAwesomeIcon icon={faCog} /> {isOpen && 'Settings'}
      </li>
      <li onClick={() => onSidebarItemClick('User')}>
        <FontAwesomeIcon icon={faCalendarAlt} /> {isOpen && 'User'}
      </li>
      <li onClick={() => onSidebarItemClick('logout')}>
        <FontAwesomeIcon icon={faSignOutAlt} /> {isOpen && 'Logout'}
      </li>
    </ul>
  </div>
);

const chartData = [
  { name: 'Fiction', value: 50 },
  { name: 'Non-Fiction', value: 30 },
  { name: 'Educational', value: 20 }
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Stats = () => (
  <div className="chart-container">
    <h2>Book Statistics</h2>
    <PieChart width={800} height={400}>
      <Pie
        data={chartData}
        cx={400}
        cy={200}
        labelLine={false}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        nameKey="name"
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </div>
);

const activityData = [
    { name: 'March', revenue: 10000 },
    { name: 'April', revenue: 15000 },
    { name: 'May', revenue: 20000 },
    { name: 'June', revenue: 25000 },
    { name: 'July', revenue: 30000 },
    { name: 'August', revenue: 50000 },
];

const ActivityChart = () => (
    <div className="revenue-chart">
      <h3>Total Revenue (Last 6 months)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={activityData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

const LatestBooks = () => (
  <div className="latest-books">
    <h3>Latest Books</h3>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Publication Date</th>
          <th>Pages</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Adventures of Tom Sawyer</td>
          <td>Mark Twain</td>
          <td>Fiction</td>
          <td>6/25/1876</td>
          <td>274</td>
        </tr>
        <tr>
          <td>Charlotte's Web</td>
          <td>E.B. White</td>
          <td>Children's Fiction</td>
          <td>10/15/1952</td>
          <td>192</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  </div>
);

const Books = () => (
  <div className="books">
    <h3>Book Collection</h3>
    {/* Add your Books component content here */}
  </div>
);

const EducationalBooks = () => (
  <div className="educational-books">
    <h3>Educational Books</h3>
    {/* Add your Educational Books component content here */}
  </div>
);

const Reports = () => (
  <div className="reports">
    <h3>Reports</h3>
    {/* Add your Reports component content here */}
  </div>
);

const Calendar = () => (
  <div className="calendar">
    <h3>Calendar</h3>
    {/* Add your Calendar component content here */}
  </div>
);

const Logout = () => (
  <div className="logout">
    <h3>Logging out...</h3>
    {/* Handle your logout logic here */}
  </div>
);

export default Dashboard;