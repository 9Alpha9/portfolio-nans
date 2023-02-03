import React from "react";
import "../components/landingPagesStyled/landingpagesStyled.css";
import profilePictures from "../assets/photo/profile-pictures.jpg";
import profilePictures2 from "../assets/photo/profile-pictures-2.jpg";

export { profilePictures, profilePictures2 };
import styled from "styled-components";
import ProjectsPages from "./ProjectsPages";
import EducationComp from "../components/EducationComp";
import ContactLanding from "../components/ContactLanding";

function LandingPages() {
    const LandingStyled = styled.div`
        padding: 0;
    `;
    const HeaderStyledLanding = styled.div`
        margin: auto;
    `;

    const AboutStyledLanding = styled.div`
        margin: 3em 0;
    `;

    const AboutCodeSource = styled.div`
        margin: 1em 0;
        font-size: 0.3em;
    `;
    return (
        <>
            <LandingStyled className="wrapper__header  m-auto xl:p-0 px-5">
                <HeaderStyledLanding className="container py-3 px-8">
                    <section className="header__portfolio">
                        <div className="header__welcome flex flex-col">
                            <h1 className="hello ">
                                Hi
                                <span className="animate__animated animate__wobble animate-delay-3s inline-block">
                                    👋
                                </span>
                            </h1>
                            <span className="header__name">
                                My Name M. Aprilandi Nanu Dwi Firmansyah
                            </span>
                            <h1>
                                I'm a{" "}
                                <span className="highlight__text">
                                    Backend Web Developers
                                </span>
                            </h1>
                            <ContactLanding />
                        </div>
                        <section className="header__portfolio__banner">
                            <figure className="profile__pictures">
                                <img src={profilePictures2} alt="" />
                            </figure>
                        </section>
                    </section>
                    <AboutStyledLanding className="flex flex-col gap-6 xl:flex-row about__landing__section">
                        <div className="about__little about__heading basis-2/4">
                            About Me
                            <AboutCodeSource className="code">
                                <span>
                                    {"<php>"}
                                    <div className="code__dummy">
                                        {
                                            "if (Auth::attempt([$this->username()=> $request->me]))"
                                        }
                                        <br />
                                        {"$request->session()->regenerate();"}
                                        {"return redirect()->route('welcome');"}
                                    </div>
                                    {"<?>"}
                                </span>
                            </AboutCodeSource>
                        </div>
                        <div className="about__little about__item block">
                            <span className="uPreC90"></span>
                            <div className="text pt-6 pb-6">
                                I'm a web developer with the main focus on a
                                backend. I'm a fast learner, and I always
                                welcome new knowledge. I can work in Team, can
                                reveive instructionm and have always been a
                                curious one, that is why i love to learn and
                                experience new things.
                            </div>
                            <div className="skills skills__container relative">
                                <h3 className="skills__heading mt-6 mb-6">
                                    Skills
                                </h3>
                                <div class="flex skills__item gap-12 mt-6 mb-6">
                                    <div class="flex-none w-14 skill__name">
                                        Laravel
                                    </div>
                                    <div class="flex-initial w-64 skills__item__bar">
                                        <span className="xcUiT__bar bar__xcUL">
                                            90%
                                        </span>
                                    </div>
                                </div>
                                <div class="flex skills__item gap-12 mt-6 mb-6">
                                    <div class="flex-none w-14 skill__name">
                                        Php
                                    </div>
                                    <div class="flex-initial w-64 skills__item__bar">
                                        <span className="xcUiT__bar bar__rxCs">
                                            85%
                                        </span>
                                    </div>
                                </div>
                                <div class="flex skills__item gap-12 mt-6 mb-6">
                                    <div class="flex-none w-14 skill__name">
                                        Javascript
                                    </div>
                                    <div class="flex-initial w-64 skills__item__bar">
                                        <span className="xcUiT__bar bar__tRsa">
                                            80%
                                        </span>
                                    </div>
                                </div>
                                <div class="flex skills__item gap-12 mt-6 mb-6">
                                    <div class="flex-none w-14 skill__name">
                                        HTML
                                    </div>
                                    <div class="flex-initial w-64 skills__item__bar">
                                        <span className="xcUiT__bar bar__fgDa">
                                            75%
                                        </span>
                                    </div>
                                </div>
                                <div class="flex skills__item gap-12 mt-6 mb-6">
                                    <div class="flex-none w-14 skill__name">
                                        CSS
                                    </div>
                                    <div class="flex-initial w-64 skills__item__bar">
                                        <span className="xcUiT__bar bar__grFc">
                                            65%
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <EducationComp />
                        </div>
                    </AboutStyledLanding>
                    <ProjectsPages />
                </HeaderStyledLanding>
            </LandingStyled>
        </>
    );
}

export default LandingPages;
