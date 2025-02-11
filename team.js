import React from 'react';

const TeamSection = () => {
  // Sample team data - you can add more members as needed
  const teamMembers = [
    {
      name: 'Sarita "Nirjhra"',
      role: 'CEO',
      image: '/path-to-sarita-image.jpg'
    },
    {
      name: 'Baasab "Taalib"',
      role: 'Co-founder',
      image: '/path-to-baasab-image.jpg'
    },
    {
      name: 'Capt. Ajay Pandey',
      role: 'UI/UX',
      image: '/path-to-ajay-image.jpg'
    },
    {
      name: 'Kiran Shukla',
      role: 'Software Engineer',
      image: '/path-to-kiran-image.jpg'
    }
    // You can add more team members here
  ];

  return (
    <div className="bg-amber-300 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Team</h1>
      
      {/* Scrollable container */}
      <div className="relative">
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 min-w-max px-4">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 w-64"
              >
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="/api/placeholder/400/320"
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Optional scroll indicators */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 bg-gradient-to-r from-amber-300 to-transparent h-full pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 bg-gradient-to-l from-amber-300 to-transparent h-full pointer-events-none" />
      </div>
    </div>
  );
};

export default TeamSection;