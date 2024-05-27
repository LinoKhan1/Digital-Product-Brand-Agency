import React from 'react';
import PropTypes from 'prop-types';

const AuthorInfoComponent = ({ name, imageSrc }) => {
    return (
        /** Author Info Component */
        <div className="author-info">
            <span className="author-span">
                <img className="author-image" src={imageSrc} alt={`Portrait of ${name}`} />
                <h2 className="author-name">{name}</h2>
            </span>
        </div>
    );
};

AuthorInfo.propTypes = {
    name: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
};

export default AuthorInfoComponent;