import React from "react";
import PropTypes from "prop-types";

const Description = (props) => {
    const { description, title } = props;
    return (
        <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{description}</p>
        </div>
    );
};

Description.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Description;
