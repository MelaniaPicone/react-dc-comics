import React from 'react'

const ComicCard = (props) => { const {thumb, title} = props;
  return (
     <div className="col-16">
  <div className="comic-card">
<img src= {comic.thumb} alt={comic.title}></img>
<h3>{comic.title}</h3>
  </div>
</div>
  )
}

export default ComicCard
