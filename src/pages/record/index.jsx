import React, { useRef, useState } from "react";
import styles from "./Record.module.css"; // Import the CSS module

function Record() {
  const videoRef = useRef(null);
  const recordedVideoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState(null);

  const startRecording = async () => {
    try {
      // Reset the recorded blob and stop state before starting a new recording
      setRecordedBlob(null);
      setRecording(true);

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }

      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: "video/webm",
      });

      const chunks = [];
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        setRecordedBlob(blob);
        // Stop all media tracks
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current.start();
    } catch (error) {
      console.error("Error accessing media devices.", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    setRecording(false);
  };

  return (
    <div className={styles.container}>
      <section className={styles.innerContainer}>
        <div className={styles.controls}>
          {!recording && (
            <button className={styles.controlButton} onClick={startRecording}>
              Start Recording
            </button>
          )}
          {recording && (
            <button className={styles.controlButton} onClick={stopRecording}>
              Stop Recording
            </button>
          )}
        </div>

        {/* Display video stream while recording */}
        {!recordedBlob ? (
          <div className={styles.videoContainer}>
            <h3 className={styles.processText}>
              {recording ? "You are now recording" : null}
            </h3>
            <video ref={videoRef} className={styles.video} autoPlay muted />
          </div>
        ) : null}

        {/* Display recorded video */}
        {recordedBlob && (
          <div className={styles.previewBox}>
            <h3 className={styles.processText}>Your latest recording</h3>
            <video ref={recordedVideoRef} controls className={styles.video}>
              <source
                src={URL.createObjectURL(recordedBlob)}
                type="video/webm"
              />
            </video>
          </div>
        )}
      </section>
    </div>
  );
}

export { Record };
