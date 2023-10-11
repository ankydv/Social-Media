// CommentComponent.js
import React, {useState} from 'react';
import {View, Text,TextInput, Button} from 'react-native';

const CommentComponent = ({comment}: {comment: any}) => {
  return (
    <View>
      <Text>{comment.text}</Text>
      {/* Render replies if any */}
      {comment.replies &&
        comment.replies.map((reply: {id: React.Key | null | undefined}) => (
          <CommentComponent key={reply.id} comment={reply} />
        ))}
    </View>
  );
};

const ProfileScreen = () => {
  const [comments, setComments] = useState([
    {id: 1, text: 'First comment', replies: []},
    // Add more comments as needed
  ]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    // Create a new comment object with a unique ID
    const newCommentObject = {
      id: comments.length + 1,
      text: newComment,
      replies: [],
    };
    setComments([...comments, newCommentObject]);
    setNewComment(''); // Reset the input field
  };

  return (
    <View>
      {/* Display existing comments */}
      {comments.map(comment => (
        <CommentComponent key={comment.id} comment={comment} />
      ))}

      {/* Add a new comment */}
      <TextInput
        value={newComment}
        onChangeText={setNewComment}
        placeholder="Add a comment..."
      />
      <Button title="Comment" onPress={handleAddComment} />
    </View>
  );
};

export default ProfileScreen;
