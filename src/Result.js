import React from 'react'
import { useParams } from 'react-router-dom'
import Korean from './results/Korean'
import Japanese from './results/Japanese'
import Western from './results/Western'

const Result = () => {
  const { meal } = useParams()

  let Component
  switch (meal) {
    case 'korean':
      Component = Korean
      break
    case 'japanese':
      Component = Japanese
      break
    case 'western':
      Component = Western
      break
    default:
      Component = () => <div>Page not found</div>
  }

  return (
    <div>
      <Component/>
    </div>
  )
}

export default Result
