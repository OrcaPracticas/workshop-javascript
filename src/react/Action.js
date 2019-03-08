import React from "react";
import PropTypes from "prop-types";

const Action = (props) => {
    const { text, link } = props;
    return (
        <div className="card-action">
            <a
                className="waves-effect waves-light btn blue darken-1"
                href={link}
            >
                {text}
            </a>
        </div>
    );
};

Action.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
};

Action.defaultProps = {
    text: "",
    link: "/",
};

export default Action;
