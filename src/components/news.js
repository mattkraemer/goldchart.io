import React, { useState, useEffect } from "react"
import NewsJSON from "../../content/news.json"

var moment = require('moment');

const News = () => {
  const [ loading, setLoading ] = useState(true);
  const [ news, setNews ] = useState([]);
  const [ lastUpdate, setLastUpdate ] = useState(new Date());

  useEffect(() => {
    setNews(NewsJSON)
    setLoading(false)
    setInterval(() => {
      setNews(NewsJSON)
      setLastUpdate(new Date())
    }, 5000);
  }, [])

  return (
    <div>
      <div className="rounded-b bg-black bg-opacity-50">
        <div className="bg-black bg-opacity-25 px-6 py-4 flex items-center justify-between">
          <span className="text-gray-500 font-medium">News</span>
          <div>
            <label className="text-xs block text-gray-600 leading-none">Last Update</label>
            <span className="text-xs block text-gray-500">{moment(lastUpdate).fromNow()}</span>
          </div>
        </div>
        {
          loading
            ?
              <div className="px-6 py-4 text-gray-600">Loading...</div>
            :
              <div>
                {
                  news.articles.sort((a,b) => new Date(b.date_published) - new Date(a.date_published)).slice(0,1).map((item, index) => (
                    <a href={item.link} target="_blank" className="block px-6 py-3 text-white transform transition duration-200 ease-in-out hover:scale-105 hover:text-white">
                      <span className="text-sm font-thin truncate">{moment(item.date_published).fromNow()} &middot; {item.source.name}</span>
                      <h4 className="font-medium text-xl">{item.title}</h4>
                    </a>
                  ))
                }
                {
                  news.articles.sort((a,b) => new Date(b.date_published) - new Date(a.date_published)).slice(1,5).map((item, index) => (
                    <a href={item.link} target="_blank" className="block px-6 py-3 text-gray-500 transform transition duration-200 ease-in-out hover:scale-105 hover:text-white">
                      <span className="text-xs font-thin truncate">{moment(item.date_published).fromNow()} &middot; {item.source.name}</span>
                      <h4 className="font-medium">{item.title}</h4>
                    </a>
                  ))
                }
              </div>
        }
      </div>
    </div>
  )
}

export default News
