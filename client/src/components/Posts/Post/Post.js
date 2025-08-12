import React from 'react';
import { Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch  } from 'react-redux';
import { deletePost , likePost } from '../../../actions/posts';

const Post = ({ post , setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <Card style={{ 
  maxWidth: 400, 
  borderRadius: 15, 
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flex: 1, 
}}>
      {/* Image container with relative position */}
      <div style={{ position: 'relative' }}>
        <img
          src={post.selectedFile}
          alt={post.title}
          style={{ width: '100%', height: 250, objectFit: 'cover', borderRadius: '15px 15px 0 0' }}
        />
        {/* Creator name + time overlay */}
        <div style={{ position: 'absolute', top: 20, left: 20, color: 'white' }}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        {/* MoreHorizIcon overlay as a circular button */}
        <IconButton
          size="small"
          aria-label="settings"
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: 'white',
            borderRadius: '50%',
            padding: 4,
            zIndex: 10,
          }}
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="small" />
        </IconButton>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: 20 }}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>

      {/* Title + Message */}
      <CardContent style={{flexGrow:1}}>
        {/* Title */}
        <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
          {post.title}
        </Typography>

        {/* Message */}
        <Typography variant="body1" style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}>
          {post.message}
        </Typography>
      </CardContent>

      {/* Like and Delete buttons */}
      <CardActions style={{ padding: '0 16px 8px 16px', justifyContent: 'space-between' }}>
        <IconButton size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small" />
          Like &nbsp;
          {post.likeCount}
        </IconButton>
        <IconButton size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" />
          Delete
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
