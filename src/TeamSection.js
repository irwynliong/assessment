import React, { useState } from 'react';
import BioModal from './BioModal';
import './TeamSection.css'; // Make sure to create and link a TeamSection.css file
import Counter from './Counter';

const advisors = [
    {
      name: 'Jonathan Kolatch',
      title: 'Founder, Redwood Capital',
      bioLink: '/bio/jonathan-kolatch',
      imageUrl: './images/johnathan.png',
      description: 'Detailed biography for Jonathan Kolatch...',
    },
    {
      name: 'Jonathan Kolber',
      title: 'Chairman and CEO, Anfield Ltd.',
      bioLink: '/bio/jonathan-kolber',
      imageUrl: './images/kolber.png',
      description: 'Detailed biography for Jonathan Kolber...'
    },
    {
        name: 'D. Randall Winn',
        title: 'Managing Partner, 22C Capital',
        bioLink: '/bio/randall',
        imageUrl: './images/randall.png',
        description: 'Detailed biography for D. Randall Winn...',
    },
    // ... Add other advisors here ...
];

const TeamSection = () => {
  const [isBioModalOpen, setBioModalOpen] = useState(false);
  const [currentBio, setCurrentBio] = useState({});
  // Function to open the bio modal with the advisor's data
  const openBioModal = (advisor) => {
    setCurrentBio({
      name: advisor.name,
      title: advisor.title,
      imageUrl: advisor.imageUrl,
      description: advisor.description // Placeholder for bio description
    });
    setBioModalOpen(true);
  };

  return (
    <div className="team-section">
      <div className="team-info">
        <h2>Leverage the resources of a seasoned team.</h2>
        <p>With 100+ years of collective investing experience and a high-value network, 10 East is built upon expertise, quality connections, and integrity.</p>
      </div>
      <div className="team-members">
        <div className="team-member">
          <img src="./images/michael.png" alt="Michael Lefell" className="team-photo" />
          <h3>Michael Lefell</h3>
          <h3>Founder & Chairman</h3>
          <p>Former Deputy Executive Managing Member of Davidson Kempner</p>
        </div>
        <div className="investment-info">
          <h2>$1B+</h2>
          <p>Invested Capital</p>
        </div>
        <div className="team-member">
          <img src="./images/sam.png" alt="Sam Klatt" className="team-photo" />
          <h3>Sam Klatt</h3>
          <p>Chief Investment Officer</p>
        </div>
      </div>
      <div className="team-members">
        <div className="team-member">
          <img src="./images/jason.png" alt="Jason Gregory" className="team-photo" />
          <h3>Jason Gregory</h3>
          <p>Chief Operating Officer</p>
        </div>
        <div className="statistics-container">
            <div className="transaction-counter">
                <Counter target="355" />
                <p>Transactions</p>
            </div>
            <div className="years-counter">
                <Counter target="12" />
                <p>Years</p>
            </div>
        </div>
        <div className="team-member">
          <img src="./images/travis.png" alt="Travis Stephens" className="team-photo" />
          <h3>Travis Stephens</h3>
          <p>Chief Strategy Officer</p>
        </div>
      </div>
      {/* Advisors section */}
      <div className="advisors-section">
        <h2>Advisors</h2>
        <div className="advisors-container">
          {advisors.map((advisor, index) => (
            <div className="advisor" key={index}>
                <img src= {advisor.imageUrl} alt= {advisor.name} className="advisor-photo" />
                <div className="advisor-info">
                    <h3>{advisor.name}</h3>
                    <p>{advisor.title}</p>
                    <button onClick={() => openBioModal(advisor)}>Full bio →</button>
                </div>
            </div>
          ))}
        </div>
      </div>
      <BioModal
        isOpen={isBioModalOpen}
        onClose={() => setBioModalOpen(false)}
        bioData={currentBio}
      />
    </div>
  );
};

export default TeamSection;
