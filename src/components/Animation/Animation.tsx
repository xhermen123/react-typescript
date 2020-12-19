/* global window */
import React, { useState } from "react";
import { motion, useViewportScroll, useTransform, useMotionValue } from "framer-motion";

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

function getAnimationInputRange(step: number) {

}

function Envelope({ children, imageEndLocation, imageStartLocation, step, totalStep, imageStartWidth, imageEndWidth, imageStartHeight, imageEndHeight, startWithFullImage }: any) {
  const [ffLayer, setFfLayer] = useState(0);
  const [ffVisibility, setFfVisibility] = useState('hidden');
  const [zoomSize, setZoomSize] = useState(1);

  const { scrollYProgress } = useViewportScroll();

  let startSlideOpacity = 0;
  let endSlideOpacity = 0;

  if (step == 2) {
    startSlideOpacity = 1;
  }

  if (step == totalStep) {
    endSlideOpacity = 1;
  }

  // Start With Fade
  const slideFadeInAnim = useTransform(scrollYProgress, [(step - 1) / totalStep, (step - 9 / 10) / totalStep], [0, 1]);

  // End With Fade
  const slideFadeOutAnim = useTransform(scrollYProgress, [step / totalStep, (step + 1 / 10) / totalStep], [1, 0]);

  // Start & End Fade
  const slideFadeInOutAnim = useTransform(scrollYProgress, [0, (step - 1) / totalStep, (step - 7 / 10) / totalStep, step / totalStep, (step + 3 / 10) / totalStep, 1], [startSlideOpacity, startSlideOpacity, 1, 1, endSlideOpacity, endSlideOpacity]);

  // Start Animiation Section
  const imageStartFullScreenAndBottomAnim = useTransform(scrollYProgress, [0, (step - 1) / totalStep, (step - 3 / 10) / totalStep], ['calc(10vh - 50%)', 'calc(10vh - 50%)', 'calc(0vh - 0%)']);
  const imageStartFullScreenAndTopAnim = useTransform(scrollYProgress, [0, (step - 1) / totalStep, (step - 3 / 10) / totalStep], ['calc(90vh - 50%)', 'calc(90vh - 50%)', 'calc(0vh - 0%)']);
  const imageStartFullScreenAndRightAnim = useTransform(scrollYProgress, [0, (step - 1) / totalStep, (step - 3 / 10) / totalStep], ['calc(10vw - 50%)', 'calc(10vw - 50%)', 'calc(0vw - 0%)']);
  const imageStartFullScreenAndLeftAnim = useTransform(scrollYProgress, [0, (step - 1) / totalStep, (step - 3 / 10) / totalStep], ['calc(50vw - 50%)', 'calc(50vw - 50%)', 'calc(0vw - 0%)']);

  let bottomStartY = '60vh';
  let bottomStartX = '0vh';
  let topStartY = '-60vh';
  let topStartX = '0vh';
  let rightStartX = '60vw';
  let rightStartY = '0vw';
  let leftStartX = '-60vw';
  let leftStartY = '0vw';

  switch (imageStartLocation) {
    case "bottom":
      switch (imageEndLocation) {
        case "bottom":
          
          break;
        case "top":
      
          break;
        case "right":
          
          break;
        case "left":
          
          break;
        default:
      }

      break;
    case "top":
      
      break;
    case "right":
      
      break;
    case "left":
      
      break;
    default:
     
  }

  const imageBottomPosYAnim = useTransform(scrollYProgress, [0, (step - 1) / totalStep, (step - 3 / 10) / totalStep], [bottomStartY, bottomStartY, '0vh']);
  const imageTopPosYAnim = useTransform(scrollYProgress, [0, (step - 1) / totalStep, (step - 3 / 10) / totalStep], [topStartY, topStartY, '0vh']);
  const imageRightPosXAnim = useTransform(scrollYProgress, [0, (step - 1) / totalStep, (step - 3 / 10) / totalStep], [rightStartX, rightStartX, '0vw']);
  const imageLeftPosXAnim = useTransform(scrollYProgress, [0, (step - 1) / totalStep, (step - 3 / 10) / totalStep], [leftStartX, leftStartX, '0vw']);

  const imageBottomPosXAnim = useTransform(scrollYProgress, [0, (step - 1) / totalStep, (step - 3 / 10) / totalStep], [bottomStartX, bottomStartX, '0vw']);
  const imageTopPosXAnim = useTransform(scrollYProgress, [0, (step - 1) / totalStep, (step - 3 / 10) / totalStep], [topStartX, topStartX, '0vh']);
  const imageRightPosYAnim = useTransform(scrollYProgress, [0, (step - 1) / totalStep, (step - 3 / 10) / totalStep], [rightStartY, rightStartY, '0vw']);
  const imageLeftPosYAnim = useTransform(scrollYProgress, [0, (step - 1) / totalStep, (step - 3 / 10) / totalStep], [leftStartY, leftStartY, '0vw']);

  // Main Animation Section
  const imageStartFullScreenHeightYAnim = useTransform(scrollYProgress, [0, (step - 1) / totalStep, step / totalStep], ['100vh', '100vh', '60vh']);
  const imageStartFullScreenWidthXAnim = useTransform(scrollYProgress, [0, (step - 1) / totalStep, step / totalStep], ['100vw', '100vw', '60vw']);

  // End Animation Section
  const imageEndBottomPosAnim = useTransform(scrollYProgress, [0.5, 0.7], ['0vh', '-100vh']);
  const imageEndTopPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], ['-60vh', '-60vh', '0vh']);
  const imageEndRightPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], ['60vw', '60vw', '0vw']);
  const imageEndLeftPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], ['-60vw', '-60vw', '0vw']);

  const textOpacityAnim = useTransform(scrollYProgress, [0, (step - 7 / 10) / totalStep, (step - 3 / 10) / totalStep], [0, 0, 1]);
  const sizeAnim = useTransform(scrollYProgress, [0, (step - 1) / totalStep, step / totalStep], ['100%', '100%', '90%']);
  
  const zoomAnim = useTransform(scrollYProgress, [0, (step - 1) / totalStep, (step - 3 / 10) / totalStep], [zoomSize, zoomSize, '0.9']);

  scrollYProgress.onChange(x => {
    setFfLayer(x > (step - 1) / totalStep && x < step / totalStep ? 0 : -1);
    // setFfVisibility(((x > (step - 1) / totalStep) && (x < step / totalStep)) ? 'visible' : 'hidden')
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
    alignItems: "center",
    justifyContent: "center"
  }

  let imageDefaultStyle = {
    objectPosition: "center center",
    // width: "100vw"
  };

  let subTitleStyle = {
    margin: "0px",
    fontWeight: 300,
    paddingLeft: "20px"
  };

  let imageSectionStyle;
  let imageStyle;
  let layoutDirection: any;

  switch(imageEndLocation) {
    case "bottom":
      textSectionStyle.flex = "0 0 40vh";
    
      imageSectionStyle = {
        ...imageSectionDefaultStyle,
        y: startWithFullImage ? imageStartFullScreenAndBottomAnim : imageBottomPosYAnim,
        justifyContent: "center",
      };
      imageStyle = {
        ...imageDefaultStyle,
        width: "100vw",
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
        y: startWithFullImage ? imageStartFullScreenAndTopAnim : imageTopPosYAnim,
        justifyContent: "center"
      };
      imageStyle = {
        ...imageDefaultStyle,
        width: "100vw",
        scale: zoomAnim,
        // width: sizeAnim,
        // height: imageStartFullScreenHeightYAnim
      };
      layoutDirection = "column-reverse";
      break;
    case "right":
      textSectionStyle.flex = "0 0 40vw";
      imageSectionStyle = {
        ...imageSectionDefaultStyle,
        x: startWithFullImage ? imageStartFullScreenAndRightAnim : imageRightPosXAnim,
        // paddingLeft: '100px',
        // justifyContent: "flex-end",
      };
      imageStyle = {
        ...imageDefaultStyle,
        height: "100vh",
        scale: zoomAnim,
        // height: sizeAnim,
        // width: imageStartFullScreenWidthXAnim,
      };
      layoutDirection = "row";
      break;
    case "left":
      textSectionStyle.flex = "0 0 40vw";
      imageSectionStyle = {
        ...imageSectionDefaultStyle,
        x: startWithFullImage ? imageStartFullScreenAndLeftAnim : imageLeftPosXAnim,
        // paddingRight: '100px',
        // justifyContent: "flex-start",
      };
      imageStyle = {
        ...imageDefaultStyle,
        height: "100vh",
        scale: zoomAnim,
        // height: sizeAnim,
        // width: imageStartFullScreenWidthXAnim,
        objectPosition: "right"
      };
      layoutDirection = "row-reverse";
      break;
    default:
      textSectionStyle.flex = "0 0 40vh";
      imageSectionStyle = {
        ...imageSectionDefaultStyle,
        y: startWithFullImage ? imageStartFullScreenAndRightAnim : imageBottomPosYAnim,
        // justifyContent: "flex-end",
      };
      imageStyle = {
        ...imageDefaultStyle,
        width: "100vw",
        scale: zoomAnim,
        // height: imageStartFullScreenHeightYAnim
      };
      layoutDirection = "row";
  }

  let parentStyle = {
    width: "100%",
    height: "100vh",
    position: useMotionValue("fixed"),
    bottom: "0",
    left: "0",
    objectFit: useMotionValue("cover"),
    display: "flex",
    background: "linear-gradient(0deg, #32324ecc, #32324ecc), url(/assets/background.jpg) center/cover no-repeat",
    flexDirection: layoutDirection,
    overflow: "hidden",
    // zIndex: ffLayer,
    // visibility: useMotionValue(ffVisibility),
    opacity: 0
    // y: imageEndBottomPosAnim,
  };

  return (
    <motion.div
      className=""
      style={{
        ...parentStyle,
        opacity: slideFadeInOutAnim
      }}
    >
      <motion.div
        style={{
          opacity: textOpacityAnim,
          ...textSectionStyle
        }}
      >
        <div
          style={{
            display: (imageEndLocation == 'bottom' || imageEndLocation == 'top') ? "flex" : "block",
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
    </motion.div>
  );
}

const letterSceneStyle = {
  height: "800vh",
};

export default function LetterScene() {
  return (
    <div style={letterSceneStyle}>
      <TextMotion></TextMotion>
      <Envelope imageEndLocation="right" imageStartLocation="left" step={2} totalStep={5} imageStartWidth="100%" imageEndWidth="50%" startWithFullImage={true}></Envelope>
      <Envelope imageEndLocation="top" imageStartLocation="left" step={3} totalStep={5} startWithFullImage={false}></Envelope>
      <Envelope imageEndLocation="left" imageStartLocation="left" step={4} totalStep={5} startWithFullImage={false}></Envelope>
      <Envelope imageEndLocation="bottom" imageStartLocation="left" step={5} totalStep={5} startWithFullImage={false}></Envelope>
    </div>
  );
}