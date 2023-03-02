import { useEffect, useState } from "react";
import {
    Scene,
    Sky,
    Entity,
    Camera,
    Sphere,
    Box,
    Cursor,
} from "@belivvr/aframe-react";

function Home() {
    const [rendered, setRendered] = useState<boolean>(false);

    useEffect(() => {
        setRendered(true);

        if (typeof window !== "undefined") {
            require("aframe"); // eslint-disable-line global-require
        }
    }, [setRendered]);

    if (!rendered) {
        return <>오아리 최고</>;
    }

    return (
        <Scene>
            <Sky id="space-background" radius={10000} src="space.jpg" />

            <Entity
                id="solar-system"
                position={{
                    x: 0,
                    y: -300,
                    z: -450,
                }}
                animation={{
                    property: "rotation",
                    to: "0 360 0",
                    dur: 10000,
                    loop: 100000,
                    easing: "linear",
                }}
            >
                <Sphere
                    id="sun"
                    radius={60}
                    material={{
                        src: "sun.jpg",
                        shader: "flat",
                    }}
                    position={{
                        x: 0,
                        y: 0,
                        z: 0,
                    }}
                    light={{
                        type: "point",
                        intensity: 2,
                    }}
                />

                <Sphere
                    radius={20}
                    material={{
                        src: "earth.jpg",
                    }}
                    position={{
                        x: 300,
                        y: 0,
                        z: 0,
                    }}
                    animation={{
                        property: "rotation",
                        to: "0 360 0",
                        loop: 500000,
                        dur: 5000,
                        easing: "linear",
                    }}
                >
                    <Sphere
                        radius={5}
                        material={{
                            src: "moon.jpg",
                        }}
                        position={{
                            x: 40,
                            y: 0,
                            z: 0,
                        }}
                    ></Sphere>
                </Sphere>

                <Box
                    width={20}
                    height={20}
                    depth={20}
                    material={{
                        // src: "yong_sook.jpg",
                        src: "ari.jpg",
                    }}
                    position={{
                        x: -300,
                        y: 0,
                        z: 0,
                    }}
                    animation={{
                        property: "rotation",
                        to: "360 360 0",
                        loop: 200000,
                        dur: 2000,
                        easing: "linear",
                    }}
                />
            </Entity>

            <Camera
                wasdControlsEnabled={true}
                wasdControls={{ fly: true, acceleration: 200 }}
            >
                <Cursor
                    id="cursor"
                    material={{
                        color: "#fff",
                    }}
                    animation__click={{
                        property: "scale",
                        startEvents: ["click"],
                        from: "0.1 0.1 0.1",
                        to: "1 1 1",
                        dur: 150,
                    }}
                    animation__fusing={{
                        property: "fusing",
                        startEvents: ["fusing"],
                        from: "1 1 1",
                        to: "0.1 0.1 0.1",
                        dur: 1500,
                    }}
                    cursor={{
                        downEvents: ["mouseenter"],
                    }}
                    // event-set__mouseenter={{
                    //     _event: "mouseenter",
                    //     color: "green",
                    // }}
                    // event-set__mouseleave={{
                    //     _event: "mouseleave",
                    //     color: "#fff",
                    // }}
                />
            </Camera>
        </Scene>
    );
}

export { Home as default };
