import React from "react";
import PropTypes from "prop-types";

const Description = (props) => {
    const { description } = props;
    return (
        <div className="card-content">
            <p>{description}</p>
        </div>
    );
};

Description.propTypes = {
    description: PropTypes.string.isRequired,
};

export default Description;
