import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(({ data }) => setStoryIds(data));
  }, []);

  return (
    <>
    <h1>Hacker News Stories</h1>
      {storyIds.map(storyId => <Story key={storyId} storyId={storyId} />)}
    </>
  )
};

export default StoriesContainer;