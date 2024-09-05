import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Typography, Button, Select, MenuItem } from '@mui/material';
import './Story.css'; // Custom styles for neon effect

const Story = () => {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentBranch, setCurrentBranch] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/stories/')
      .then(response => {
        setStories(response.data);
        if (response.data.length > 0) {
          setSelectedStory(response.data[0]);
          setCurrentBranch(response.data[0].branches[0]);
        }
      })
      .catch(error => console.error('Error fetching stories:', error));
  }, []);

  const handleBranchClick = (branchId) => {
    const nextBranch = selectedStory.branches.find(branch => branch.id === branchId);
    if (nextBranch) {
      setCurrentBranch(nextBranch);
    }
  };

  const handleStoryChange = (event) => {
    const storyId = event.target.value;
    const story = stories.find(s => s.id === storyId);
    setSelectedStory(story);
    setCurrentBranch(story.branches[0]);
  };

  if (!selectedStory || !currentBranch) {
    return <Typography className="neon-text">Loading...</Typography>;
  }

  return (
    <Container className="story-container">
      <Box className="story-box">
        <Select
          value={selectedStory.id}
          onChange={handleStoryChange}
          className="neon-select"
        >
          {stories.map(story => (
            <MenuItem key={story.id} value={story.id} className="neon-text">
              {story.title}
            </MenuItem>
          ))}
        </Select>
        <Typography variant="h3" className="neon-text">{selectedStory.title}</Typography>
        <Typography variant="body1" className="neon-text">{currentBranch.text}</Typography>
        <Box mt={3} display="flex" justifyContent="center" flexWrap="wrap">
          {selectedStory.branches.map(branch => (
            branch.id !== currentBranch.id && (
              <Button
                key={branch.id}
                variant="contained"
                className="neon-button"
                onClick={() => handleBranchClick(branch.id)}
                style={{ margin: '10px' }}
              >
                {branch.option_text}
              </Button>
            )
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Story;