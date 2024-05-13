import React, { useEffect, useState } from 'react'
import './Home_page_before_login.css';
import { Link } from 'react-router-dom';

function Home_page_before_login() {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [displayedQuote, setDisplayedQuote] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(
            (quote) => {
            setQuote(quote.content);
            setAuthor(quote.author);
    })
    }, [])

   
    const changeQuoteHandler = () => {
        setDisplayedQuote("")
        fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(
            (quote) => {
            setQuote(quote.content);
            setAuthor(quote.author);
            setDisplayedQuote("");
            setCurrentIndex(0);
        })
    }

  return (
    <>
        <div style={{display: 'flex'}}>
            <div className='welcomeContainer'>
                <div>
                    <h2 className="welcomeToCode">Welcome to <br/><span> Code-Minions.. </span> </h2>
                    <h4 className="oneLiner">Start your coding journey with codeMinions by joining us...</h4>
                    <Link to={'signin'}> <input type="button" value="Get Started" className="get_start" /> </Link>          
                </div>  
            <div className='newDesign'>
                <ul className='designUL'>
                    <li className='newLi'>
                        <a href='https://react.dev/' target='_blank' onclick="kevin()">
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span> <a href='https://react.dev/' target='_blank'> <img src='/images/logo192.png'
                                height="44px" width="44px"
                            ></img> </a> </span>
                        </a>
                    </li>

                    <li className='newLi'>
                        <a href='https://dev.java/learn/' target='_blank' onclick="kevin()">
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span> <a href='https://dev.java/learn/' target='_blank'> <img src='/images/java.png'
                                height="44px" width="44px"
                            ></img> </a> </span>
                        </a>
                    </li>

                    <li className='newLi'>
                        <a href="https://www.geeksforgeeks.org/" onclick="kevin()" target='_blank'>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span> <a href='https://www.geeksforgeeks.org/' target='_blank'> <img src='/images/geeksforgeeks.png' height="44px" width="44px"></img> </a> </span>
                        </a>
                    </li>

                    <li className='newLi'>
                        <a href='https://www.w3schools.com/' target='_blank' onclick="kevin()">
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span> <a href='https://www.w3schools.com/' target='_blank'> <img src='/images/W3Schools.png' height="44px" width="44px"></img> </a> </span>
                        </a>
                    </li>

                    <li className='newLi'>
                        <a href='https://leetcode.com/' target='_blank' onclick="kevin()">
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span> <a href='https://leetcode.com/' target='_blank'> <img src='/images/leetcode_logo.webp' height="44px" width="44px"></img> </a> </span>
                        </a>
                    </li>

                    <li className='newLi'>
                        <a href='https://www.codechef.com/' target='_blank' onclick="kevin()">
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span> <a href='https://www.codechef.com/' target='_blank'> <img src='/images/codechef_logo.png' height="44px" width="41.5px"></img> </a> </span>
                        </a>
                    </li>
                    
                </ul>
            </div>
            </div>
        </div>
        <div className='quoteContainer'>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3 className='quoteTitle'>Quote</h3>
                <input type="button" className="new_quote_btn"  onClick={changeQuoteHandler} />
            </div>
            <hr/>
            <div className='quoteDiv'>
            <div className='quoteDivInfo'>
            <div id='openQuote'/>
                <p className='quoteContent'>{quote}</p>
            <div id='closeQuote' />
            </div>
            <div className='authorName'> <span> ~ {author} </span> </div>
            </div>
        </div>
    </>
  )
}

export default Home_page_before_login