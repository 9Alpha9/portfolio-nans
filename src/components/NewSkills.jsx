import React from "react";
import "../components/landingPagesStyled/landingpagesStyled.css";

function NewSkills() {
    return (
        <>
            <div className="skills__wrapper__cxeEt flex flex-col">
                <h3 className="skills__heading mt-6 mb-6">❤️ New Skills</h3>
                <div class="flex skills__item gap-12 mt-6 mb-6">
                    <div class="flex-none w-10 md:w-16 lg:w-28 xl:w-1/4 skill__name">
                        Css
                    </div>
                    <div class="flex-initial w-64 skills__item__bar">
                        <span className="bar__Rqwq bar__cssScss">20%</span>
                    </div>
                </div>
                <div class="flex skills__item gap-12 mt-6 mb-6">
                    <div class="flex-none w-10 md:w-16 lg:w-28 xl:w-1/4 skill__name m-0 p-0">
                        React. Js
                    </div>
                    <div class="flex-initial w-64 skills__item__bar">
                        <span className="bar__Rqwq bar__cssReactJs">15%</span>
                    </div>
                </div>
                <div class="flex skills__item gap-12 mt-6 mb-6">
                    <div class="flex-none w-10 md:w-16 lg:w-28 xl:w-1/4 skill__name">
                        Node. Js
                    </div>
                    <div class="flex-initial w-64 skills__item__bar">
                        <span className="bar__Rqwq bar__cssNode">10%</span>
                    </div>
                </div>
                <div class="flex skills__item gap-12 mt-6 mb-6">
                    <div class="flex-none w-10 md:w-16 lg:w-28 xl:w-1/4 skill__name">
                        Tailwind Css
                    </div>
                    <div class="flex-initial w-64 skills__item__bar">
                        <span className="bar__Rqwq bar__cssTailwindCss">
                            15%
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewSkills;
