import { Link } from 'react-router-dom';
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1234/Home">
            <img src="images/react.jpg" width={200} alt="ReactJS Course"/>
            <div>
              <h5>CS1234</h5>
              <p className="wd-dashboard-course-title">Full Stack Software Developer</p>
              <button> Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/4567/Home">
            <img src="images/python.png" width={200} alt="Python for Data Science Course"/>
            <div>
              <h5>CS4567</h5>
              <p className="wd-dashboard-course-title">Python for Data Science</p>
              <button> Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
            <img src="images/mgdb.png" width={200} alt="MongoDB Course"/>
            <div>
              <h5>CS5678</h5>
              <p className="wd-dashboard-course-title">NoSQL Databases with MongoDB</p>
              <button> Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/2345/Home">
            <img src="images/nodejs.png" width={200} alt="Node.js Course"/>
            <div>
              <h5>CS2345</h5>
              <p className="wd-dashboard-course-title">Backend Development with Node.js</p>
              <button> Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/3456/Home">
            <img src="images/angular.png" width={200} alt="Angular Course"/>
            <div>
              <h5>CS3456</h5>
              <p className="wd-dashboard-course-title">Frontend Development with Angular</p>
              <button> Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/6620/Home">
            <img src="images/cloud.jpg" width={200} alt="Cloud Computing"/>
            <div>
              <h5>CS6620</h5>
              <p className="wd-dashboard-course-title">Cloud Computing</p>
              <button> Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/7000/Home">
            <img src="images/devops.jpg" width={200} alt="Devops"/>
            <div>
              <h5>CS7000</h5>
              <p className="wd-dashboard-course-title">Devops</p>
              <button> Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
