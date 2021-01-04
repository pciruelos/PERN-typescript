import React from "react";
import { Songs } from "./songs";
import ReactPlayer from 'react-player'
import './song.css';
import {useHistory} from 'react-router-dom'; 
import * as songsService from './songsService'

interface Props {
  song: Songs;
  loadSong: () => void;
}
const Song = ({ song, loadSong }: Props) => {

    const history = useHistory()

const handleDelete = async (id:string) => 
{
await songsService.DeleteSong(id)
loadSong();
}

  return (
    <div className="col-md-3">
      <div className="card bg-light mb-3 songcard">
        <div className="card-header d-flex justify-content-between " style={{ color: 'black' }} >
              <h5>{song.title}</h5>
              <span 
               onClick={() => song.id && handleDelete(song.id)}
               className="text-warning" style={{cursor: 'pointer'}}>
                   🗑</span>
        </div>
        
        <div className="card-body" onClick={() => history.push(`/update/${song.id}`)}>
        
          <div className="card-text embed-responsive embed-responsive-16by9"><ReactPlayer height='25px' url= {song.url} /></div>
        </div>
      </div>
    </div>
  );
};

export default Song;
