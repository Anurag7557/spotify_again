import React from 'react'
import {FaPlay} from 'react-icons/fa'

const PlayListCard = () => {
    const displayPlay=(event)=>{
        console.log(event);
        const playButton = document.getElementsByClassName('play-button')[0];
          playButton.style.visibility = 'visible';
      }
      const notPlay=(event)=>{
          const playButton = document.getElementsByClassName('play-button')[0];
         
            playButton.style.visibility = 'hidden';
        }
  return (
    <div className="music-card" onMouseEnter={(e)=>displayPlay(e)}  onMouseLeave={(e)=>notPlay(e)}>
                <img src="https://th.bing.com/th/id/OIP.aGBzg2jqyk2qwsJxOfdxKAHaLH?w=196&h=294&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" />
            <div className="name">
                Peaceful Piano 
            </div>
            <div className="about">
                Lorem ipsum dolor sit amet consectetur
            </div>
            <div className="play-button">
            <FaPlay id='play-icon'/>
            </div>
            </div> 
  )
}

export default PlayListCard