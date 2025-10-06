import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="profile-header">
        <img src={profile} alt="Profile" />
        <div>
          <h1>Soraya Brayka</h1>
          <p>
            I’m a front-end developer passionate about building modern,
            responsive web and mobile experiences that delight users and drive
            impact.
          </p>
          <button className="btn">Download Resume</button>
        </div>
      </div>

      <div className="journey">
        <h2>My Journey</h2>
        <ul>
          <li><strong>2025 - Present:</strong> Learning Full-Stack Development at ALX.</li>
          <li><strong>2024:</strong> Research Assistant at University of Ghana.</li>
          <li><strong>2023:</strong> Certified Virtual Assistant at ALX VA Program.</li>
        </ul>
      </div>

      <div className="skills">
        <h2>Skills & Interests</h2>
        <div className="skill-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>UI Design</span>
          <span>Canva</span>
          <span>CapCut</span>
        </div>
      </div>
    </section>
  );
}
