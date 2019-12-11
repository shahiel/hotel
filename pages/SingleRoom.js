import React, {Component} from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'
export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
    // console.log(this.props)
    this.state = {
        slug: this.props.match.params.slug,
        defaultBcg
    };
    }
    static contextType = RoomContext;
    //componentDidMount() {}
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        /**if no room is found disply error */
        if(!room){
            return <div className="error">
                <h3>No such room could be found</h3>
                <Link to="/rooms" className="btn-primary">Back to rooms</Link>
            </div>
        }

        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        return (
            //display hero for featured rooms
            <> 
            <StyledHero img={images[0]}>
                <Banner title={`${name} room`}>
                    <Link to="/rooms"
                    className="btn-primary">
                        back to rooms
                    </Link>
                </Banner>
            </StyledHero>
            {/*displays images for single rooms*/}
            <section className="single-room">
            <div className="single-room-images">
            {images.map((item,index) =>{
            return  <img key={index} src={item} alt={name}/>
            })}
            </div>
            {/**Display the information for each room upon click */}
            <div className="single-room-info">
            <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
            </article>
            <article className="info"> 
            <h3>info</h3>
            <h6>price: R{price}</h6>
            <h6>size: {size} SQFT</h6>
            <h6>

                max capacity : {
                    capacity > 1 ? `${capacity} people`: `${capacity} person` //if capacity is one use person if more than one use people
                }
            </h6>
            <h6>{pets ? "pets allowed": "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included" //if breakfast prop is true display message if false leave empty
        }</h6>
            </article>
            </div>
            </section>
            {/**room extras*/}
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item, index) => {
                    return <li key={index}>- {item}</li>;
                    })}
                </ul>
            </section>
            </>
        )
    }
}