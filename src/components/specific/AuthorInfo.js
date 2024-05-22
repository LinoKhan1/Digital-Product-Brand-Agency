import React from 'react';
import PropTypes from 'prop-types';
const AuthorInfo = ({ name, imageSrc }) => {
    return (
        <div className="author-info">
            <span className="author-span">
                <img className="author-image" src={imageSrc} alt={`${name}'s portrait`} />
                <h2 className="author-name">{name}</h2>
            </span>
        </div>
    );
};

AuthorInfo.propTypes = {
    name: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
};

export default AuthorInfo;
