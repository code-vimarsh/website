import React, { useState, useEffect } from 'react';
import "./upvote.css"

const Upvote = (props) => {
  const [isUpvoted, setIsUpvoted] = useState(props.value);
  const [upCount, setUpCount] = useState(props.count ?? 0);
  const [updateURL, setUpdateURL] = useState('')

  useEffect(() => {
    setUpCount(props.count ?? 0);
    setIsUpvoted(props.value);
    setUpdateURL((props.type == 'p')?'project/upvotes':'discussion/question')
  }, [props.value, props.count,props.type]);

  const toggleUpvote = () => {
    const newIsUpvoted = !isUpvoted;
    const newUpCount = newIsUpvoted ? 1 : -1;

    setIsUpvoted(newIsUpvoted);
    setUpCount(upCount+newUpCount);

    const upvoteData = {
      type: props.type,
      Id: props.Id,
      state: newIsUpvoted,
      count: newUpCount,
    };

    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/${updateURL}?userID=${props.user}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(upvoteData),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // console.log("Updated count: " + newUpCount);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  };

  function upvoteIcon() {
    return (
      <svg width="2rem" height="2rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path 
            d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15" 
            fill="#ffffff"
          />
        </g>
      </svg>
    );
  }

  function upvotedIcon() {
    return (
      <svg fill="#ffffff" width="2rem" height="2rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, -1, 0, 0)">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path 
            d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059z"
          />
        </g>
      </svg>
    );
  }

  return (
    <>
      <button
        className={`upvoteContent upvote-button ${isUpvoted ? 'upvoted' : ''}`}
        onClick={toggleUpvote}
      >
        {isUpvoted ? upvotedIcon() : upvoteIcon()}
        <span className='upVoteCount'>{upCount}</span>
      </button>
    </>
  );
};

export default Upvote;
