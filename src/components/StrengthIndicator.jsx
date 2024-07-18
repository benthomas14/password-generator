import PropTypes from "prop-types";

const StrengthIndicator = ({ strength, strengthDescription }) => {
    const getStrengthBarClass = (index) => {
        const strengthClasses = ['too-weak', 'weak', 'medium', 'strong'];
        if (index <= strength) {
            return `strength-bar filled ${strengthClasses[strength]}`;
        }
        return "strength-bar";
    };

    return (
        <div className="strength">
            <p>Strength</p>
            <div className="strength-info">
                <p>{strengthDescription}</p>
                <div className="strength-bars">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className={getStrengthBarClass(index)}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

StrengthIndicator.propTypes = {
    strength: PropTypes.number.isRequired,
    strengthDescription: PropTypes.string.isRequired,
};

export default StrengthIndicator;
