import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Children } from 'react'

function App() {
 const [book] = useState([
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    summary: 'A novel about the serious issues of race and injustice in the Deep South.'
  },
  {
    id: 2,
    title: '1984',
    author: 'George Orwell',
    summary: 'A dystopian novel exploring surveillance, totalitarianism, and individual freedom.'
  },
  {
    id: 3,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    summary: 'A story about wealth, love, and the American dream during the Jazz Age.'
  }
])

return (
  <div>
  {book.map( function(book){
    return <CardWrapper key={book.id}> 
      <Book title={book.title} author={book.author} summary={book.summary}/>
      </CardWrapper>;
  })}
  </div>
);

}

function Book({title, author, summary}){
  return (<div>
    <p>{title}</p><br />
    <p>{author}</p><br />
    <p>{summary}</p><br />
  </div>)
}

function CardWrapper({children}){
  return <div style={{border: "solid black 2px", margin: 20, padding: 20}}>
    {children}
  </div>
}
export default App
