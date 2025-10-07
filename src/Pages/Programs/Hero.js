import React from "react";
import useAPI from "../../hooks/useAPI";
import THEME from "../../THEME";
import HeroComponent from "../Library/Hero";
const Hero = () => {
    const { content } = useAPI();
    const { programsImage, programsDescription, programsTitle } = content[0].fields;
    return (
        <HeroComponent
            title={programsTitle}
            description={programsDescription}
            image={`${programsImage.fields.file.url}`}
            backgroundColor={THEME.teal}
        />
    );
};
export default Hero;
