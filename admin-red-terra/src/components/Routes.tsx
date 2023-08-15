import { Routes as Router, Route, Navigate } from 'react-router-dom'
import Navigation from './Navigation'
import ProtectedRoute from './ProtectedRoute'
import SignIn from '../views/SignIn'
import Users from '../views/users/Users'
import CreateUser from '../views/users/CreateUser'
import EditUser from '../views/users/EditUser'
import ForgotPassword from '../views/ForgotPassword'
import Header from '../views/headers/Header'
import UpdatePassword from '../views/UpdatePassword'
import Contact from '../views/Contact'
import Home from '../views/Home'
import Links from '../views/headers/Links'
import EditLink from '../views/headers/EditLink'
import WhatWeDo from '../views/whatWeDo/WhatWeDo'
import ListCredits from '../views/whatWeDo/ListCredits'
import CreateCredit from '../views/whatWeDo/CreateCredit'
import EditCredit from '../views/whatWeDo/EditCredit'
import Documentaries from '../views/whatWeDo/ListDocumentary'
import EditDocumentaries from '../views/whatWeDo/EditDocumentary'
import CreateDocumentaries from '../views/whatWeDo/CreateDocumentary'
import WhatsHappening from '../views/whatsHappening/WhatsHappening'
import News from '../views/whatsHappening/News'
import EditNews from '../views/whatsHappening/EditNews'
import CreateNews from '../views/whatsHappening/CreateNews'
import Footer from '../views/footer/Footer'
import FooterLinks from '../views/footer/Links'
import EditFooterLink from '../views/footer/EditFooterLink'
import Awards from '../views/awards/Awards'
import CreateAward from '../views/awards/CreateAward'
import EditAward from '../views/awards/EditAward'
import WhoWeAre from '../views/WhoWeAre/WhoWeAre'
import ClientReviews from '../views/WhoWeAre/ClientReviews'
import CreateClientReview from '../views/WhoWeAre/CreateClientReview'
import Rdn from '../views/WhoWeAre/Rdn'
import CreateRnd from '../views/WhoWeAre/CreateRnd'
import Team from '../views/WhoWeAre/Team'
import CreateTeam from '../views/WhoWeAre/CreateTeam'
import EditClientReview from '../views/WhoWeAre/EditClientReview'
import EditRdn from '../views/WhoWeAre/EditRdn'
import EditTeam from '../views/WhoWeAre/EditTeam'

function Routes() {
  return (
    <Router>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/update-password" element={<UpdatePassword />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute redirectPath="/signin">
            <Navigation />
          </ProtectedRoute>
        }
      >
        <Route path="awards">
          <Route index element={<Awards />} />
          <Route path="create" element={<CreateAward />} />
          <Route path="edit/:id" element={<EditAward />} />
        </Route>

        <Route path="users">
          <Route index element={<Users />} />
          <Route path="create" element={<CreateUser />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Route>

        <Route path="footers">
          <Route index element={<Footer />} />
          <Route path="links" element={<FooterLinks />} />
          <Route path="edit/:id" element={<EditFooterLink />} />
        </Route>

        <Route path="headers">
          <Route index element={<Header />} />
          <Route path="links" element={<Links />} />
          <Route path="edit/:id" element={<EditLink />} />
        </Route>

        <Route path="whatsHappening">
          <Route index element={<WhatsHappening />} />
          <Route path="news" element={<News />} />
          <Route path="news/edit/:id" element={<EditNews />} />
          <Route path="news/create" element={<CreateNews />} />
        </Route>

        <Route path="contact" element={<Contact />} />
        <Route path="home" element={<Home />} />
        <Route path="whatWeDo">
          <Route index element={<WhatWeDo />} />
          <Route path="credits" element={<ListCredits />} />
          <Route path="credits/create" element={<CreateCredit />} />
          <Route path="credits/edit/:id" element={<EditCredit />} />
          <Route path="documentaries" element={<Documentaries />} />
          <Route path="documentaries/edit/:id" element={<EditDocumentaries />} />
          <Route
            path="documentaries/create"
            element={<CreateDocumentaries />}
          />
        </Route>

        <Route path="whoWeAre">
          <Route index element={<WhoWeAre />} />
          <Route path="clientReviews" element={<ClientReviews />} />
          <Route path="clientReviews/create" element={<CreateClientReview />} />
          <Route path="clientReviews/edit/:id" element={<EditClientReview />} />
          <Route path="rdn" element={<Rdn />} />
          <Route path="rdn/create" element={<CreateRnd />} />
          <Route path="rdn/edit/:id" element={<EditRdn />} />
          <Route path="team" element={<Team />} />
          <Route path="team/create" element={<CreateTeam />} />
          <Route path="team/edit/:id" element={<EditTeam />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/admin" replace />}></Route>
    </Router>
  )
}

export default Routes
