import React from 'react';

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
                        one
                    </div>
                    <div className="about-card">
                        two
                    </div>
                    <div className="about-card">
                        three
                    </div>
                </div>

            </div>
            <div className='services'>
                <h1>Get your threat intelligence with Secure Threat platform</h1>
                <p className="">Minimize your threat exposure with the secure Threat Intelligence PLatform.<br></br>
                Take a proactive approach to application security theough comprehensive attack surface management, <br></br>
                continuous asset training and security coverage validation
                </p>
            </div>
            <div className='end-credit'>
                <div className='card'>Platform</div>
                <div className=''>Solutions</div>
                <div className=''>Industries</div>
                <div className="">Company</div>
            </div>
        </div>
    );
}

export default Homepage;

