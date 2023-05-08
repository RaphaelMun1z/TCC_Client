import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'

// Pages
import Home from '../components/pages/Home/Home'
import About from '../components/pages/About'
import HowWorks from '../components/pages/HowWorks/HowWorks';
import Contact from '../components/pages/Contact'

import Donates from '../components/pages/Donates/Donates';
import Projects from '../components/pages/Projects/Projects';
import MajorDonors from '../components/pages/MajorDonors/MajorDonors';
import MajorOrgs from '../components/pages/MajorOrgs/MajorOrgs';

import AdmArea from '../components/pages/AdmArea/AdmArea'
import NewDonate from '../components/pages/Donates/NewDonate';
import Profile from '../components/pages/Profile/Profile';

import PageNotFound from '../components/layout/PageNotFound';

function PrivateRoutes() {
    return (

        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/howitworks' element={<HowWorks />}></Route>
            <Route path='/contact' element={<Contact />}></Route>

            <Route path='/donates' element={<Donates />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/majordonors' element={<MajorDonors />}></Route>
            <Route path='/majororgs' element={<MajorOrgs />}></Route>

            <Route path='/management' element={<AdmArea />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/newdonate' element={<NewDonate />}></Route>

            <Route path="*" element={<PageNotFound />} />
        </Routes>

    );
}

export default PrivateRoutes;
