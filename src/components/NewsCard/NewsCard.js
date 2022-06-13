import React from 'react'
import './NewsCard.css'

const NewsCard = ({ news }) => {
    const fullDate = new Date(news.publishedAt);
    const date = fullDate.toString().split(' ');
    const hour = parseInt(date[4].substring(0, 2));
    const time = hour > 12 ? true : false;

    return (
        <div className='news-card' >
            <div className="news-image">
                <img src={news.urlToImage ?
                    news.urlToImage : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png'} alt={news.title} />
            </div>
            <div className='news-content'>
                <h3>{news.title}</h3>
                <span>
                    <span style={{ fontWeight: 700 }}>{'Short '}</span>
                    <span>{'by '}</span>
                    <span>{news.author ? news.author : 'Unknown'}</span>
                    {' at '}
                    {
                        time ?
                            `${hour - 12}:${date[4].substring(3, 5)} pm` :
                            `${hour}:${date[4].substring(3, 5)} am`
                    }
                    {
                        ` on ${date[2]} ${date[1]} ${date[3]},${date[0]}`
                    }

                </span>
                <p>{news.description}</p>
                <span>read more at <a href={news.url} target='_blank' rel="noopener noreferrer">{news.source.name}</a></span>
            </div>
        </div>
    )
}

export default NewsCard
