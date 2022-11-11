import React from 'react';
import ExploreProgram from './ExploreProgram';
import FullRefound from './FullRefound';
import OurClient from './OurClient';
import RecepsSuccess from './RecepsSuccess';

const Home = () => {
    return (
        <div>

            <FullRefound />
            <ExploreProgram />
            <OurClient />
            <RecepsSuccess />
        </div>
    );
};

export default Home;