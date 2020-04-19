import React from 'react'
import './card.css'

const Card = props => (

    <div className="Card">
        <div className="BlogImage">
            <img src={props.image} />
        </div>
        <div className="Content">
            <div className="Tagline">
                <h6>{props.tags}</h6>
            </div>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        <div className="AuthorGroup">
            <img src={props.avatar} />
            <div className="NameDate">
                <h4>{props.name}</h4>
                <p>{props.date}</p>
            </div>
        </div>
        </div>
    </div> 
)

export default Card