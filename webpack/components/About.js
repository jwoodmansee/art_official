import React from 'react';
import together from '../images/together.jpg';
import alex from '../images/alex.jpg';
import ann from '../images/ann.jpg';
import bryan from '../images/bryan.jpg';
import justin from '../images/justin.jpg';
import { Link } from 'react-router';

const About = () => (
  <div>
    <div className='row'>
      <div className='container'>
        <div className='row-color col-xs-12 col-sm-9'>
          <h1 className="header-text" id='story'>About Us</h1>
          <br />
          <h4 className='lead'><strong>Our story</strong></h4> <p>...is as refreshingly simple as our core purpose: A few creative individuals connected with eachother, collaborated creatively, and created a project together. In the age of endless self-promotion, we recognize that there are more things pulling you away from the creative process than ever before. Enter  c o \\ art.
            <br />
            <br />
          <i> Simply put,</i> this website is not designed to make you famous. We are designed to connect artists together, with the hope that new art will be created and put into the world. It's no secret that it can be tough meeting other artists to collaborate with. Currently you can spend hours sifting through social media and online forums, or physically attend local art/music events to network - both of which definitely have their place, but our hope is to give you more direct access. The last thing artists need is another time consuming promotional/social channel to manage. We don't think soliciting for view-counts makes for an authentic community - that's why you don't see any 'like' buttons on our website. We are only as powerful as the users of our community, which means our only agenda is to connect open minded people together and enable creative output.</p>
        </div>
        <br />

        <div className='p-left col-xs-3'>
          <div className='enter-btn animate-btn'>
            <Link to='/sign_up'>Get Started</Link>
          </div>

          <br />
          <nav className='about-nav'>
            <ul>
              <li><a href="#story" className='header-text'> our story </a></li>
              <li><a href="#works" className='header-text'> how it works </a></li>
              <li><a href="#team" className='header-text'> the team </a></li>
              <li><a href="#arch" className='header-text'> the architecture </a></li>
            </ul>
          </nav>
        </div>

      </div>
    </div>

    <div className='row p-left'>
      <div className='container section-border' id='works'>
        <h4 className='lead'><strong>How it works</strong></h4> <p>Signup and create a profile. Add your existing work so people can see what you're all about. You can also create an open project, which becomes searchable by other users. From there, you can start browsing to find other artists, or open projects. If you see a profile or project that looks interesting, or you simply want to just start a conversation, you can send a direct message. If you collaborate with someone on the site and complete a project, we would love for you to send it to us and we will highlight it on our Featured page.
          <br />
          <br />
          We know we have a lot of room to improve. We are building this site in our free time and will never charge a penny for membership. With that said, we look to our community to grow with us, and report site issues as they are discovered.
        </p>

      </div>
    </div>
    <br />
    <br />
    <div className='container' id='team'>
      <div className="row">
        <h1 className="header-text">The Team</h1>
        <hr />
        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className='profile-pic'>
            <img className="img-rounded img-responsive" src={ann} alt="..." />
          </div>
          <div className="thumbnail">
            <div className="caption">
              <h3>Annie Hall</h3>
              <div> She puts the G in design </div>
              <p>AKA Annie Tha Danga, has been referred to as "..the hottest up and coming rapper from the streets of St. George, showing the world the real struggles of SG life", and "the most dangerous influence on our youth since NWA..". She puts the G in design, and gave us the edge and street cred needed to standout in this digital market.</p>
              <p><a href="https://www.linkedin.com/in/annie-hall-367280124" className="btn btn-primary" role="button" target="_blank">LinkedIn</a> <a href="https://github.com/amaesato" className="btn btn-default" role="button" target="_blank">GitHub</a></p>
            </div>
          </div>
        </div>

        <div className="col-xs-6 col-sm-4 col-md-3">
          <div className='profile-pic'>

            <img className="img-rounded img-responsive" src={alex} alt="..." />
          </div>
          <div className="thumbnail">
            <div className="caption">
              <h3>Alex Quan</h3>
              <p>The man with all the connections, it's no wonder the streets call him Quan-Ties. With a scattered past, little is known about the only man who is somehow one degree of seperation away from both the President of the United States, and an unknown basket merchant somewhere in the forgotten villages of yemen. Undoubtedly this wesbite would not be in front of you today without his efforts.</p>
              <p><a href="https://www.linkedin.com/in/alex-quan" className="btn btn-primary" role="button" target="_blank">LinkedIn</a> <a href="https://github.com/Alxquan" className="btn btn-default" role="button" target="_blank">GitHub</a></p>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-4 col-md-3">
          <img className="img-rounded img-responsive" src={justin} alt="..." />
          <div className="thumbnail">
            <div className="caption">
              <h3>Justin Woodmansee</h3>
              <p>What words can be said to describe a person who is a living, breathing scientific anomoly? Often referrred to in the medical community as the "white hole" of mortal human life, his ability to turn endless letters and numbers into useable products continually defies universal law. Only time will tell what his continual reduction of entropy will continue to add to our app.</p>
              <p><a href="https://www.linkedin.com/in/justin-woodmansee-940a19a8?trk=hp-identity-name" className="btn btn-primary" role="button" target="_blank">LinkedIn</a> <a href="https://github.com/jwoodmansee" className="btn btn-default" role="button" target="_blank">GitHub</a></p>
            </div>
          </div>
        </div>
        <div className="col-xs-6 col-sm-4 col-md-3">
          <img className="img-rounded img-responsive" src={bryan} alt="..." />
          <div className="thumbnail">
            <div className="caption">
              <h3>Bryan Anderson</h3>
              <p>Bryan, or Breezy Street as he's known in the underground SLC, is the father of this app. After spending years in the tutelage of a mysterious shaman, he was bestowed with a gift that allowed him to anticipate the needs of his fellow man. Ever altruistic, his goal with this app has been to bring all of mankind together and create a community where all are welcome. Through mutual collaboration, he knows we can achieve world peace. </p>
              <p><a href="https://www.linkedin.com/in/bryan-noble-anderson" className="btn btn-primary" role="button" target="_blank">LinkedIn</a> <a href="https://github.com/BryanAnderson84" className="btn btn-default" role="button" target="_blank">GitHub</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div>
        <h1 className="header-text" id='arch'>The Architecture</h1>
        <h3>Ruby on Rails</h3>
        <h3>React.js</h3>
      </div>
    </div>

)

export default About;
