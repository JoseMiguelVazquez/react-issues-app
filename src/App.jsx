import { useState, useEffect } from 'react'
import './App.css'
import IssueCard from './components/IssueCard'

function App () {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then(response => response.json())
      .then(results => setIssues(results))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className='App'>
      <h1>React Issues App</h1>
      <div className='grid-cards'>
        {
        issues.map(issue => (
          <IssueCard
            key={issue.id}
            title={issue.title}
            number={issue.number}
            user={issue.user.login}
            url={issue.html_url}
          />
        ))
        }
      </div>
    </div>
  )
}

export default App
