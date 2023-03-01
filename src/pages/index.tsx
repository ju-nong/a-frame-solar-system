import { useEffect, useState } from "react";
import { Scene, Sky, Entity, Camera, Sphere, Box } from "@belivvr/aframe-react";

function Home() {
    const [rendered, setRendered] = useState<boolean>(false);

    useEffect(() => {
        setRendered(true);

        if (typeof window !== "undefined") {
            require("aframe"); // eslint-disable-line global-require
        }
    }, [setRendered]);

    if (!rendered) {
        return <>loading</>;
    }

    return (
        <Scene>
            <Sky id="space-background" radius={10000} src="space.jpg" />

            <Entity
                id="solar-system"
                position={{
                    x: 0,
                    y: -100,
                    z: -150,
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
                        src: "yong_sook.jpg",
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
            />
        </Scene>
    );
}

export { Home as default };
