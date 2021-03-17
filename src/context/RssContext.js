import axios from "axios";
import React, {createContext, useEffect, useState} from "react";


const RssDataContext = createContext();

const RssDataProvider = (props) => {

    const [rss, setRss] = useState();
    const [count, setCount] = useState(0);

    async function getRSS() {
       try {
         const response2 = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftvn24.pl%2Fnajnowsze.xml')
         setRss(response2.data.items)
       } catch (error) {
         console.error(error);
       }
    }
    useEffect(() => {
            getRSS();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            getRSS();
        }, 3600000);
        return () => clearInterval(interval);
    }, []);

    return (
        <RssDataContext.Provider value={{rss, count, setCount}}>
            {props.children}
        </RssDataContext.Provider>
    )
};

export {RssDataContext, RssDataProvider};