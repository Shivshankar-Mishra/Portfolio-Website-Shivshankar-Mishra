import OtherProject from "./OtherProject";
import UxDesignProject from "./UxDesignProject";
import WebDevProject from "./WebDevProject";
import Connect from "./Connect";

const Projects = () => {
  return (
    <section>
      <WebDevProject />
      <UxDesignProject />
      <div id="otherprojects">
        <OtherProject />
      </div>
      <Connect />
    </section>
  );
};

export default Projects;
