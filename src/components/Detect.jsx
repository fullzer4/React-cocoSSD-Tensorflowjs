import Webcam from "react-webcam";
import {useRef, useEffect} from "react";
import * as cocossd from "@tensorflow-models/coco-ssd";


function Detect() {

    const webcamRef = useRef(null)
    const canvasRef = useRef(null)

    const runModel = async () => {

        const net = await cocossd.load()

        setInterval(() => {
            detect(net);
        }, 10)

        const detect = async (net) => {
            if (
                typeof webcamRef.current !== "undefined" &&
                webcamRef.current !== null &&
                webcamRef.current.video.readyState === 4
            ) {
                const video = webcamRef.current.video;
                const videoWidth = webcamRef.current.video.videoWidth;
                const videoHeight = webcamRef.current.video.videoHeight;

                webcamRef.current.video.width = videoWidth;
                webcamRef.current.video.height = videoHeight;

                canvasRef.current.width = videoWidth;
                canvasRef.current.height = videoHeight;



                const ctx = canvasRef.current.getContext("2d")


                
            }
        }
    }

    useEffect(()=>{runCoco()}, [])

    return (
      <div className="App">
      </div>
    )
  }
  
  export default Detect