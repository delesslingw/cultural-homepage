import React from "react";
import useAPI from "../../hooks/useAPI";
import THEME from "../../THEME";
import FAQ from "./FAQ";
import Feature from "./Feature";
import Hero from "./Hero";
import Resources from "./Resources";
import Request from "./Request";
import DISCUS from "./DISCUS";
import Svg from "../../Components/Svg";

const Library = () => {
    const { content } = useAPI();
    const { libraryTitle, libraryDescription, libraryImage, libraryFAQ } = content[0].fields;
    // console.log(content[0].fields)

    return (
        <section>
            <Hero image={`${libraryImage.fields.file.url}`} title={libraryTitle} description={libraryDescription} />
            <Feature />
            <DISCUS />
            <Resources />
            <FAQ data={libraryFAQ} />
            <Request />
            <Svg
                style={{
                    backgroundColor: THEME.yellow,
                }}
                fill={THEME.navy}
                d="M0,32L48,74.7C96,117,192,203,288,208C384,213,480,139,576,101.3C672,64,768,64,864,85.3C960,107,1056,149,1152,160C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
        </section>
    );
};

export default Library;
