import React, { useState, useEffect } from "react"
import NewsJSON from "../../content/news.json"

const News = () => {
  const [ news, setNews ] = useState();

  return (
    <div>
      <div className="rounded bg-black bg-opacity-25">
        {
          NewsJSON.articles.slice(0,10).map((item, index) => (
            <a href={item.link} target="_blank" className="block px-6 py-4 border-b border-black hover:text-white">{item.title}</a>
          ))
        }
      </div>
    </div>
  )
}

export default News
