import { useEffect, useState } from "react";
import {
  Scene,
  Assets,
  Image,
  Sky,
  Entity,
  Sphere,
} from "@belivvr/aframe-react";
import { MyCursor } from "@/components/MyCursor";
import { useRouter } from "next/router";

function sky() {
  const [rendered, setRendered] = useState<boolean>(false);
  const router = useRouter();

  function register() {
    if (AFRAME.components["space-ref"]) {
      return;
    }

    AFRAME.registerComponent("space-ref", {
      init: function () {
        const data = this;
        const el: HTMLElement = data.el;

        el.addEventListener("click", function () {
          router.push("/");
        });
      },
    });
  }

  useEffect(() => {
    setRendered(true);

    if (typeof window !== "undefined") {
      require("aframe"); // eslint-disable-line global-require
      register();
    }
  }, [setRendered]);

  if (!rendered) {
    return <>loading</>;
  }

  function move() {
    router.push("/");
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
        position={{ x: 0, y: 0, z: -30 }}
      />
      <Sky
        id="image-3602"
        radius={20}
        src="#mountain"
        position={{ x: -40, y: 0, z: -30 }}
      />

      <Sphere
        id="space"
        radius={20}
        material={{
          src: "space.jpg",
          shader: "flat",
        }}
        position={{
          x: 40,
          y: 0,
          z: -30,
        }}
        space-ref
      />

      <Entity id="#bitch" />
      <MyCursor fly={false} />
    </Scene>
  );
}

export { sky as default };
