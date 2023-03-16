import React from 'react'

const IssueCard = ({ title, number, user, url, labels }) => {
  return (
    <a className='issue-card' href={url} target='_blank' rel='noreferrer'>
      <h2>{title}</h2>
      <p>Number: {number}</p>
      <p>User: {user}</p>
    </a>
  )
}

export default IssueCard
