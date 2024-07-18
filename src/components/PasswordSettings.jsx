import PropTypes from "prop-types";

const PasswordSettings = ({
                              length,
                              setLength,
                              includeUppercase,
                              setIncludeUppercase,
                              includeLowercase,
                              setIncludeLowercase,
                              includeNumbers,
                              setIncludeNumbers,
                              includeSymbols,
                              setIncludeSymbols,
                          }) => {
    return (
        <div className="settings">
            <div className="password-length">
                <p>Character Length</p> <p className="length">{length}</p>
            </div>
            <input
                type="range"
                min="1"
                max="20"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>
                <input
                    type="checkbox"
                    checked={includeUppercase}
                    onChange={() => setIncludeUppercase(!includeUppercase)}
                />
                Include Uppercase Letters
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={includeLowercase}
                    onChange={() => setIncludeLowercase(!includeLowercase)}
                />
                Include Lowercase Letters
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={() => setIncludeNumbers(!includeNumbers)}
                />
                Include Numbers
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={() => setIncludeSymbols(!includeSymbols)}
                />
                Include Symbols
            </label>
        </div>
    );
};

PasswordSettings.propTypes = {
    length: PropTypes.number.isRequired,
    setLength: PropTypes.func.isRequired,
    includeUppercase: PropTypes.bool.isRequired,
    setIncludeUppercase: PropTypes.func.isRequired,
    includeLowercase: PropTypes.bool.isRequired,
    setIncludeLowercase: PropTypes.func.isRequired,
    includeNumbers: PropTypes.bool.isRequired,
    setIncludeNumbers: PropTypes.func.isRequired,
    includeSymbols: PropTypes.bool.isRequired,
    setIncludeSymbols: PropTypes.func.isRequired,
};

export default PasswordSettings;
