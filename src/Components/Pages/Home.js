import React from 'react';
import Cetagoris from '../Cetagory/Cetagoris';
import CustomerQuery from './CustomerQuery';
import ExploreProgram from './ExploreProgram';
import FullRefound from './FullRefound';
import OurClient from './OurClient';
import OurOffers from './OurOffers';
import RecepsSuccess from './RecepsSuccess';

const Home = () => {
    return (
        <div>

            <FullRefound />
            <ExploreProgram />
            <OurClient />
            <RecepsSuccess />
            <OurOffers />
            <Cetagoris />
            <CustomerQuery />
        </div>
    );
};

export default Home;