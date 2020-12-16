/* global window */
import React, { useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import './Animation.css';

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

function Envelope({ children }: any) {
  const { scrollYProgress } = useViewportScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);
  const yPosAnim = useTransform(scrollYProgress, [0, 1], ['70vh', '0vh']);
  const opacityAnim = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 1]);
  const widthAnim = useTransform(scrollYProgress, [0, 1], ['100%', '90%']);

  const direction = "bottom";

  let tempStyle = {
    height: '30vh',
    display: "flex",
    alignItems: "center"
  };

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
      }}
    >
      <motion.div
        style={{
          opacity: opacityAnim,
          ...tempStyle
        }}
      >
        <div
          style={{
            display: 'flex',
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
          <div
            
          >
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
        width: '100%', 
        y: yPosAnim,
        textAlign: "center"
      }}>
        <motion.img 
          style={{
            width: widthAnim,
          }}
          src="/assets/image.jpg"
        />
      </motion.div>
    </div>
  );
}

const letterSceneStyle = {
  height: "200vh",
};

export default function LetterScene() {
  return (
    <div style={letterSceneStyle}>
      <TextMotion></TextMotion>
      <Envelope></Envelope>
    </div>
  );
}