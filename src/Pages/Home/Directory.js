import { useState } from "react";
import THEME from "../../THEME";

import RichText from "../../Components/RichText";
import useAPI from "../../hooks/useAPI";
import Svg from "../../Components/Svg";

const Link = ({ link, i }) => {
    const [active, setActive] = useState(false);

    return (
        <a
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            href={link.fields.linkUrl}
            style={{
                color: THEME.black,
                textDecoration: "none",
                minWidth: "35vw",
                flex: 1,
                margin: 20,
                padding: 20,
                borderRadius: 10,
                transition: "box-shadow 0.1s ease-in",
                boxShadow: active ? "2px 2px 4px rgba(0,0,0,0.5)" : "1px 1px 2px rgba(0,0,0,0.5)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "stretch",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        backgroundImage: `url(${link.fields.linkImage.fields.file.url})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        display: "grid",
                        placeItems: "center",
                        overflow: "hidden",
                        position: "absolute",
                        borderRadius: 150,
                        width: 100,
                        height: 100,
                        top: -50,
                        left: -50,
                        boxShadow: active ? "2px 2px 4px rgba(0,0,0,0.5)" : "1px 1px 2px rgba(0,0,0,0.5)",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: THEME.teal,
                            display: "grid",
                            placeItems: "center",
                            transition: "opacity 0.2s ease-in",
                            opacity: active ? 0.8 : 0,
                        }}
                    >
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 398.468 398.468"
                            style={{ width: "40%", height: "40%" }}
                            fill={THEME.navy}
                        >
                            <path d="m369.662,28.812c-18.578-18.578-43.314-28.81-69.653-28.812-0.003,0-0.005,0-0.008,0-26.336,0-51.071,10.23-69.646,28.805l-82.738,82.739c-6.124,6.124-11.376,12.99-15.658,20.418-7.428,4.282-14.291,9.531-20.411,15.652l-82.739,82.739c-38.408,38.409-38.408,100.905 0,139.314 19.203,19.202 44.422,28.803 69.647,28.802 25.225-0.001 50.456-9.604 69.661-28.809l82.737-82.739c6.116-6.115 11.364-12.978 15.647-20.409 7.431-4.283 14.298-9.536 20.423-15.661l82.738-82.739c38.405-38.405 38.405-100.895-5.68434e-14-139.3zm-212.152,330.24c-32.563,32.56-85.541,32.563-118.095,0.007-32.561-32.561-32.561-85.541 0-118.101l82.739-82.739c5.63-5.63 11.988-10.401 18.903-14.182 20.166-11.043 44.313-13.258 66.254-6.076 12.511,4.094 23.594,10.91 32.942,20.258 8.275,8.275 14.557,17.899 18.721,28.655l-18.014,18.014c-3.335,3.335-7.232,5.871-11.514,7.529-1.081-11.048-5.912-21.421-13.941-29.449-10.499-10.499-25.017-15.556-39.803-13.873-10.852,1.225-21.08,6.152-28.802,13.873l-82.738,82.739c-18.913,18.914-18.913,49.689 0,68.603 9.147,9.147 21.324,14.184 34.291,14.184 0.003,0 0.006,0 0.009,0 12.968-0.002 25.148-5.042 34.298-14.191l58.208-58.208c8.607,2.373 17.448,3.559 26.272,3.559 7.463,0 14.909-0.85 22.183-2.517l-81.913,81.915zm112.894-183.606c-4.8-10.303-11.342-19.632-19.543-27.833-8.197-8.197-17.53-14.74-27.844-19.547l53.3-53.299c6.313-6.314 14.724-9.791 23.684-9.791 0.002,0 0.005,0 0.006,0 8.962,0.001 17.376,3.481 23.693,9.798 6.315,6.316 9.794,14.728 9.794,23.688 0,8.96-3.479,17.372-9.795,23.688l-53.295,53.296zm-65.504,18.129c5.702,5.702 9.064,13.121 9.677,21.001-7.879-0.616-15.297-3.98-20.998-9.681-5.698-5.699-9.063-13.117-9.683-21.001 7.882,0.618 15.303,3.981 21.004,9.681zm-76.83,29.44c4.807,10.314 11.351,19.646 19.548,27.843 8.201,8.201 17.531,14.744 27.831,19.543l-53.295,53.296c-6.316,6.317-14.73,9.796-23.693,9.798-0.002,0-0.003,0-0.006,0-8.959,0-17.371-3.477-23.684-9.791-13.065-13.066-13.065-34.325 0-47.39l53.299-53.299zm230.985-65.509l-82.738,82.739c-5.634,5.635-11.995,10.408-18.911,14.189-20.168,11.046-44.313,13.258-66.251,6.067-12.494-4.08-23.574-10.893-32.931-20.249-8.269-8.268-14.552-17.896-18.726-28.665l18.011-18.012c3.336-3.337 7.234-5.872 11.516-7.529 1.087,11.054 5.92,21.429 13.947,29.456 9.173,9.173 21.399,14.191 34.205,14.191 1.853,0 3.72-0.105 5.589-0.318 10.856-1.233 21.085-6.163 28.802-13.88l82.738-82.739c9.149-9.149 14.188-21.328 14.188-34.295 0-12.966-5.039-25.146-14.188-34.294-9.149-9.149-21.329-14.189-34.297-14.191-0.003,0-0.006,0-0.009,0-12.966,0-25.145,5.037-34.291,14.184l-58.204,58.203c-15.891-4.376-32.591-4.669-48.464-1.032l81.92-81.92c15.743-15.742 36.709-24.411 59.04-24.411 0.001,0 0.005,0 0.007,0 22.332,0.002 43.303,8.674 59.047,24.419 32.557,32.557 32.557,85.53 5.68434e-14,118.087z" />
                        </svg>
                    </div>
                </div>
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",

                        alignItems: "flex-start",
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 0,
                        marginBottom: 0,
                        padding: 25,
                    }}
                >
                    <h3
                        style={{
                            textAlign: "left",
                            ...THEME.Lato,
                            fontStyle: "italic",
                            fontWeight: "bolder",
                            fontSize: 30,
                        }}
                    >
                        {link.fields.linkTitle}
                    </h3>
                    <div
                        style={{
                            marginTop: 15,
                            marginBottom: 15,
                            textAlign: "left",
                            justifySelf: "center",
                            ...THEME.Lato,
                            fontSize: 15,
                            lineHeight: 1.2,
                        }}
                    >
                        <RichText>{link.fields.linkDescription.content}</RichText>
                    </div>
                </div>
            </div>
        </a>
    );
};
const Directory = () => {
    const { content } = useAPI();
    // console.log(content[0].fields.homepageLinks)
    return (
        <section
            style={{
                backgroundColor: THEME.white,
            }}
        >
            <Svg
                fill={THEME.white}
                style={{ backgroundColor: THEME.blue, top: -5 }}
                d="M0,224L48,208C96,192,192,160,288,170.7C384,181,480,235,576,234.7C672,235,768,181,864,144C960,107,1056,85,1152,96C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",

                    justifyContent: "stretch",
                    alignItems: "stretch",

                    flex: 1,
                    marginLeft: "5%",
                    marginRight: "5%",
                }}
            >
                {content[0].fields.homepageLinks.map((link, i) => (
                    <Link link={link} i={i} key={i} />
                ))}
            </div>
        </section>
    );
};

export default Directory;
