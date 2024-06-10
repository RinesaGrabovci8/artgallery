import React, { useState } from 'react';
import Loader from '../Components/Loader';
import Navbar from '../Components/Navbar';
import Section1 from '../Sections/Section1';
import Section2 from '../Sections/Section2';
import Section3 from '../Sections/Section3';
import Section4 from '../Sections/Section4';
import Footer from '../Components/Footer';


const Home = () => {
    const [showLoader, setShowLoader] = useState(true);

    return (
        <div>
            {showLoader ? <Loader setShowLoader={setShowLoader} /> :
                (
                    <>
                        <Navbar />
                        <Section1 />
                        <Section2 />
                        <Section3 />
                        <Section4 />
                        <Footer />
                    </>

                )}
        </div>
    );
};

export default Home;
