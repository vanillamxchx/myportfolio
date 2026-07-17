import './App.css';
import profile from './profileimg.png';

function App() {
  return (
    <div className="App">
      <div className="glassdivheader">
        <div className="glassdivheaderbutton">
          <p>Projects</p>
        </div>
        <div className="glassdivheaderbutton">
          <p>About Me</p>
        </div>
        <div className="glassdivheaderbutton">
          <p>Contacts</p>
        </div>
      </div>
      <div className="glassdivcontent">
        <div className="glassdivcontentbox1">
          <h1>Hi! I'm John David Lano!</h1>
          <div className="imgborder">
            <img src={profile} alt="Profile"/>
          </div>
          <h2>About Me</h2>
          <p>An Information Technology student at NU MOA. Currently in his senior year of college.</p>
          <p>I am mostly interested in video games and would like to make one of my own in the future.</p>
        </div>
        <div className="glassdivcontentbox2">
          <div className="glassdivcontentboxsp">
            <h2>Programming Languages</h2>
            <div className="skillscontainer">
              <span className="skillbadge">Java</span>
              <span className="skillbadge">HTML</span>
              <span className="skillbadge">CSS</span>
              <span className="skillbadge">JavaScript</span>
            </div>
          </div>
          <div className="glassdivcontentboxsp">
            <h2>Projects</h2>
            <p>AutoFlow - Capstone Project</p>
            <p>Full Stack Library Management System</p>
          </div>
          <div className="glassdivcontentboxsp">
            <h2>Contact Information</h2>
            <p>johndavidlano@gmail.com</p>
            <p>09123456789</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
