import useAPI from "../../hooks/useAPI";
import useBreakpoints from "../../hooks/useBreakpoints";
import THEME from "../../THEME";

const Schedule = () => {
    const { breakpoint } = useBreakpoints();
    const { content } = useAPI();
    const { classesPoster } = content[0].fields;
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: THEME.white,
            }}
        >
            <svg style={{ backgroundColor: THEME.yellow }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill={THEME.white}
                    fillOpacity="1"
                    d="M0,64L48,106.7C96,149,192,235,288,240C384,245,480,171,576,144C672,117,768,139,864,138.7C960,139,1056,117,1152,96C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                }}
            >
                {/* <h2 style={{ ...THEME.DMSerif, fontStyle: 'italic', fontSize: 48 }}>
          Upcoming classes...
        </h2> */}
                <div
                    style={{
                        width: "75vw",
                        ...breakpoint({
                            sm: {
                                width: "90%",
                                margin: "auto",
                            },
                            xs: {
                                width: "90%",
                                margin: "auto",
                            },
                        }),
                    }}
                >
                    <img
                        style={{ width: "100%" }}
                        src={`${classesPoster.fields.file.url}`}
                        alt="Latest cultural class poster. To hear the most up-to-date list please contact Teresa Dunlap"
                    />
                </div>
            </div>
        </div>
    );
};

export default Schedule;
