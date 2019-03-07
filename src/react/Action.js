import React from "react";
import PropTypes from "prop-types";

const Action = (props) => {
    const { title, link } = props;
    return (
        <div className="card-action">
            <a href={link}>{title}</a>
        </div>
    );
};

Action.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
};

Action.defaultProps = {
    title: "",
    link: "/",
};

export default Action;
