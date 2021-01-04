import axios from 'axios';
import { Songs } from './songs';

const API = 'http://localhost:4000'

export const getSongs = async () => {
  return await axios.get<Songs[]>(`${API}/playlist`);
};
export const createSongs = async (song: Songs) => {
  return await axios.post(`${API}/playlist`, song);
};
export const get1Song = async (id: string) => {
  return await axios.get<Songs[]>(`${API}/playlist/${id}`, { } );
};
export const updateSong = async (id: string, song: Songs) => {
  return await axios.put<Songs[]>(`${API}/playlist/${id}`, song );
};
export const DeleteSong = async (id: string) => {
  return await axios.delete<Songs[]>(`${API}/playlist/${id}`);
};