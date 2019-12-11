import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:"Free cocktails on arrival and after 7pm" 
            },
            {
                icon:<FaHiking/>,
                title:"Hiking Trails ",
                info:"Choose from 3 different hiking trails. Our 1km, 5km and 7km trails are for beginner to professional" 
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle Services",
                info:"Free shuttle services from and to airport" 
            },
            {
                icon:<FaBeer/>,
                title:"Craft Beers",
                info:"Selection of local and international craft beers" 
            }
        ]
    }
    render() {
        return (
           //Display the services div
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                {this.state.services.map((item, index) => {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
                </div>
            </section>
        )
    }
}