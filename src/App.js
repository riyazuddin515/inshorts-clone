import { Box } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from './components/Footer/Footer'
import NavInshorts from './components/Nav/NavInshorts'
import NewsContent from './components/NewsContent/NewsContent'

const App = () => {

  const [category, setCategory] = useState("general")
  const [articles, setArticles] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [page, setPage] = useState(0)

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}`)
      if (page === 1) {
        setArticles(response.data.articles)
      } else {
        setArticles(articles.concat(response.data.articles))
      }
      setTotalResults(response.data.totalResults)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log('page', page)
    if (page > 0) {
      fetchData()
    } else if (page === -1) {
      setPage(1)
    }
  }, [page])

  useEffect(() => {
    if (page >= 1) {
      setPage(-1)
    } else {
      setPage(1)
    }
  }, [category])

  return (
    <Box>
      <NavInshorts category={category} setCategory={setCategory} />
      <NewsContent articles={articles} totalResults={totalResults} page={page} setPage={setPage} />
      <Footer />
    </Box>
  )
}

export default App
