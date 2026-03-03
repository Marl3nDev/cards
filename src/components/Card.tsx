import React from 'react';

interface CardProps {
  image?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ image, className, style, children }) => {
  return (
    <div className={`card ${className || ''}`} style={style}>
      {image && <img src={image} className="card-img-top" alt="" />}
      {children}
    </div>
  );
};

export default Card;
