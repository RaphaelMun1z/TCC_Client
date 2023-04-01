//import Carousel from "./Carousel/Carousel"
import { useRef } from 'react';
import Landing from "./Landing/Landing"
import ContentSection from "./ContentSection/ContentSection.js"
import styles from './Home.module.css'
import ContentCards from "./ContentCards/ContentCards"

import img1 from '../../../img/imgContent1.png'
import img2 from '../../../img/imgContent2.png'
import img3 from '../../../img/imgContent3.png'

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



<div class="line-step">
  <div class="step active">
    <svg class="line-svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="#007bff" />
    </svg>
    Passo 1
  </div>
  <div class="step">
    <svg class="line-svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" stroke="#ccc" fill="none" />
    </svg>
    Passo 2
  </div>
  <div class="step">
    <svg class="line-svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" stroke="#ccc" fill="none" />
    </svg>
    Passo 3
  </div>
  <div class="step">
    <svg class="line-svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" stroke="#ccc" fill="none" />
    </svg>
    Passo 4
  </div>
</div>


        </>
    )
}

export default Home