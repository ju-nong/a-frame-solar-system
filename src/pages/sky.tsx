import { useEffect, useState } from "react";
import {
    Scene,
    Assets,
    Image,
    Sky,
    Entity,
    Camera,
    Sphere,
} from "@belivvr/aframe-react";

function sky() {
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
                <Image id="bitch" src="bitch.jpg" />
                <Image id="mountain" src="mountain.jpg" />
                <Image id="earth" src="earth.jpg" />
            </Assets>

            <Sky
                id="image-3601"
                radius={10}
                src="#bitch"
                position={{ x: 27, y: 0, z: -71 }}
            />
            <Sky
                id="image-3602"
                radius={20}
                src="#mountain"
                position={{ x: -17, y: 0, z: -27 }}
            />

            <Sky id="image-3603" radius={5} src="#earth" />

            <Entity id="#bitch" />
            <Camera wasdControlsEnabled={true} />
        </Scene>
    );
}

export { sky as default };
