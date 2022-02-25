import React from "react";
import Nav from "./containers/Nav/Nav";
import * as config from "./helpers/config";
import Theme from "./store/Theme";
import { AppStyled } from "./App.style";
import * as Sections from "./containers/Sections";
import Modal from "./components/UI/Modal/Modal";
function App() {
  const [showModel, setShowModal] = React.useState(false);
  const bookAppointmentHandler = () => {
    setShowModal(true);
  };
  const closeModelHandler = (e) => {
    setShowModal(false);
  };
  return (
    <Theme>
      <AppStyled>
        <Nav height={config.navHeight} />
        <Sections.Home bookAppointment={bookAppointmentHandler} />
        {showModel && <Modal removeModel={closeModelHandler}>Hello</Modal>}
        <Sections.Services />
        <Sections.Reviews />
        <Sections.Contact />
      </AppStyled>
    </Theme>
  );
}

export default App;

// nav
