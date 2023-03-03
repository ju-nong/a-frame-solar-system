import { useState, useEffect } from "react";
import { Camera, Cursor } from "@belivvr/aframe-react";

interface MyCursorProps {
  speed?: number;
  fly?: boolean;
}

function MyCursor({ speed, fly }: MyCursorProps) {
  function register() {
    if (AFRAME.components["camera-ref"]) {
      return;
    }

    console.log("hih");

    // 태양 이벤트
    AFRAME.registerComponent("camera-ref", {
      init: function () {
        const data = this;
        const el: HTMLElement = data.el;
        console.log(el);

        el.addEventListener("keydown", function (event) {
          console.log(event);
        });

        // el.addEventListener("mouseenter", function () {
        //   el.setAttribute("radius", String(radius + 10));
        // });

        // el.addEventListener("mouseleave", function () {
        //   el.setAttribute("radius", String(radius));
        // });
      },
    });
  }

  const [rendered, setRendered] = useState<boolean>(false);

  useEffect(() => {
    setRendered(true);

    if (typeof window !== "undefined") {
      register();
    }
  }, [setRendered]);

  const speedProps = speed ?? 200;
  const flyProps = fly ?? true;
  const [cameraSpeed, setCameraSpeed] = useState(speedProps);
  const [jumping, setJumping] = useState(false);

  // 카메라 가속
  window.addEventListener("keyup", function (event) {
    if (!event.shiftKey) {
      setCameraSpeed(speedProps);
    }

    if (jumping) {
      setJumping(false);
    }
  });

  window.addEventListener("keydown", function (event) {
    if (event.shiftKey) {
      setCameraSpeed(speedProps * 4);
    } else {
      setCameraSpeed(speedProps);
    }

    if (!flyProps && event.code === "Space" && !jumping) {
      const camera = document.getElementById("myCamera");

      console.log(camera?.getAttribute("position"));
      setJumping(true)d;
    }
  });

  return (
    <Camera
      wasdControlsEnabled={true}
      wasdControls={{ fly: flyProps, acceleration: cameraSpeed }}
      id="myCamera"
      camera-ref
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
        animation__mouseenter={{
          property: "components.material.material.color",
          startEvents: ["mouseenter"],
          type: "color",
          to: "green",
          dur: 0,
        }}
        animation__mouseleave={{
          property: "components.material.material.color",
          startEvents: ["mouseleave"],
          type: "color",
          to: "#fff",
          dur: 0,
        }}
      />
    </Camera>
  );
}

export { MyCursor };
