import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


function DropdownComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Inline styles  
  const styles = {
    barPoints: {  
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
    },
    dropdownMenu: {
      position: 'absolute',
      backgroundColor: '#f9f9f9',
      minWidth: '160px',
      boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
      zIndex: 1,
    },
    dropdownItem: {
      padding: '12px 16px',
      textDecoration: 'none',
      display: 'block',
      color :'black'
    },
    dropdownItemHover: { // Note: Inline styles don't support pseudo-classes like :hover
      backgroundColor: '#f1f1f1',
    }
  };

  return (
    <div>
      <div style={styles.barPoints} onClick={toggleDropdown}>
        Products <FontAwesomeIcon icon={faCaretDown} />
      </div>
      {isOpen && (
        <div style={styles.dropdownMenu}>
          <div style={styles.dropdownItem}>Pricing </div>
                    {/* Add more dropdown items here */}
        </div>
      )}
    </div>
  );
}

export default DropdownComponent;
