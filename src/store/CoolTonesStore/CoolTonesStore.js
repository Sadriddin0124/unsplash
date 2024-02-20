import axios from "axios";
import { create } from "zustand";
const client_id = "client_id=59cegTi0aTgwHxhiFv-oqZqz0pWOaD1R2OwH0OUbVi8"
const BASE_URL = "https://api.unsplash.com"

const CoolTonesStore = create((set)=> ({
    cooltones: [],
    getPicturesCoolTones: async (page) => {
        try {
          const res = await axios.get(
            `${BASE_URL}/photos?query=cooltone&_page=1&per_page=30&${client_id}`
            );
            set({ cooltones: [...res?.data] });
        } catch (err) {
          console.error(err);
        }
      },
}))

export default CoolTonesStore