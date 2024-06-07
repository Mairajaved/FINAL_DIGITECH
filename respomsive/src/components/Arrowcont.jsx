import React from 'react'

function Arrowcont() {
  return (
    <div>
       < div className="newinput-container">
        <input type="text" placeholder="Read More" />
        <Link to="/about">
          <button><img src={arrow} alt="Arrow" /></button>
        </Link>
      </div>
    </div>
  )
}

export default Arrowcont