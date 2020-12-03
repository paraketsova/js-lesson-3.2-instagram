import React from 'react'
import Badge from './Badge'
import LinkButton from './LinkButton'

export default function ImagePost({imagePost}) {
  console.log(imagePost);
  return (
    <div className="col-md-6 col-xl-4 border shadow mb-2">
      <div className="col-md-12">
        <h5>{imagePost.title}</h5>
        <img className="img-fluid" src={imagePost.imageURL} />
        <p>{imagePost.description}</p>
      </div>
      <div className="row">
        <div className="col-xs-6 col-md-6 col-xl-6 text-left">
          <LinkButton text="Like" />
        </div>
        <div className="col-xs-6 col-md-6 col-xl-6 text-right">
          <Badge text={'Likes: ' + imagePost.likes} />
        </div>
      </div>
    </div>
      
  )
}
