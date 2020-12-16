/* global window */
import React, { useState } from "react";
import { motion, useViewportScroll, useTransform, MotionValue } from "framer-motion";
import './Animation.css';
import { disposeEmitNodes } from "typescript";

function TextMotion() {
  const { scrollYProgress } = useViewportScroll();
  const opacityBgAnim = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const opacityTxtAnim = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -250, -100]);

  return (
    <motion.div
      style={{
        height: '100vh',
        width: '100%',
        backgroundImage: "url(/assets/background.jpg)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: "white",
        overflow: "hidden",
        boxSizing: "border-box",
        position: "fixed",    
        display: "flex",
        flexDirection: "column"
      }}
    >
      <motion.div
        style={{
          height: '100vh',
          width: '100%',
          backgroundColor: "#32324e",
          color: "white",
          overflow: "hidden",
          boxSizing: "border-box",
          position: "fixed",
          opacity: opacityBgAnim,
          zIndex: -1
        }}
      ></motion.div>
      <motion.div
        style={{
          width: '100%',
          color: "white",
          overflow: "hidden",
          padding: "1rem",
          boxSizing: "border-box",
          opacity: opacityTxtAnim,
          flex: 1
        }}
      >
        <div>
          <p className="title">What <span style={{color: "#3e7bd6"}}>We Do!</span></p>
          <p className="description">
            When you work with an application, you open it, do some changes, and then you close it. 
            This is much like a Session. The computer knows who you are. It knows when you start the 
            application and when you end. But on the internet there is one problem: 
            the web server does not know who you are or what you do, because the HTTP 
            address doesn't maintain state.
          </p>
        </div>
      </motion.div>
      <motion.div
        style={{
          padding: '4rem',
          textAlign: "center",
          opacity: opacityTxtAnim
        }}
      >
        <button
          style={{
            background: "#3d87f7",
            borderRadius: "20px",
            padding: "8px 25px",
            color: "white",
            border: "none",
            outline: "none"
          }}
          onClick={() => window.scrollTo(0, 1500)}
        >Let's Talk</button>
      </motion.div>
    </motion.div>
  );
}

function Envelope({ children, direction, step }: any) {
  const [ffLayer, setFfLayer] = useState(0);

  const { scrollYProgress } = useViewportScroll();
  const imageBottomPosAnim = useTransform(scrollYProgress, [0, 0.3, 1], ['60vh', '60vh', '0vh']);
  const imageTopPosAnim = useTransform(scrollYProgress, [0, 0.3, 1], ['-60vh', '-60vh', '0vh']);
  const imageRightPosAnim = useTransform(scrollYProgress, [0, 0.3, 1], ['60vw', '60vw', '0vw']);
  const imageLeftPosAnim = useTransform(scrollYProgress, [0, 0.3, 1], ['-60vw', '-60vw', '0vw']);
  const opacityAnim = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 1]);
  const sizeAnim = useTransform(scrollYProgress, [0, 0.5, 1], ['100%', '100%', '90%']);
  // let direction = "left";
  
  scrollYProgress.onChange(x => {
    setFfLayer(x > 0.3 ? 0 : -1)
  })

  let textSectionStyle = {
    height: '100vh',
    flex: '0 0 40vw',
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  let imageSectionDefaultStyle = {
    width: '100%', 
    display: "flex",
    alignItems: "center"
  }

  let imageDefaultStyle = {
    objectPosition: "left"
  };

  let imageSectionStyle;
  let imageStyle;
  let layoutDirection: any;

  switch(direction) {
    case "bottom":
      textSectionStyle.flex = "0 0 40vh";
      imageSectionStyle = {
        ...imageSectionDefaultStyle,
        y: imageBottomPosAnim,
        justifyContent: "center",
      };
      imageStyle = {
        ...imageDefaultStyle,
        width: sizeAnim
      };
      layoutDirection = "column";
      break;
    case "top":
      textSectionStyle.flex = "0 0 40vh";
      imageSectionStyle = {
        ...imageSectionDefaultStyle,
        y: imageTopPosAnim,
        justifyContent: "center"
      };
      imageStyle = {
        ...imageDefaultStyle,
        width: sizeAnim
      };
      layoutDirection = "column-reverse";
      break;
    case "right":
      textSectionStyle.flex = "0 0 40vw";
      imageSectionStyle = {
        ...imageSectionDefaultStyle,
        x: imageRightPosAnim,
        paddingLeft: '100px',
        justifyContent: "flex-end",
      };
      imageStyle = {
        ...imageDefaultStyle,
        height: sizeAnim,
      };
      layoutDirection = "row";
      break;
    case "left":
      textSectionStyle.flex = "0 0 40vw";
      imageSectionStyle = {
        ...imageSectionDefaultStyle,
        x: imageLeftPosAnim,
        paddingRight: '100px',
        justifyContent: "flex-end",
      };
      imageStyle = {
        ...imageDefaultStyle,
        height: sizeAnim,
        objectPosition: "right"
      };
      layoutDirection = "row-reverse";
      break;
    default:
      textSectionStyle.flex = "0 0 40vh";
      imageSectionStyle = {
        ...imageSectionDefaultStyle,
        y: imageBottomPosAnim,
        justifyContent: "flex-end",
      };
      imageStyle = {
        ...imageDefaultStyle
      };
      layoutDirection = "row";
  }

  return (
    <div
      className=""
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        bottom: "0",
        left: "0",
        objectFit: "cover",
        display: "flex",
        flexDirection: layoutDirection,
        zIndex: ffLayer
      }}
    >
      <motion.div
        style={{
          opacity: opacityAnim,
          ...textSectionStyle
        }}
      >
        <div
          style={{
            display: (direction == 'bottom' || direction == 'top') ? "flex" : "block",
            color: 'white',
            padding: '50px',
            width: '90%',
            margin: "auto"
          }}
        >
          <div
            style={{
              fontSize: '40px',
              paddingRight: "100px"
            }}
          >
            <p className="sub-title">
              Benefit
            </p>
            <p className="sub-title color-dark-blue">
              Statement
            </p>
            <span className="dash-dark-blue"></span>
          </div>
          <div>
            <p
              style={{
                fontSize: '24px',
                margin: '0'
              }}
            >
              When you work with an application, you open it, do some changes, and then you close it. 
              This is much like a Session. The computer knows who you are. It knows when you start the 
              application and when you end. But on the internet there is one problem: 
              the web server does not know who you are or what you do, because the HTTP 
              address doesn't maintain state.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div style={{
        ...imageSectionStyle
      }}>
        <motion.img 
          style={{
            ...imageStyle,
            objectFit: "cover"
          }}
          src="/assets/image.jpg"
        />
      </motion.div>
    </div>
  );
}

const letterSceneStyle = {
  height: "400vh",
};

export default function LetterScene() {
  return (
    <div style={letterSceneStyle}>
      <TextMotion></TextMotion>
      <Envelope direction="right" step={1}></Envelope>
      {/* <Envelope direction="top" step={2}></Envelope>
      <Envelope direction="left" step={3}></Envelope>
      <Envelope direction="bottom" step={4}></Envelope> */}
    </div>
  );
}