import React from "react";
import PropTypes from "prop-types";

const Poster = (props) => {
    const { image, title } = props;
    return (
        <div className="card-image">
            <img alt="demo" src={image} />
            <span className="card-title">{title}</span>
        </div>
    );
};

Poster.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Poster;
