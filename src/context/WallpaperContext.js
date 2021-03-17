import axios from "axios";
import React, {createContext, useEffect, useState} from "react";


const WallpaperDataContext = createContext();

const WallpaperDataProvider = (props) => {

    const [wallpapers, setWallpapers] = useState();

    async function getWallpaper() {
        try {
          const response = await axios.get('https://api.unsplash.com/photos/random', {
            headers: {
                Authorization: process.env.REACT_APP_UNSPLASH_API_KEY,
                orientation: 'landscape'
            }
          });
          setWallpapers(response.data.urls.raw)
        } catch (error) {
          console.error(error);
        }
      }

      useEffect(() => {
        console.log(process.env.REACT_APP_UNSPLASH_API_KEY)
      }, []);
    return (
        <WallpaperDataContext.Provider value={{wallpapers}}>
            {props.children}
        </WallpaperDataContext.Provider>
    )
};

export {WallpaperDataContext, WallpaperDataProvider};