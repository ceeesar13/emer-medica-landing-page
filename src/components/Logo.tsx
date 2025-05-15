import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className || ''}`}>
      <img 
        src="https://res.cloudinary.com/dl4buqfbp/image/upload/v1745877968/emermedica-seeklogo_ax54ns.png" 
        alt="Emermédica - Atención médica inmediata en casa y online 24/7" 
        width="200"
        height="60"
        className="h-full w-auto"
        loading="eager"
        fetchPriority="high"
        {...{ 'data-fetchpriority': 'high' }}
      />
    </div>
  );
};

export default Logo;
