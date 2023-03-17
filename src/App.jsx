import { useState, useEffect } from 'react'
import './App.css'
import IssueRow from './components/IssueRow'
import SearchBar from './components/SearchBar'

function App () {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/react/issues')
      .then(response => response.json())
      .then(results => setIssues(results))
      .catch(error => console.log(error))
  }, [])

  const sendFilter = (filter) => {
    setIssues(
      issues.filter(issue => {
        return issue.title.includes(filter)
      })
    )
  }

  return (
    <div className='App'>
      <h1>React Issues</h1>
      <h2>This is a list of issues brought from the react issues API on github.</h2>
      <h3>Click on a Title to visit it's page.</h3>
      <SearchBar handleFilter={sendFilter} />
      <div className='table-wrapper'>
        <table className='issue-table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Number</th>
              <th>User</th>
              <th>Labels</th>
            </tr>
          </thead>
          <tbody>
            {
              issues.map(issue => (
                <IssueRow
                  key={issue.id}
                  title={issue.title}
                  number={issue.number}
                  user={issue.user.login}
                  url={issue.html_url}
                  labels={issue.labels}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
