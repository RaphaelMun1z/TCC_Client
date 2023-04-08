import HowItWorks from "../../HowItWorks/HowItWorks"
import ContentSection from "../../ContentSection/ContentSection"

import img1 from '../../../img/imgCarousel1.png'
import img2 from '../../../img/imgCarousel2.png'
import img3 from '../../../img/imgCarousel3.png'

function HowWorks() {
    return (
        <>
            <HowItWorks />
            <ContentSection 
                title='Passo 1'
                paragraph='Aut vitae consequatur qui minima ipsa id libero repudiandae id voluptas amet qui officia suscipit. Aut praesentium voluptas rem illo aliquam ut minus doloremque qui saepe nisi non illum autem'
                btnText='Saiba Mais'
                img={img1}
                type={1}
            />
            <ContentSection
                title='Passo 2'
                paragraph='Aut vitae consequatur qui minima ipsa id libero repudiandae id voluptas amet qui officia suscipit. Aut praesentium voluptas rem illo aliquam ut minus doloremque qui saepe nisi non illum autem'
                btnText='Saiba Mais'
                img={img2}
                type={2}
            />
            <ContentSection
                title='Passo 3'
                paragraph='Aut vitae consequatur qui minima ipsa id libero repudiandae id voluptas amet qui officia suscipit. Aut praesentium voluptas rem illo aliquam ut minus doloremque qui saepe nisi non illum autem'
                btnText='Saiba Mais'
                img={img3}
                type={1}
            />
        </>
    )
}

export default HowWorks