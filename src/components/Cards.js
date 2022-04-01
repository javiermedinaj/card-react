import React from 'react'
import Card from './Card'
import Image1 from '../assets/image1.jpeg'
import Image2 from '../assets/image2.jpeg'
import Image3 from '../assets/image3.jpeg'

import "./card.css";

const cards = [
    {
        id: 1,
        title: 'Card 1',
        image: Image1,
        description: 'Project in next js',
        link: 'https://github.com/javiermedinaj/crud'
    },
    {
        id: 2,
        title: 'Card 2',
        description: 'Project in react js',
        image: Image2,
        link: 'https://github.com/javiermedinaj/cripto-react'
    },
    {
        id: 3,
        title: 'Card 3',
        description: 'comming soon',
        image: Image3,
        link: 'https://github.com/javiermedinaj'
    }
];


function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {cards.map(({ title, image, link, id, description }) => (
                    <div className="col-md-4" key={id}>
                        <Card imageSource={image} title={title} description={description} link={link} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards