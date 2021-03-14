import Header from "../../components/Header";
import { SiGithub, SiLinkedin } from 'react-icons/si';

const Home = () => {
  return(
    <>
      <Header />
      <main>
      <div id="social-media">
        <a href="https://github.com/douglasCajueiro"><SiGithub />GitHub</a>
        <a href="https://www.linkedin.com/in/douglas-cajueiro/"><SiLinkedin />Linkedin</a>

    </div>

    <div id="about-me">
        <h4>About me</h4>
        <p>I love to meet new people and put a smile on everyone's face.
            <br />In my opinion, a happy person can work even better.</p>
        <ul>
            <li><strong>Currently studying at <a href="https://www.betrybe.com/">Trybe</a>.</strong></li>
            <li>I'm from Rio de Janeiro, Brazil.</li>

        </ul>
    </div>

    <div id="top-skills">
        <h4>Top skills</h4>
        <ul>
            <li><em>Communication</em></li>
            <li>Problem Solving</li>
            <li>Patience</li>
            <li>Creativity</li>
            <li>Dinamism</li>
        </ul>
    </div>

    <div class="hobbies">

        <h4>My hobbies</h4>

        <ul>
            <li><u>To play with my Daughter</u></li>
            <li>Solving Rubik's cubes</li>
            <li>To juggle</li>

        </ul>
    </div>


    <div id="websites">
        <h4>Websites I usually visit</h4>
        <a href="https://www.betrybe.com/">Trybe</a>
        <a href="https://www.codecademy.com/">Codecademy</a>
        <a href="https://github.com/">GitHub</a>
    </div>
      </main>
    </>
  );
}

export default Home;