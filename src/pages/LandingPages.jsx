import React from "react";
import "../components/landingPagesStyled/landingpagesStyled.css";
import profilePictures from "../assets/photo/profile-pictures.jpg";
import profilePictures2 from "../assets/photo/profile-pictures-2.jpg";

export { profilePictures, profilePictures2 };

import styled from "styled-components";

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
                        <span className="header__welcome">
                            <h1 className="hello">Hi 👋</h1>
                            <span className="header__name">
                                My Name M. Aprilandi Nanu Dwi Firmansyah
                            </span>
                            <h1>
                                I'm a{" "}
                                <span className="highlight__text">
                                    Backend Web Developers
                                </span>
                            </h1>
                        </span>
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
                                            "if (Auth::attempt([$this->username() => $request->me])) { "
                                        }
                                        {"$request->session()->regenerate();"}
                                        {"return redirect()->route('welcome');"}
                                    </div>
                                    {"<?>"}
                                </span>
                            </AboutCodeSource>
                        </div>
                        <div className="about__little about__item block">
                            <span></span>
                            <div className="text pt-6 pb-6">
                                I'm a web developer with the main focus on a
                                backend. I'm a fast learner, and I always
                                welcome new knowledge. I can work in Team, can
                                reveive instructionm and have always been a
                                curious one, that is why i love to learn and
                                experience new things.
                            </div>
                        </div>
                    </AboutStyledLanding>
                </HeaderStyledLanding>
            </LandingStyled>
        </>
    );
}

export default LandingPages;
