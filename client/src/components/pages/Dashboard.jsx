import React from 'react'

import PlayListCard from './PlayListCard'
import Layout from '../layout/Layout'
import { useAuth } from '../context/Auth'
import Music_Player from './MusicPlayer/Music_Player'
const Dashboard = () => 
   {
  return (
  <Layout>
        <div className="music-card-list">
            <div className="heading1">Best Playlists</div>
            <div className="playlists">
              
              <div className="songs">
              <PlayListCard/>
                <PlayListCard/>
                <PlayListCard/> 
              </div>
              <div className="music-player">
                <Music_Player/>
              </div>
              
            </div>             
        </div>
   </Layout>
  )
}

export default Dashboard