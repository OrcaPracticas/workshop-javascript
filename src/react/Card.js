import React from "react";
import PropTypes from "prop-types";
import { Action, Description, Poster } from ".";

const Card = (props) => {
    const {
        image, title,
        description, link,
    } = props;

    return (
        <div className="col s2 m4">
            <div className="card">
                <Poster image={image} title={title} />
                <Description description={description} />
                <Action title={title} link={link} />
            </div>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Card;
