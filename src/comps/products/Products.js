
import React, { Component } from 'react'
import './Products.css'
import meal from "../../images/videos/meal.mp4"
import mealTwo from "../../images/videos/meal2.mp4"
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
export default function Products() {
	const [playVideo, setPlayVideo] = React.useState(false);
	const [play, setPlay] = React.useState(false);
	const vidRef = React.useRef();
	const video = React.useRef();
	return (
		<div className="products" id='products'>

      <div className="app__video">
        <video
          ref={vidRef}
          src={meal}
          type="video/mp4"
          loop
          controls={false}
        />
        <div className="app__video-overlay flex__center">
          <div
            className="app__video-overlay_circle flex__center"
            onClick={() => {
              setPlayVideo(!playVideo);
              if (playVideo) {
                vidRef.current.pause();
              } else {
                vidRef.current.play();
              }
            }}
          >
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      </div>
      <br />
      <div className="app__video">
        <video
          ref={video}
          src={mealTwo}
          type="video/mp4"
          loop
          controls={false}
        />
        <div className="app__video-overlay flex__center">
          <div
            className="app__video-overlay_circle flex__center"
            onClick={() => {
              setPlay(!play);
              if (play) {
                video.current.pause();
              } else {
                video.current.play();
              }
            }}
          >
            {play ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      </div>
    </div>
	)
}


