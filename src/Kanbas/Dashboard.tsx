import { Link } from 'react-router-dom';
export default function Dashboard() {
  return (

      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <hr/>
        <h2 id="wd-dashboard-published">Published Courses (7)</h2>
        <hr/>
        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            <div className="wd-dashboard-course col" style={{width: "300px"}}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/react.jpg" alt="ReactJS Course" width="100%" height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS1234 React JS
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                    </p>
                    <button className="btn btn-primary"> Go</button>
                  </div>
                </Link>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{width: "300px"}}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/python.png" alt="Python for Data Science Course" width="100%"
                       height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS 4567
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Python Fundamentals
                    </p>
                    <button className="btn btn-primary"> Go</button>
                  </div>
                </Link>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{width: "300px"}}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/mgdb.png" alt="Python for Data Science Course" width="100%"
                       height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS 6123
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      MongoDB
                    </p>
                    <button className="btn btn-primary"> Go</button>
                  </div>
                </Link>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{width: "300px"}}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/nodejs.png" alt="Python for Data Science Course" width="100%"
                       height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS 6475
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      NodeJS
                    </p>
                    <button className="btn btn-primary"> Go</button>
                  </div>
                </Link>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{width: "300px"}}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/devops.jpg" alt="Python for Data Science Course" width="100%"
                       height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS 8000
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      DevOps
                    </p>
                    <button className="btn btn-primary"> Go</button>
                  </div>
                </Link>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{width: "300px"}}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/cloud.jpg" alt="Python for Data Science Course" width="100%"
                       height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS 4832
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Cloud
                    </p>
                    <button className="btn btn-primary"> Go</button>
                  </div>
                </Link>
              </div>
            </div>

            <div className="wd-dashboard-course col" style={{width: "300px"}}>
              <div className="card rounded-3 overflow-hidden">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                      to="/Kanbas/Courses/1234/Home">
                  <img src="/images/angular.png" alt="Python for Data Science Course" width="100%"
                       height={160}/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS 6667
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Angular JS
                    </p>
                    <button className="btn btn-primary"> Go</button>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>


  );
}
