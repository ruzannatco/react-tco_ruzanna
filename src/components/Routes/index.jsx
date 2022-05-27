import {Route, Routes} from "react-router-dom";
import {AboutPage} from "../../pages/AboutMe";
import {ProjectPage} from "../../pages/Project";
import {ContactPage} from "../../pages/Contact";
import {NotFound404Page} from "../../pages/404";
import {SingleTask} from "../../pages/SingleTask";

export const RoutesComponent = () => {
    return (
      <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/:taskId" element={<SingleTask />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound404Page />} />
      </Routes>
    );
}