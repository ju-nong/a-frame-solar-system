import { useEffect, useState } from "react";
import { Scene, Sky, Entity, Sphere, Box } from "@belivvr/aframe-react";
import { MyCursor } from "@/components/MyCursor";
import { useRouter } from "next/router";

function Home() {
    const router = useRouter();

    function register() {
        if (AFRAME.components["sun-ref"]) {
            return;
        }

        // 태양 이벤트
        AFRAME.registerComponent("sun-ref", {
            init: function () {
                const data = this;
                const el: HTMLElement = data.el;
                const radius = parseInt(el.getAttribute("radius") ?? "0");

                el.addEventListener("mouseenter", function () {
                    el.setAttribute("radius", String(radius + 10));
                });

                el.addEventListener("mouseleave", function () {
                    el.setAttribute("radius", String(radius));
                });
            },
        });

        // 지구 이벤트
        AFRAME.registerComponent("earth-ref", {
            init: function () {
                const data = this;
                const el: HTMLElement = data.el;
                const radius = parseInt(el.getAttribute("radius") ?? "0");

                el.addEventListener("mouseenter", function () {
                    el.setAttribute("radius", String(radius + 10));
                });

                el.addEventListener("mouseleave", function () {
                    el.setAttribute("radius", String(radius));
                });

                el.addEventListener("click", function () {
                    router.push("/sky");
                });

                el.addEventListener("touchstart", function () {
                    router.push("/sky");
                });

                el.addEventListener("touchend", function () {
                    router.push("/sky");
                });
            },
        });
    }

    const [rendered, setRendered] = useState<boolean>(false);

    useEffect(() => {
        setRendered(true);

        if (typeof window !== "undefined") {
            require("aframe"); // eslint-disable-line global-require
            register();
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
                    sun-ref
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
                    earth-ref
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

            <MyCursor speed={200} />
        </Scene>
    );
}

export { Home as default };
