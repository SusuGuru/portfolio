import heroBg from "../assets/hero-bg.png";
import ProjectCard from "../components/ProjectCard";
import SkillTag from "../components/SkillTag";

export default function Home() {
  return (
    <section className="home">
      <div className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <h1>Crafting Seamless Mobile Experiences</h1>
        <button className="btn">View My Work</button>
      </div>

      <section className="skills">
        <h2>Key Skills</h2>
        <div className="skill-tags">
          <SkillTag text="Mobile App Development" />
          <SkillTag text="React" />
          <SkillTag text="UI/UX Design" />
        </div>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <ProjectCard title="Finance Tracker App" image="project1.png" />
          <ProjectCard title="Social Media App" image="project2.png" />
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button className="btn">Send Message</button>
        </form>
      </section>
    </section>
  );
}
