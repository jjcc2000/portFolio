import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import "./index.css";
import Info from "./components/info";
import Links from "./components/links";
import ProjectDisplayer from "./components/projectDisplayer";
import Projects from "./components/projects";
import { Route, Routes } from "react-router-dom";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <GoogleReCaptchaProvider
        reCaptchaKey={`siteKey-${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`}
      >
        <Info />
        <Links />
        <ProjectDisplayer />
        <ContactForm />

        <Routes>
          <Route path="/:projectRepo" element={<Projects />} />
        </Routes>
      </GoogleReCaptchaProvider>
    </>
  );
}

export default App;
