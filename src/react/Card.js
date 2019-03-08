import React from "react";
import PropTypes from "prop-types";
import { Action, Description, Poster } from ".";

const Card = (props) => {
    const {
        image, title, text,
        description, link,
    } = props;

    return (
        <div className="col s2 m4">
            <div className="card">
                <Poster image={`${image}React`} />
                <Description description={description} title={title} />
                <Action text={text} link={link} />
            </div>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    text: PropTypes.string,
};

Card.defaultProps = {
    image: "http://via.placeholder.com/306x229/c0c0c0/000000/?text=placeholder",
    title: "Title",
    description: "",
    link: "/",
    text: "View More",
};

export default Card;
