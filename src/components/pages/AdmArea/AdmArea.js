import styles from './AdmArea.module.scss'
import { Link } from "react-router-dom"
import ContentSection from '../../ContentSection/ContentSection'
import CreateDonateForm from '../../CreateDonateForm/CreateDonateForm'
import MyDonates from '../../MyDonates/MyDonates'
import DonationsReceived from '../../DonationsReceived/DonationsReceived'
import img1 from '../../../img/imgContent2.png'

function AdmArea() {
    return (
        <>
            <ContentSection
                title='Área de gerenciamento'
                paragraph='Aqui você você pode controlar o sistema.'
                btnText='Saiba Mais'
                img={img1}
                type={2}
            />
            <CreateDonateForm />
            <MyDonates/>
            <DonationsReceived/>
        </>
    )
}

export default AdmArea