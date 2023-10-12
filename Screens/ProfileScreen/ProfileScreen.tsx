// CommentComponent.js
import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';



const CommentComponent = ({comment}: {comment: any}) => {
  return (
    <View>
      <Text>{comment.text}</Text>
      {/* <Text>{comment.replies[0].reply}</Text> */}
      {/* Render replies if any */}
      {comment.replies &&
        comment.replies.map((reply: any) => (
          <View
            style={{
              paddingLeft: 10,
              marginLeft: 10,
              borderLeftWidth: 2,
              borderColor: 'red',
            }}>
            <CommentComponent comment={reply} />
          </View>
        ))}
    </View>
  );
};

const ProfileScreen = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      text: 'First comment',
      replies: [
        {id: 1, text: 'Test Reply'},
        {id: 1, text: 'Test Reply1'},
        {id: 1, text: 'Test Reply1'},
        {id: 1, text: 'Test Reply'},
        {id: 1, text: 'Test Reply1'},
        {id: 1, text: 'Test Reply1'},
        {id: 1, text: 'Test Reply'},
        {id: 1, text: 'Test Reply1'},
        {id: 1, text: 'Test Reply1'},
        {id: 1, text: 'Test Reply'},
        {id: 1, text: 'Test Reply1'},
        {id: 1, text: 'Test Reply1'},
      ],
    },
    {
      id: 2,
      text: 'Second comment',
      replies: [
        {id: 1, text: 'Test Reply'},
        {id: 1, text: 'Test Reply1'},
        {id: 1, text: 'Test Reply1'},
        {id: 1, text: 'Test Reply'},
        {id: 1, text: 'Test Reply1'},
      ],
    },
   
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
    setComments([newCommentObject, ...comments]);
    setNewComment(''); // Reset the input field
  };

  return (
    <View>
      <TextInput
        value={newComment}
        onChangeText={setNewComment}
        placeholder="Add a comment..."
      />
      <Button title="Comment" onPress={handleAddComment} />
      {/* Display existing comments */}
      {comments.map(comment => (
        <CommentComponent key={comment.id} comment={comment} />
      ))}

      {/* Add a new comment */}
    </View>
  );
};

export default ProfileScreen;
