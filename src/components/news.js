import React, { useState, useEffect } from "react"
import NewsJSON from "../../content/news.json"

const News = () => {
  const [ news, setNews ] = useState();

  return (
    <div>
      <div className="rounded-b bg-black bg-opacity-25">
        {
          NewsJSON.articles.slice(0,10).map((item, index) => (
            <a href={item.link} target="_blank" className="block px-6 py-4 border-b border-gray-900 text-gray-500 transform transition duration-200 ease-in-out hover:scale-105 hover:text-white">
              <span className="text-xs font-thin truncate">{item.date_published} &middot; {item.source.name}</span>
              <h4 className="font-medium">{item.title}</h4>
            </a>
          ))
        }
      </div>
    </div>
  )
}

export default News
