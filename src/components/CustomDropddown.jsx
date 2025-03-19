import React, { useState } from 'react';

const CustomDropdown = ({ options, selectedOptions, onSelect, placeholder, label }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOtherSelected, setIsOtherSelected] = useState(false);
    const [otherValue, setOtherValue] = useState('');

    const toggleDropdown = () => {
        if (!isOtherSelected) {
            setIsOpen(!isOpen);
        }
    };

    const handleSelect = (option) => {
        if (option === 'Other (please specify)') {
            // If "Other" is selected, clear all other selections and show the input field
            setIsOtherSelected(true);
            setIsOpen(false); // Close the dropdown
            onSelect([]); // Clear all other selections
        } else {
            // If any other option is selected, ensure "Other" is not selected
            setIsOtherSelected(false);
            setOtherValue(''); // Clear the "Other" input value
            const updatedOptions = selectedOptions.includes(option)
                ? selectedOptions.filter((item) => item !== option) // Deselect if already selected
                : [...selectedOptions, option]; // Select if not already selected
            onSelect(updatedOptions);
        }
    };

    const handleOtherInputChange = (e) => {
        setOtherValue(e.target.value);
    };

    const handleOtherInputBlur = () => {
        if (otherValue.trim()) {
            // Add the custom value to selectedOptions
            onSelect([otherValue]); // Only the custom value should be selected
        } else {
            // If the input is empty, clear the selection
            onSelect([]);
        }
        setIsOtherSelected(false);
        setOtherValue('');
    };

    const handleBackToDropdown = () => {
        setIsOtherSelected(false);
        setOtherValue('');
    };

    const handleRemoveCustomValue = (value) => {
        const updatedOptions = selectedOptions.filter((item) => item !== value);
        onSelect(updatedOptions);
    };

    return (
        <div className="waitlist-section-form-grp">
            <p className='xui-mb-1 xui-font-w-500 xui-font-sz-100'>{label}</p>
            {isOtherSelected ? (
                <div className="waitlist-other-input">
                    <input
                        type="text"
                        value={otherValue}
                        onChange={handleOtherInputChange}
                        onBlur={handleOtherInputBlur}
                        placeholder="Please specify"
                        autoFocus
                    />
                    <button onClick={handleBackToDropdown} className="waitlist-back-arrow">
                        &#8592;
                    </button>
                </div>
            ) : (
                <div className="waitlist-custom-dropdown">
                    <div className="waitlist-dropdown-header" onClick={toggleDropdown}>
                        <div>
                            {selectedOptions.length > 0 ? (
                                selectedOptions.map((option, index) => (
                                    <span key={option} className="selected-option">
                                        {option}
                                        {/* Add a comma only if it's not the last option */}
                                        {index < selectedOptions.length - 1 && ' , '}
                                        {!options.includes(option) && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent dropdown toggle
                                                    handleRemoveCustomValue(option);
                                                }}
                                                className="remove-custom-value"
                                            >
                                                &times;
                                            </button>
                                        )}
                                    </span>
                                ))
                            ) : (
                                placeholder
                            )}
                        </div>
                        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
                    </div>
                    {isOpen && (
                        <div className="waitlist-dropdown-list">
                            {options.map((option, index) => (
                                <div key={index} className="waitlist-dropdown-item">
                                    <input
                                        type="checkbox"
                                        id={option}
                                        name="waitlist-dropdown-checkbox"
                                        checked={selectedOptions.includes(option)}
                                        onChange={() => handleSelect(option)}
                                        disabled={isOtherSelected} // Disable if "Other" is selected
                                    />
                                    <label htmlFor={option}>{option}</label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;