import React, { useState } from 'react';
import Summary from './Summary';
import Chart from 'react-apexcharts';
import { useNavigate } from 'react-router-dom';
import home from '../assets/img/Eco.jpg';

const Admin = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

    const options = {
        chart: {
            id: 'sales-chart'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        }
    };

    const series = [
        {
            name: 'Sales',
            data: [30, 40, 35, 50, 49, 60, 70]
        }
    ];

    const handleLogout = () => {
        navigate('/');
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div style={{
            display: 'flex',
            height: '100vh',
            backgroundColor: '#f4f5f7',
            width: '100%',
            marginLeft: '30px',
            position: 'relative'
        }}>
            <div style={{
                width: isSidebarOpen ? '250px' : '80px',
                backgroundColor: '#e3e5e7',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'fixed',
                left: '0',
                top: '0',
                bottom: '0',
                transition: 'width 0.3s ease-in-out'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '20px'
                }}>
                    <img src={home} alt="home-icon" style={{
                        width: '40px',
                        height: 'auto',
                        cursor: 'pointer'
                    }} />
                </div>
                <ul style={{
                    listStyle: 'none',
                    padding: '0',
                    margin: '0'
                }}>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/admin" onClick={() => navigate('/dashboard')} style={{
                            display: 'block',
                            padding: '10px',
                            color: '#ecf0f1',
                            textDecoration: 'none',
                            borderRadius: '5px',
                            transition: 'background-color 0.2s ease'
                        }} onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
                            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                            Dashboard
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/editadmin" onClick={() => navigate('/editadmin')} style={{
                            display: 'block',
                            padding: '10px',
                            color: '#ecf0f1',
                            textDecoration: 'none',
                            borderRadius: '5px',
                            transition: 'background-color 0.2s ease'
                        }} onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
                            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                            EditProfile
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/managevendors" onClick={() => navigate('/manage-vendors')} style={{
                            display: 'block',
                            padding: '10px',
                            color: '#ecf0f1',
                            textDecoration: 'none',
                            borderRadius: '5px',
                            transition: 'background-color 0.2s ease'
                        }} onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
                            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                            Manage Users
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/manageproduct" onClick={() => navigate('/manage-offers')} style={{
                            display: 'block',
                            padding: '10px',
                            color: '#ecf0f1',
                            textDecoration: 'none',
                            borderRadius: '5px',
                            transition: 'background-color 0.2s ease'
                        }} onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
                            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                            Manage Products
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/managecategories" onClick={() => navigate('/manage-categories')} style={{
                            display: 'block',
                            padding: '10px',
                            color: '#ecf0f1',
                            textDecoration: 'none',
                            borderRadius: '5px',
                            transition: 'background-color 0.2s ease'
                        }} onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
                            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                            Manage Categories
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/manageaddress" onClick={() => navigate('/manage-address')} style={{
                            display: 'block',
                            padding: '10px',
                            color: '#ecf0f1',
                            textDecoration: 'none',
                            borderRadius: '5px',
                            transition: 'background-color 0.2s ease'
                        }} onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
                            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                            Manage Orders
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/managefeedback" onClick={() => navigate('/manage-vendors')} style={{
                            display: 'block',
                            padding: '10px',
                            color: '#ecf0f1',
                            textDecoration: 'none',
                            borderRadius: '5px',
                            transition: 'background-color 0.2s ease'
                        }} onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
                            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
                            Manage Feedbacks
                        </a>
                    </li>
                </ul>
                <button style={{
                    backgroundColor: '#e74c3c',
                    color: '#fff',
                    border: 'none',
                    padding: '10px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'background-color 0.2s ease'
                }} onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
                    onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <div style={{
                flexGrow: 1,
                padding: '20px',
                backgroundColor: '#fff',
                overflowY: 'auto',
                transition: 'margin-left 0.3s ease-in-out',
                marginLeft: isSidebarOpen ? '250px' : '80px'
            }}>
                <h1 style={{
                    fontSize: '28px',
                    marginBottom: '20px'
                }}>Admin Dashboard</h1>
                <Summary />
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '20px',
                    marginBottom: '20px'
                }}>
                    <div style={{
                        flex: 1,
                        backgroundColor: '#ecf0f1',
                        padding: '20px',
                        borderRadius: '8px'
                    }}>
                        <h2>Sales Overview</h2>
                        <Chart options={options} series={series} type="line" height={300} />
                    </div>
                    <div style={{
                        flex: 1,
                        backgroundColor: '#ecf0f1',
                        padding: '20px',
                        borderRadius: '8px'
                    }}>
                        <h2>Order Trends</h2>
                        <Chart options={options} series={series} type="bar" height={300} />
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '20px'
                }}>
                    <div style={{
                        flex: 1,
                        backgroundColor: '#ecf0f1',
                        padding: '20px',
                        borderRadius: '8px',
                        textAlign: 'center'
                    }}>
                        <h3 style={{
                            marginBottom: '15px',
                            fontSize: '22px',
                            color: '#34495e'
                        }}>Items Out of Stock</h3>
                        <p style={{
                            fontSize: '20px',
                            color: '#2c3e50'
                        }}>10</p>
                    </div>
                    <div style={{
                        flex: 1,
                        backgroundColor: '#ecf0f1',
                        padding: '20px',
                        borderRadius: '8px',
                        textAlign: 'center'
                    }}>
                        <h3 style={{
                            marginBottom: '15px',
                            fontSize: '22px',
                            color: '#34495e'
                        }}>Products Sold</h3>
                        <p style={{
                            fontSize: '20px',
                            color: '#2c3e50'
                        }}>15</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
