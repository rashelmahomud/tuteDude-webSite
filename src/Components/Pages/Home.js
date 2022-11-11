import React from 'react';
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
        </div>
    );
};

export default Home;