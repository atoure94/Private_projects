import React from 'react';
import {Imm, Maison} from "../../assets";
import Navbar from "../../components/Navbar/Navbar.tsx";
import Hero from "../../components/Hero.tsx";
import PseudoElementStyle from "../../components/Background.tsx";


const backgroundStyle = {
    position: 'relative',
    minHeight: '100vh',
};

function Landing() {
    return (
        <div style={backgroundStyle}>
            <div style={PseudoElementStyle({ url: Maison })}></div>
            <Navbar />
            <Hero />
        </div>
    );
}

export default Landing;
