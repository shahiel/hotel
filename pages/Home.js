import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import Featuredrooms from '../components/FeaturedRooms';

export default function Home() {
   return (
       <>
    <Hero hero="defaultHero">
        <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at R299">
        <Link to="/rooms" className="btn-primary">
            our rooms
        </Link>
        </Banner>
    </Hero>
    <Services/>
    <Featuredrooms/>

    </>
   )};

