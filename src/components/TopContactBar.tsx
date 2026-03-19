import React from 'react';

const TopContactBar: React.FC = () => {
  return (
    <div className="bg-charcoal-900 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="font-medium">Contact:</span>
            <span>+918276990847</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContactBar;
