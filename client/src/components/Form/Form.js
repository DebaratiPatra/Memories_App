import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );

  const classes = useStyles();
  const dispatch = useDispatch();

  // Load post data into form when editing
  useEffect(() => {
    if (post) {
      setPostData({
        ...post,
        tags: Array.isArray(post.tags) ? post.tags.join(', ') : post.tags,
      });
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalPostData = {
      ...postData,
      tags: postData.tags
        ? postData.tags.split(',').map((tag) => tag.trim())
        : [],
    };

    if (currentId) {
      dispatch(updatePost(currentId, finalPostData));
    } else {
      dispatch(createPost(finalPostData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPostData({ ...postData, selectedFile: reader.result });
    };
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? 'Editing a Memory' : 'Creating a Memory'}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) =>
            setPostData({ ...postData, title: e.target.value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={2}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (comma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value })
          }
        />

        <div className={classes.fileInput}>
          <input
            type="file"
            onChange={handleFileChange}
            style={{ margin: '10px 0' }}
          />
        </div>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
          style={{ marginTop: '10px' }}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
