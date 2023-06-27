import React from 'react'

async function fetchRepos(name){
    const response = fetch(`https://api.github.com/repos/bradtraversy/${name}`)
    await new Promise((resolve) => setTimeout(resolve,2500))
    const repo = (await response).json()
    return repo
}


const RepoPage = async({name}) => {
    const repo = await fetchRepos(name)
    console.log(repo)

  return (
    <div>
        <h2>{repo.name}</h2>
        <p>{repo.description}</p>
    </div>
  )
}


export default RepoPage