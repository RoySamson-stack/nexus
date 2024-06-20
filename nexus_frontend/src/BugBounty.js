import React, { useState } from "react";
import "./BugBounty.css";

const SideNav = () => (
    <nav className="side-nav">
        <ul>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#settings">Settings</a></li>
        </ul>
    </nav>
);

const TopNav = () => (
    <>
        <nav className="top-nav">

            <ul>
                <li><a href="#all-programs">All Programs</a></li>
                <li><a href="#my-programs">My Programs</a></li>
                <li><a href="#bookmarks">Bookmarks</a></li>
                <li><a href="#pending-invitation">Pending Invitation</a></li>
                <li><a href="#collaboration">Collaboration</a></li>
            </ul>
            <p></p>

        </nav>
        <div className="search-bar">
            <input type="text" placeholder="Search Programs..." />
            <select>
                <option value="">Program Type</option>
                {/* Add options here */}
            </select>
            <select>
                <option value="">Asset Type</option>
                {/* Add options here */}
            </select>
            <select>
                <option value="">Industry</option>
                {/* Add options here */}
            </select>
            <button>Search</button>
        </div>
    </>
);


const CompanyCards = ({ companies }) => (


   
    <div className="company-cards">
        <h2>Companies in Bug Bounty Program</h2>
        <div className="card-container">
            {companies.map((company) => (
                <div key={company.id} className="company-card">
                    <h3>{company.name}</h3>
                    <p>{company.description}</p>
                    <button className="details-btn">See details</button>
                </div>
            ))}
        </div>
    </div>
);

const App = () => {
    const [bugs, setBugs] = useState([
        { id: 1, title: 'Cross-site Scripting (XSS) in Login Form', description: '...', priority: 'High', reporter: 'Alice' },
        { id: 2, title: 'SQL Injection in User Profile Update', description: '...', priority: 'Medium', reporter: 'Bob' },
        { id: 3, title: 'Broken Authentication in Admin Panel', description: '...', priority: 'High', reporter: 'Charlie' }
    ]);
    const [selectedBug, setSelectedBug] = useState(null);

    // Dummy data for companies
    const [companies] = useState([
        { id: 1, name: 'Example Corp', description: 'A multinational company focused on cybersecurity.' },
        { id: 2, name: 'Secure Solutions Ltd', description: 'Specializes in IT security services and solutions.' },
        { id: 3, name: 'CyberDefend Inc', description: 'Provides cutting-edge security solutions for global clients.' },
    ]);

    const handleBugSelect = (bugId) => {
        const bug = bugs.find(b => b.id === bugId);
        setSelectedBug(bug);
    };

    return (
        <div className="app">
            <SideNav />
            <div className="main-content">
                <TopNav />

                <CompanyCards companies={companies} />
            </div>
        </div>
    );
};

export default App;
