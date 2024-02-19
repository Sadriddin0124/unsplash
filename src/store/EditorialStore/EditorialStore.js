import axios from "axios";
import { create } from "zustand";
const client_id = "client_id=59cegTi0aTgwHxhiFv-oqZqz0pWOaD1R2OwH0OUbVi8"
const BASE_URL = "https://api.unsplash.com"
const useEditorialStore = create((set) => ({
  collections: [],
  photos: [],
  search: [],
  getCollections: async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/collections/?${client_id}`
        );
      set({ collections: [...res?.data] });
      console.log(res?.data);
    } catch (err) {
      console.error(err);
    }
  },
  getPicturesEditorial: async (page) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/photos?query=${page}&_page=1&per_page=30&${client_id}`
        );
        set({ photos: [...res?.data] });
    } catch (err) {
      console.error(err);
    }
  },
  getPicturesSearch: async (search_value) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/search/photos?query=${search_value}&page=1&per_page=20&${client_id}`
        );
        set({ search: [...res?.data?.results] });
    } catch (err) {
      console.error(err);
    }
  },
}));

export default useEditorialStore;
