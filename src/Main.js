import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import test from './videos/test.mp4'
import './styles.css'

const Main = () => {
    const [playing, setPlaying] = useState(false)
    const [meal, setVideoSrc] = useState(null)
    const navigate = useNavigate()

    const handleVideoEnd = () => navigate(`/result/${meal}`)

    const handleButtonClick = (meal) => {
        setPlaying(true)
        setVideoSrc(meal)
    }

    return (
        <div className="selection">
            {playing ? (
                <video
                    src={test}
                    autoPlay
                    onEnded={handleVideoEnd}
                    className="video-player"
                />
                ) : (
                <>
                    <button className="button" onClick={() => handleButtonClick('korean')}>Korean</button>
                    <button className="button" onClick={() => handleButtonClick('japanese')}>Japanese</button>
                    <button className="button" onClick={() => handleButtonClick('western')}>Western</button>
                </>
            )}
        </div>
    )
}

export default Main