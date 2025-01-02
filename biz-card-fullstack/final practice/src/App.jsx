import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      publicationYear: 1813,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      publicationYear: 1949,
    },
    {
      id: 3,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      publicationYear: 1951,
    },
  ]);

  return(
    <div>
      {books.map(function (book){
        return(
        <CardWrapper key={book.id}>
        <BookCard title={book.title} author={book.author} genre={book.genre} publicationYear={book.publicationYear}/>
        </CardWrapper> 
        )
      })}
    </div>
  )
  
}

function BookCard({title, author, genre, publicationYear}){
  return <div>
    <h1>{title}</h1>
    <ul>
      <li><strong>{author}</strong></li>
      <li><strong>{genre}</strong></li>
      <li><strong>{publicationYear}</strong></li>
    </ul>
  </div>
}

function CardWrapper({children}){
  return <div style={{backgroundColor: 'beige', border: '10px, solid, #371D10', padding: 10, margin: 10, color: '#3F301D'}}>
   {children} 
  </div>
}

export default App
