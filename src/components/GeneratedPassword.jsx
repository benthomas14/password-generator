// src/components/GeneratedPassword.js
import { useState } from 'react';
import CopyIcon from '../assets/icon-copy.svg';
import PropTypes from "prop-types";

const GeneratedPassword = ({ password }) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(password);
        setIsTooltipVisible(true);
        setTimeout(() => setIsTooltipVisible(false), 2000);
    };

    return (
        <div className="generated-password">
            <p style={{ color: password ? '#E6E5EA' : '#817D92' }}>{password || "P4$5W0rD!"}</p>
            <button onClick={handleCopy}>
                <img className="copy-icon" src={CopyIcon} alt="copy" />
                {isTooltipVisible && <span className="tooltip">Copied</span>}
            </button>
        </div>
    );
};

GeneratedPassword.propTypes = {
    password: PropTypes.string.isRequired,
};

export default GeneratedPassword;
