import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import GradientSVG from "./GradientSVG";

function Skills() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        responsive: [
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
      const idCSS = "hello";
    
    return (
        <>
        
        <section id="skillsID" className="container-fluid skills-sec">
            <div className="skill-sec-cont">
                <h2 className="text-center fs-1 fw-bold pt-5">Skills</h2>
                <p className="skill-p01 text-center my-3">You Can See My Skills Here</p>
                <div className="slider-container prog-cont">
                <GradientSVG />
                    <Slider {...settings}>
                        <div className="">
                            <div className="progress-itm" style={{height: 150, width: 150}}>
                                <CircularProgressbar
                                    strokeWidth={8}
                                    value= {85}
                                    text={"85%"}
                                    styles={{
                                        path: { stroke: `url(#${idCSS})`, height: "100%" },
                                        trail: {
                                        stroke: "#2e2e2e",
                                        }
                                    }}
                                />
                            </div>
                            <h5 className="text-center py-3">JavaScript</h5>
                        </div>
                        <div className="">
                            <div className="progress-itm" style={{height: 150, width: 150}}>
                                <CircularProgressbar
                                    strokeWidth={8}
                                    value= {82}
                                    text={"82%"}
                                    styles={{
                                        path: { stroke: `url(#${idCSS})`, height: "100%" },
                                        trail: {
                                        stroke: "#2e2e2e",
                                        }
                                    }}
                                />
                            </div>
                            <h5 className="text-center py-3">React.js</h5>
                        </div>
                        <div className="">
                            <div className="progress-itm" style={{height: 150, width: 150}}>
                                <CircularProgressbar
                                    strokeWidth={8}
                                    value= {87}
                                    text={"87%"}
                                    styles={{
                                        path: { stroke: `url(#${idCSS})`, height: "100%" },
                                        trail: {
                                        stroke: "#2e2e2e",
                                        }
                                    }}
                                />
                            </div>
                            <h5 className="text-center py-3">Problem Solving</h5>
                        </div>
                        <div className="">
                            <div className="progress-itm" style={{height: 150, width: 150}}>
                                <CircularProgressbar
                                    strokeWidth={8}
                                    value= {85}
                                    text={"85%"}
                                    styles={{
                                        path: { stroke: `url(#${idCSS})`, height: "100%" },
                                        trail: {
                                        stroke: "#2e2e2e",
                                        }
                                    }}
                                />
                            </div>
                            <h5 className="text-center py-3">HTML</h5>
                        </div>
                        <div className="">
                            <div className="progress-itm" style={{height: 150, width: 150}}>
                                <CircularProgressbar
                                    strokeWidth={8}
                                    value= {83}
                                    text={"83%"}
                                    styles={{
                                        path: { stroke: `url(#${idCSS})`, height: "100%" },
                                        trail: {
                                        stroke: "#2e2e2e",
                                        }
                                    }}
                                />
                            </div>
                            <h5 className="text-center py-3">CSS</h5>
                        </div>
                        <div className="">
                            <div className="progress-itm" style={{height: 150, width: 150}}>
                                <CircularProgressbar
                                    strokeWidth={8}
                                    value= {85}
                                    text={"85%"}
                                    styles={{
                                        path: { stroke: `url(#${idCSS})`, height: "100%" },
                                        trail: {
                                        stroke: "#2e2e2e",
                                        }
                                    }}
                                />
                            </div>
                            <h5 className="text-center py-3">Bootstrap</h5>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
        </>
    );
}

export default Skills;