import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Content = () => {
  const [state, setState] = useState([])

  useEffect(() => {
    axios
      .get('http://5cb2dbf66ce9ce00145bef52.mockapi.io/api/v1/news')
      .then(res => {
        setState(res.data)
      })
  }, [])
  return state.length ? (
    <div>
      {state.map(v => (
        <div className="content" key={v.id}>
          {v.title}
        </div>
      ))}
    </div>
  ) : (
    <div
      style={{
        height: `${document.documentElement.clientHeight}px`
      }}
    >
      content loading
    </div>
  )
}

export default Content
