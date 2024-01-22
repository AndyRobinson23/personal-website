import './Card.css';
import { useState } from 'react';

const Card = ({ title, description, icon }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="skills-box" onClick={handleClick}>
      <i className={`fas fa-${icon} icon-small`}></i>
      <div className="flex">
        <h3 className="subtitle-copy">{title}</h3>
        <i class={`fa-solid fa-chevron-${open ? 'up' : 'down'} chevron`}></i>
      </div>
      {open && <p className="body-copy u-margin-top-sm">{description}</p>}
      <i className={`fas fa-${icon} icon-big`}></i>
    </div>
  );
};

export default Card;
