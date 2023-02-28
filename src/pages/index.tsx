import { useEffect, useState } from "react";
import {
    Scene,
    Assets,
    Image,
    Sky,
    Entity,
    Camera,
    Sphere,
    Box,
    Light,
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
        return <>loading</>;
    }

    return (
        <Scene>
            <Assets>
                <Image id="space" src="space.jpg" />
            </Assets>

            <Sky id="space-background" radius={10000} src="#space" />

            <Sphere
                id="sun"
                radius={20}
                material={{
                    src: "sun.jpg",
                    shader: "flat",
                }}
                position={{
                    x: 0,
                    y: -100,
                    z: -150,
                }}
                animation={{
                    property: "rotation",
                    to: "0 360 0",
                    loop: 100000,
                    dur: 25000,
                    easing: "linear",
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
                    x: 100,
                    y: -100,
                    z: -150,
                }}
                animation={{
                    property: "rotation",
                    to: "0 360 0",
                    loop: 500000,
                    dur: 5000,
                    easing: "linear",
                }}
            />

            <Box
                width={20}
                height={20}
                depth={20}
                material={{
                    src: "yong_sook.jpg",
                }}
                position={{
                    x: -100,
                    y: -100,
                    z: -150,
                }}
                animation={{
                    property: "rotation",
                    to: "360 360 0",
                    loop: 200000,
                    dur: 2000,
                    easing: "linear",
                }}
            />

            <Camera
                wasdControlsEnabled={true}
                wasdControls={{ fly: true, acceleration: 200 }}
            />
        </Scene>
    );
}

export { Home as default };
