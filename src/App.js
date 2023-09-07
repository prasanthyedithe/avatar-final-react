import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src="jonas.jpeg" alt="jonas" className="avatar" />;
}
function Intro() {
  return (
    <p className="data">
      Full-stack web developer and teacher at Udemy. When not coding or
      preparing a course, I like to play board games, to cook (and eat), or to
      just enjoy the Portuguese sun at the beach.
    </p>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skills language="HTML+CSS" emoji="💪" bgcolor="green" />
      <Skills language="React" emoji="💪" bgcolor="blue" />
      <Skills language="Java Script" emoji="👶" bgcolor="yellow" />
      <Skills language="Angular" emoji="💪" bgcolor="green" />
      <Skills language="CSS" emoji="👶" bgcolor="pink" />
    </div>
  );
}
function Skills(props) {
  return (
    <div className="skill" style={{ background: props.bgcolor }}>
      <span>{props.language}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
