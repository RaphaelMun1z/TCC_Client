import ContentSection from "./Home/ContentSection/ContentSection"
import img1 from '../../img/aboutus.png'

function About() {
    return (
        <ContentSection
            title='Somos a equipe FindForMe'
            paragraph='Aut vitae consequatur qui minima ipsa id libero repudiandae id voluptas amet qui officia suscipit. Aut praesentium voluptas rem illo aliquam ut minus doloremque qui saepe nisi non illum autem'
            btnText='Saiba Mais'
            img={img1}
            type={1}
        />
    )
}

export default About