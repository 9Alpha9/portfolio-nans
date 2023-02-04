import React from "react";
import "../components/landingPagesStyled/landingpagesStyled.css";
import DinamikaLogo from "../assets/logo/dinamika.png";
import PrapancaLogo from "../assets/logo/smk-prapanca-2-surabaya.jpeg";

export { DinamikaLogo, PrapancaLogo };

function EducationComp() {
    return (
        <>
            <div className="education__excRt mt-8 mb-8">
                <h1 className="heading__education_tlxSc">🧑‍💻 Education</h1>
                <div className="education__item flex flex-col xl:flex-row md:flex-row md:gap-10 xl:gap-20 lg:gap-20">
                    <div className="schools__item flex flex-col mt-8 mb-8">
                        <div className="education__name__gtxDa flex-initial">
                            <figure className="object-cover schools__logo">
                                <img
                                    src={DinamikaLogo}
                                    alt="Universitas Dinamika"
                                    className="pointer-events-none"
                                />
                            </figure>
                        </div>
                        <div className="education__item__gtxDa flex-initial align-middle pt-3">
                            <div className="education__name">
                                <h1 className="schools__name pt-8 pb-4">
                                    Dinamika Unersity
                                </h1>
                                <h1>Information System (S1)</h1>
                            </div>
                            <div className="education__graduate flex gap-4">
                                <span>Graduate :</span>
                                <h1>2017 - Presents</h1>
                            </div>
                        </div>
                    </div>
                    <div className="schools__item flex flex-col mt-8 mb-8">
                        <div className="education__name__gtxDa flex-initial">
                            <figure className="object-cover schools__logo">
                                <img
                                    src={PrapancaLogo}
                                    alt="SMK Prapanca 2 Surabaya"
                                    className="pointer-events-none"
                                />
                            </figure>
                        </div>
                        <div className="education__item__gtxDa flex-initial align-middle pt-3">
                            <div className="education__name">
                                <h1 className="schools__name pt-8 pb-4">
                                    SMK Prapanca 2 Surabaya
                                </h1>
                                <h1>Accounting</h1>
                            </div>
                            <div className="education__graduate flex gap-4">
                                <span>Graduate :</span>
                                <h1>2014 - 2017</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EducationComp;
