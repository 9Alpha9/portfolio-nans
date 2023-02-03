import React from "react";
import "../components/projectsPagesStyled/projectsPagesStyled.css";
import styled from "styled-components";

const ProjectsPages = () => {
    const ProjectsStyled = styled.div`
        margin: 3rem 0;
    `;
    return (
        <>
            <ProjectsStyled>
                <h1>Testing Projects</h1>
            </ProjectsStyled>
        </>
    );
};

export default ProjectsPages;
