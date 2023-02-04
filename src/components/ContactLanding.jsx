import React from "react";
import "../components/landingPagesStyled/landingpagesStyled.css";

function ContactLanding() {
    return (
        <>
            <div className="contact__landing__QreSt flex flex-col justify-between xl:pt-32 pt-10 text-xs xl:text-lg">
                <div className="mail__contact__RweTs  pt-3">
                    ✉️ aprilandinanudwifirmansyah@gmail.com
                </div>
                <div className="telp__contact__TewSd pt-3">
                    ☎️ (+62)821-1684-9433
                </div>
                <div className="location__contact__EbWEq pt-3">
                    📍 Jl. Raya Semampir AWS No.8, Surabaya, Jawa Timur.
                </div>
            </div>
        </>
    );
}

export default ContactLanding;
