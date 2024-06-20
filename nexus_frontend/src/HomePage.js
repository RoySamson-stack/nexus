import React from 'react';
import platformImg from './img/platform.png'

const Homepage = () => {
    return (
        <div className="home">
            <div className="homepage">
                <div className="homepage-2">
                    <header className='home-header'>
                        <h1>Cyber resilience,<br></br> redefined</h1>
                        <p>Harness the power of ethical hackers and cutting-edge technology to fortify your
                            defenses against evolving threats.Empower your security stratergy with unparalleled expertise and proactive protection, ensuring your digital assets stay securre in an unrepdictable landscape
                        </p>
                        <button className='home-btn'>Get started</button>
                    </header>
                </div>
            </div>
            <div className="about-us">
                <h1>What new about us ?</h1>
                <div className='about-card-container'>
                    <div className="about-card">
                        <h1>Real time threat monitoring</h1>
                        <p>Continous monitoring of servces and cloud environments for potental threats and anomalies</p>
                    </div>
                    <div className="about-card">
                        <h1>Secure data Exchange</h1>
                        <p>Secure and encrypted exchange of treat intelligence data between organizations</p>
                    </div>
                    <div className="about-card">
                        <h1>Federated Threat intelligence Sharing</h1>
                        <p>Decentralized architecture allowing organization to share threat inteligence while retaining control over their data</p>
                    </div>
                    <div className="about-card">
                        <h1>Threat intelligence feed</h1>
                        <p>Access to curated and updated threat inteligence feeds</p>
                    </div>
                </div>

            </div>
            <div className="hackers">
                <h1>For hackers: Earn, Learn and Attack. Make the cyber space cyber safe</h1>
            </div>
            <div className='services'>
                <h1>Get your threat intelligence with Secure Threat platform</h1>
                <p className="">Minimize your threat exposure with the secure Threat Intelligence PLatform.<br></br>
                    Take a proactive approach to application security theough comprehensive attack surface management, <br></br>
                    continuous asset training and security coverage validation
                </p>
                <a href="/platform">Explore the platform</a>
                <br></br>
                <img src={platformImg} className="platformImage" alt="platform-img" />
            </div>

            <div className='end-credit'>
                <div className=''>
                    <h1>Platform</h1>
                </div>
                <div className=''>
                    <h1>Solutions</h1>
                </div>
                <div className=''>
                    <h1>Industries</h1>
                </div>
                <div className="">
                    <h1>Company</h1>
                </div>
            </div>
        </div>
    );
}

export default Homepage;

