import React from "react";
import PropTypes from "prop-types";

const Thumbnail = (props) => {
    const { image } = props;
    return (
        <div className="card-image">
            <img alt="demo" src={image} />
        </div>
    );
};

Thumbnail.propTypes = {
    image: PropTypes.string.isRequired,
};

export default Thumbnail;
