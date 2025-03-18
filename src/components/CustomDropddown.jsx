import React, { useState } from 'react';

const CustomDropdown = ({ options, selectedOptions, onSelect, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
        const updatedOptions = selectedOptions.includes(option)
            ? selectedOptions.filter((item) => item !== option) // Deselect if already selected
            : [...selectedOptions, option]; // Select if not already selected
        onSelect(updatedOptions);
    };

    return (
            <div className="waitlist-section-form-grp">
                <div className="waitlist-custom-dropdown">
                <div className="waitlist-dropdown-header" onClick={toggleDropdown}>
                    {selectedOptions.length > 0 ? selectedOptions.join(', ') : placeholder}
                    <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
                </div>
                {isOpen && (
                    <div className="waitlist-dropdown-list">
                        {options.map((option, index) => (
                            <div key={index} className="waitlist-dropdown-item">
                                <input type="checkbox" id={option} name="waitlist-dropdown-checkbox" checked={selectedOptions.includes(option)} onChange={() => handleSelect(option)} />
                                <label htmlFor={option}>{option}</label>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
        
    );
};

export default CustomDropdown;