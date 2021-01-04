import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import * as songsService from "./songsService";
import { Songs } from "./songs";

type inputChange = ChangeEvent<HTMLInputElement>;

interface Params {
  id?: string;
}

const Formsong = () => {

  const initialState = {
    title: "",
    url: "",
  };

  const [song, setSong] = useState<Songs>(initialState);

  const history = useHistory();
  const params = useParams<Params>();  

    const getSong = async (id: string) => {
      const res = await songsService.get1Song(id);
      const { title, url } = res.data[0];
      setSong({ title, url });
    };

    useEffect(() => {
      if (params.id)
      getSong(params.id);
    }, [params.id]);
  
    
  const handleInputChange = (e: inputChange) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!params.id) {
      await songsService.createSongs(song);
      toast.success("lets rock my friend");
      setSong(initialState);
      
    }else{
      await songsService.updateSong(params.id,song)
    }
    history.push("/");
   
  };
  


  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            {params.id ? <h3>Something wrong?</h3> : <h3>New Song</h3>}

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="free yourself"
                className="form-control mt-2"
                autoFocus
                onChange={handleInputChange}
                value={song.title}
              />
              <input
                type="text"
                name="url"
                placeholder="ROCKKKKKKKK"
                className="form-control mt-2 mb-2"
                onChange={handleInputChange}
                value={song.url}
              />

              {params.id ? (
                <button className="btn btn-success btn-block btn-lg p-2">
                  Edit Song
                </button>
              ) : (
                <button className="btn btn-success btn-block btn-lg p-2">
                  ADD masterpiece
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formsong;
