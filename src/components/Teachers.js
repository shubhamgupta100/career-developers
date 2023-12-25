import React from 'react';
import BG from "../assets/image/BG.jpeg"
import RS from "../assets/image/RS.jpeg"
import SP from "../assets/image/SP.jpeg"
import SY from "../assets/image/SY.jpeg"
import AG from "../assets/image/AG.jpeg"
import AY from "../assets/image/ARADHYA.jpeg"
const Teachers = () => {
    return (<section className="team-section" id="teachers">
        <div className="heading">
            <h1>
                Our Teachers
            </h1>
        </div>
        <div className="profiles">
            {
                teachers.map((item , index) => {
                    return <ul className="cards" key={index}>
                        <li>
                            <span className="card">
                                <img src={item.img} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                            <path />
                                        </svg>
                                        <img className="card__thumb" src={item.img} alt="" />
                                        <div className="card__header-text">
                                            <h3 className="card__title">{item.name}</h3>
                                            <span className="card__status">{item.education}</span>
                                        </div>
                                    </div>
                                    <p className="card__description">{item.detail + " "+item.subject}</p>
                                </div>
                            </span>
                        </li>
                    </ul>
                })
            }
        </div>
    </section>
    )
}
export default Teachers;

const teachers = [
    {
        img: BG,
        name: 'Bhoopesh Gupta',
        subject: 'CHEMISTRY',
        education: 'B.sc , B.Ed',
        detail: 'NDA WRITTEN QUILIFY, CGL WRITTEN QUILIFY and having 8 years of teaching experienc in'
    },
    {
        img: SP,
        name: 'S.P SIR (CMD)',
        subject: 'ENGLISH AND PSYCHOLOGY',
        education: 'M.A. , B.Ed',
        detail: 'NDA WRITTEN QUILIFY, CGL WRITTEN QUILIFY and having 8 years of teaching experience in'
    },
    {
        img: RS,
        name: 'R.S Sir',
        subject: 'HINDI',
        education: 'M.A. B.Ed',
        detail: 'Having 5 years of teaching experience in'
    },
    {
        img: SY,
        name: 'Shivanand Yadav',
        subject: 'SANSKRIT',
        education: 'P.hd (Sanskrit)',
        detail: 'Having 15 years of teaching experience in'
    },
    {
        img: AY,
        name: 'Aradhya',
        subject: 'COMPUTER',
        education: 'M.Sc,CCC ,ADCA,Olevel',
        detail: 'Having teaching experience of 3 years in'
    },
    {
        img: AG,
        name: 'Aparna Gupta',
        subject: 'COMPUTER & SCIENCE ',
        education: 'Bsc(Biology, Chemistry) B.ed , ADCA , OLevel',
        detail: 'CTET PRIMARY QUALIFIED ,6 months of English language and grammar with personality development and having 2 years of teaching experience in'
    },

];