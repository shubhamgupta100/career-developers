import React from 'react';

const Courses = () => {
    return (
        <React.Fragment>
            <section className="team-section" id="courseSection">
                <div>
                    <h1 className="heading">Our Courses</h1>

                    <div className="profiles">
                        {
                            courses.map((item , index) => {
                                return <div className="course-cards" key={index}>
                                    <article className="plan [ card ]" style={{ borderRadius: "15px" }}>
                                        <div className="inner">
                                            <h2 className="title">{item.name}</h2>
                                            <p className="info">{item.detail}
                                            </p>
                                            <ul className="features">
                                                <li>
                                                    <span className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                                            height="24">
                                                            <path fill="none" d="M0 0h24v24H0z" />
                                                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                                                fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <span>{item.pt1}</span>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                                            height="24">
                                                            <path fill="none" d="M0 0h24v24H0z" />
                                                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                                                fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <span>{item.pt2}</span>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                                            height="24">
                                                            <path fill="none" d="M0 0h24v24H0z" />
                                                            <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                                                fill="currentColor" />
                                                        </svg>
                                                    </span>
                                                    <span>{item.pt3}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>

                                </div>
                            })
                        }

                        {/* <div className="course-cards">
                            <article className="plan [ card ]" style={{ borderRadius: "15px" }}>
                                <div className="inner">
                                    <h2 className="title">Professional</h2>
                                    <p className="info">This plan is for those who have a team already and running a large business.
                                    </p>
                                    <ul className="features">
                                        <li>
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                                    height="24">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                                        fill="currentColor" />
                                                </svg>
                                            </span>
                                            <span><strong>20</strong> team members</span>
                                        </li>
                                        <li>
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                                    height="24">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                                        fill="currentColor" />
                                                </svg>
                                            </span>
                                            <span>Plan <strong>team meetings</strong></span>
                                        </li>
                                        <li>
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                                    height="24">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                                        fill="currentColor" />
                                                </svg>
                                            </span>
                                            <span>File sharing</span>
                                        </li>
                                    </ul>
                                </div>
                            </article>

                        </div>
                        <div className="course-cards">
                            <article className="plan [ card ]" style={{ borderRadius: "15px" }}>
                                <div className="inner">
                                    <h2 className="title">Professional</h2>
                                    <p className="info">This plan is for those who have a team already and running a large business.
                                    </p>
                                    <ul className="features">
                                        <li>
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                                    height="24">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                                        fill="currentColor" />
                                                </svg>
                                            </span>
                                            <span><strong>20</strong> team members</span>
                                        </li>
                                        <li>
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                                    height="24">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                                        fill="currentColor" />
                                                </svg>
                                            </span>
                                            <span>Plan <strong>team meetings</strong></span>
                                        </li>
                                        <li>
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                                    height="24">
                                                    <path fill="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                                        fill="currentColor" />
                                                </svg>
                                            </span>
                                            <span>File sharing</span>
                                        </li>
                                    </ul>
                                </div>
                            </article>

                        </div> */}
                    </div>

                </div>
            </section>
        </React.Fragment >
    )
}
export default Courses;

const courses = [
    {
        name: "Competition",
        detail: 'U.P Police ,TET, CTET ,SSC etc for more info please call or text us.',
        pt1: 'Morning Batch',
        pt2: 'Doubt resolve facility',
        pt3: 'Test Series'
    },
    {
        name: "Academics",
        detail: 'All academics courses are available call us for more info',
        pt1: 'Morning Batch',
        pt2: 'Doubt resolve facility',
        pt3: 'Test Series'
    },
    {
        name: "Computer",
        detail: 'Please call us or text us for course related information.',
        pt1: 'Morning Batch',
        pt2: 'Doubt resolve facility',
        pt3: 'Practical'
    }
]