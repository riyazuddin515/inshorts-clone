import React from 'react'
import { Button, Container } from '@mui/material'
import NewsCard from '../NewsCard/NewsCard'
import './NewsContent.css'

const NewsContent = ({ articles, totalResults, page, setPage }) => {
    return (
        <Container maxWidth='md'>
            {
                articles.map((news, index) => (
                    <NewsCard news={news} key={index} />
                ))
            }
            {
                articles.length < totalResults && (
                    <div className='button'>
                        <Button variant="contained" onClick={() => { setPage(page + 1) }}>Load More</Button>
                    </div>
                )
            }
        </Container>
    )
}

export default NewsContent
