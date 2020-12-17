/* global window */
import React, { useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function TextMotion() {
  const { scrollYProgress } = useViewportScroll();
  const opacityBgAnim = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const opacityTxtAnim = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], ['0vh', '-100vh', '-100vh']);

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
        flexDirection: "column",
        y: yPosAnim,
        zIndex: 1
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
          // opacity: opacityBgAnim,
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
          // opacity: opacityTxtAnim,
          flex: 1
        }}
      >
        <div>
          <p style={{
            fontSize: "45px",
            textAlign: "center",
            marginTop: "100px"
          }}>What <span style={{color: "#3e7bd6"}}>We Do!</span></p>
          <p style={{
            maxWidth: "600px",
            margin: "auto",
            textAlign: "center",
            color: "#ccc4c4"
          }}>
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
          // opacity: opacityTxtAnim
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

function Envelope({ children, direction, step, imageStartWidth, imageEndWidth, imageStartHeight, imageEndHeight, startWithFullImage }: any) {
  const [ffLayer, setFfLayer] = useState(0);
  const [zoomSize, setZoomSize] = useState(1);

  const { scrollYProgress } = useViewportScroll();

  const imageStartFullScreenAndBottomAnim = useTransform(scrollYProgress, [0, 0.6, 1], ['calc(10vh - 50%)', 'calc(10vh - 50%)', 'calc(0vh - 0%)']);
  const imageStartFullScreenAndTopAnim = useTransform(scrollYProgress, [0, 0.6, 1], ['40vh', '40vh', '0vh']);
  const imageStartFullScreenAndRightAnim = useTransform(scrollYProgress, [0, 0.6, 1], ['-40vw', '-40vw', '0vw']);
  const imageStartFullScreenAndLeftAnim = useTransform(scrollYProgress, [0, 0.6, 1], ['40vw', '40vw', '0vw']);

  const imageStartFullScreenHeightYAnim = useTransform(scrollYProgress, [0, 0.6, 1], ['100vh', '100vh', '60vh']);
  const imageStartFullScreenWidthXAnim = useTransform(scrollYProgress, [0, 0.6, 1], ['100vw', '100vw', '60vw']);

  const imageBottomPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], ['60vh', '60vh', '0vh']);
  const imageTopPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], ['-60vh', '-60vh', '0vh']);
  const imageRightPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], ['60vw', '60vw', '0vw']);
  const imageLeftPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], ['-60vw', '-60vw', '0vw']);

  const opacityAnim = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 1]);
  const sizeAnim = useTransform(scrollYProgress, [0, 0.6, 1], ['100%', '100%', '90%']);
  
  const zoomAnim = useTransform(scrollYProgress, [0, 0.6, 1], [zoomSize, zoomSize, '0.9']);

  scrollYProgress.onChange(x => {
    setFfLayer(x > 0.3 ? 0 : -1);
    let animImage = document.getElementById("animation_image");

    if (animImage && animImage.clientHeight && animImage.clientWidth) {
      setZoomSize(Math.max(window.innerWidth / animImage?.clientWidth, window.innerHeight / animImage?.clientHeight));
    }
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
    objectPosition: "center top",
    width: "100vw"
  };

  let subTitleStyle = {
    margin: "0px",
    fontWeight: 300,
    paddingLeft: "20px"
  };

  let imageSectionStyle;
  let imageStyle;
  let layoutDirection: any;

  switch(direction) {
    case "bottom":
      textSectionStyle.flex = "0 0 40vh";
    
      imageSectionStyle = {
        ...imageSectionDefaultStyle,
        y: startWithFullImage ? imageStartFullScreenAndBottomAnim : imageBottomPosAnim,
        justifyContent: "center",
      };
      imageStyle = {
        ...imageDefaultStyle,
        // width: sizeAnim,
        scale: zoomAnim,
        // height: imageStartFullScreenHeightYAnim
      };
      layoutDirection = "column";
      break;
    case "top":
      textSectionStyle.flex = "0 0 40vh";
      imageSectionStyle = {
        ...imageSectionDefaultStyle,
        y: startWithFullImage ? imageStartFullScreenAndTopAnim : imageTopPosAnim,
        justifyContent: "center"
      };
      imageStyle = {
        ...imageDefaultStyle,
        width: sizeAnim,
        height: imageStartFullScreenHeightYAnim
      };
      layoutDirection = "column-reverse";
      break;
    case "right":
      textSectionStyle.flex = "0 0 40vw";
      imageSectionStyle = {
        ...imageSectionDefaultStyle,
        x: startWithFullImage ? imageStartFullScreenAndRightAnim : imageRightPosAnim,
        paddingLeft: '100px',
        justifyContent: "flex-end",
      };
      imageStyle = {
        ...imageDefaultStyle,
        height: sizeAnim,
        width: imageStartFullScreenWidthXAnim,
      };
      layoutDirection = "row";
      break;
    case "left":
      textSectionStyle.flex = "0 0 40vw";
      imageSectionStyle = {
        ...imageSectionDefaultStyle,
        x: startWithFullImage ? imageStartFullScreenAndLeftAnim : imageLeftPosAnim,
        paddingRight: '100px',
        justifyContent: "flex-end",
      };
      imageStyle = {
        ...imageDefaultStyle,
        height: sizeAnim,
        width: imageStartFullScreenWidthXAnim,
        objectPosition: "right"
      };
      layoutDirection = "row-reverse";
      break;
    default:
      textSectionStyle.flex = "0 0 40vh";
      imageSectionStyle = {
        ...imageSectionDefaultStyle,
        y: startWithFullImage ? imageStartFullScreenAndRightAnim : imageBottomPosAnim,
        justifyContent: "flex-end",
      };
      imageStyle = {
        ...imageDefaultStyle,
        // width: sizeAnim,
        scale: zoomAnim,
        height: imageStartFullScreenHeightYAnim
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
        background: "linear-gradient(0deg, #32324ecc, #32324ecc), url(/assets/background.jpg)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
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
            <p style={{
              ...subTitleStyle
            }}>
              Benefit
            </p>
            <p style={{
              ...subTitleStyle,
              color: "#3e7bd6"
            }}>
              Statement
            </p>
            <span style={{
              width: "100px",
              display: "block",
              borderBottom: "2px solid #3e7bd6",
              marginTop: "20px"
            }}></span>
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
          id="animation_image"
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
  height: "300vh",
};

export default function LetterScene() {
  return (
    <div style={letterSceneStyle}>
      <TextMotion></TextMotion>
      {/* <Envelope direction="right" step={1} imageStartWidth="100%" imageEndWidth="50%"></Envelope> */}
      {/* <Envelope direction="top" step={2}></Envelope> */}
      {/* <Envelope direction="left" step={3}></Envelope> */}
      <Envelope direction="bottom" step={4} startWithFullImage={true}></Envelope>
    </div>
  );
}