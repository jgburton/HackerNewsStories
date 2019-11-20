import React, { useEffect, useState } from 'react';
import { getStoryIds, getStory } from '../services/hnApi';

const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);
  
    useEffect(() => {
      getStoryIds().then(({data}) => setStoryIds(data));
      getStory(20970623).then(data => console.log(data));
    }, []);
  
    return (
      <div className="App">
        <p>{JSON.stringify(storyIds)}</p>
      </div>
    );
  }

  export default StoriesContainer;