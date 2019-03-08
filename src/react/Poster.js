import React from "react";
import PropTypes from "prop-types";

const Poster = (props) => {
    const { image } = props;
    return (
        <div className="card-image">
            <img alt="demo" src={image} />
        </div>
    );
};

Poster.propTypes = {
    image: PropTypes.string.isRequired,
};

export default Poster;
