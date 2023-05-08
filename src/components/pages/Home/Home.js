//import Carousel from "./Carousel/Carousel"
//import styles from './Home.module.scss'

import Landing from "./Landing/Landing"
import ContentCards from "../../ContentCards/ContentCards"
import HowItWorks from '../../HowItWorks/HowItWorks';
import Contact from '../../ContactForm/ContactForm';

//import ContentSection from "./ContentSection/ContentSection.js"

function Home() {
    return (
        <>
            <Landing />
            <ContentCards />
            <HowItWorks />
            <Contact />
        </>
    )
}

export default Home