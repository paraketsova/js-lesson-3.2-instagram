import React from 'react'

export default function LinkButton({text, url}) {
  return (
    <p className='btn btn-outline-danger btn-sm'>
      {text}
    </p>
  )
}