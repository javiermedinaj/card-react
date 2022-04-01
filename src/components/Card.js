import React from 'react'
import "./card.css";
import PropTypes from "prop-types";

function Card({ title, imageSource, description, link }) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={imageSource} alt="a wallpaper" className="card-img-top" />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    {description
                        ? description
                        : { description }}
                </p>
                <a
                    href={link ? link : "#!"}
                    target="_blank"
                    className="btn btn-outline-secondary border-0"
                    rel="noreferrer"
                >
                    Go to {title}
                </a>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    url: PropTypes.string,
    imageSource: PropTypes.string
};

export default Card