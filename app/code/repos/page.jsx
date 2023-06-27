import React from 'react'
import Link from 'next/link'

async function fetchRepos(){
  const response = await fetch("https://api.github.com/users/bradtraversy/repos")
  
  await new Promise((resolve) => setTimeout(resolve,1500))
  
  return await response.json()
}


const ReposPage = async() => {
  const repos = await fetchRepos()
  return (
    <div>
      <h2>Repositories</h2>
      <ul className='card'>
        {repos.map((repo) =>
          <li key={repo.id} className='card-items'>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default ReposPage