//import Carousel from "./Carousel/Carousel"
//import styles from './Home.module.scss'

import Landing from "./Landing/Landing"
import ContentCards from "./ContentCards/ContentCards"
import HowItWorks from '../HowItWorks/HowItWorks';
import Contact from '../Contact/Contact';

//import ContentSection from "./ContentSection/ContentSection.js"

function Home() {
    return (
        <>
            <Landing />
            <ContentCards />
            {/*
            <ContentSection 
                title='Quem Somos?'
                paragraph='Aut vitae consequatur qui minima ipsa id libero repudiandae id voluptas amet qui officia suscipit. Aut praesentium voluptas rem illo aliquam ut minus doloremque qui saepe nisi non illum autem'
                btnText='Saiba Mais'
                img={img1}
                type={1}
            />
            <ContentSection
                title='Como o APP funciona?'
                paragraph='Aut vitae consequatur qui minima ipsa id libero repudiandae id voluptas amet qui officia suscipit. Aut praesentium voluptas rem illo aliquam ut minus doloremque qui saepe nisi non illum autem'
                btnText='Saiba Mais'
                img={img2}
                type={2}
            />
            <ContentSection
                title='Como entro em contato?'
                paragraph='Aut vitae consequatur qui minima ipsa id libero repudiandae id voluptas amet qui officia suscipit. Aut praesentium voluptas rem illo aliquam ut minus doloremque qui saepe nisi non illum autem'
                btnText='Saiba Mais'
                img={img3}
                type={1}
            />
            */}

            <HowItWorks/>
            <Contact/>

        </>
    )
}

export default Home