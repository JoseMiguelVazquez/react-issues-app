import React from 'react'

const IssueRow = ({ title, number, user, url, labels }) => {
  return (
    <tr className='issue-row' href={url} target='_blank' rel='noreferrer'>
      <td>
        <a
          href={url}
          target='_blank'
          rel='noreferrer'
        >
          {title}
        </a>
      </td>
      <td>#{number}</td>
      <td>by {user}</td>
      <td>
        {labels.map(label => (
          <p
            className='issue-label'
            style={{ backgroundColor: `#${label.color}` }}
            key={label.id}
          >
            {label.name}
          </p>
        ))}
      </td>
    </tr>
  )
}

export default IssueRow
