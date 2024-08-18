import React, {useState} from 'react'
import './Qualification.css'
const Qualification = () => {
    const [toggleState,setToggleState]=useState(0);
    const toggleTab =(index) =>{
        setToggleState(index);
    };
 
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ?
                "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"}
                onClick={()=> toggleTab(1)}
                >
                    <i className="uil uil- qualification__cap"></i>
                    Education
                </div>
                
                <div className={toggleState === 2 ?
                "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"}
                onClick={()=> toggleTab(2)}
                >  
                     <i className="uil uil- briefcase-alt"></i>
                    Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div className={
                    toggleState === 1 ?
                "qualification__content qualification__content-active"
                :"qualification__content"
                } 
                
                >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Master of Computer Application</h3>
                            <span className="qualification__subtitle"> K.R Mangalam University</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2023 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                            
                        </div>
                    </div>

                    <div className="qualification__data">
                    <div>

                    </div>
                    <div>
                            <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                        </div>
                        <div>
                        <h3 className="qualification__title">Bachelor's of Computer Application</h3>
                            <span className="qualification__subtitle"> Asian School of Business, Noida</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2019 - 2022
                            </div>
                        </div>
                    </div>
                </div>

                <div className={
                    toggleState === 2 ?
                "qualification__content qualification__content-active"
                :"qualification__content"
                }
                 
                >                    
                <div className="qualification__data">
                    <div>
                            <h3 className="qualification__title">Web Development Internship</h3>
                            <span className="qualification__subtitle">Afame-Technologies</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                03 April 2024 - Present 
                     </div>


                    </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                            
                        </div>
                </div>
                

                <div className="qualification__data">
                <div>

                    </div>
                    <div>
                            <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title"></h3>
                            <span className="qualification__subtitle"> </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
