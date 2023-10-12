import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  Touchable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CreatePost from '../HomeScreen/CreatePost';
import ProfilePic from './ProfilePic';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';

const CommentComponent = ({comment}: {comment: any}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [hideReply, setHideReply] = useState(true);

  const handleLike = () => {
    // console.warn('Liked');
    setIsLiked(prev => !prev);
  };

  const hideReplyHandler = () => {
    setHideReply(prev => !prev);
  };

  return (
    <View style={{flexDirection: 'row', }}>
      <ProfilePic
        width={20}
        height={20}
        img={
          'https://images.unsplash.com/photo-1582164838301-3454c11a7523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw0NTM3Mzg3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        }
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingHorizontal: 15,
          paddingTop: 10,
        }}>
        <View style={{flex: 1}}>
          <Text style={styles.commentText} onPress={hideReplyHandler}>
            {comment.text}
          </Text>
          <View style={{display: 'flex', flexDirection: 'row', gap: 20}}>
            <View style={styles.specificActions}>
              <TouchableOpacity style={styles.commentAction}>
                <Octicons
                  name="reply"
                  size={15}
                  style={{
                    color: 'black',
                    //   position: 'absolute',
                    //   top: 7,
                    //   right: 40,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.commentCount}>
                <Text>{comment.replies ? comment.replies.length : 0}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.specificActions}>
              <TouchableOpacity
                style={styles.commentAction}
                onPress={handleLike}>
                {!isLiked ? (
                  <Fontisto
                    name="heart-alt"
                    style={{
                      color: 'black',
                    }}
                    size={13}
                  />
                ) : (
                  <Foundation
                    name="heart"
                    style={{
                      color: 'red',
                    }}
                    size={17}
                    onPress={handleLike}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity style={[styles.commentCount]}>
                <Text>{comment.replies ? comment.replies.length : 0}</Text>
              </TouchableOpacity>
            </View>
          </View>
          {comment.replies &&
            !hideReply &&
            comment.replies.map((reply: any) => (
              <View
                key={reply.id}
                style={{
                  paddingLeft: 10,
                  borderLeftWidth: 1,
                  borderColor: 'red',
                }}>
                <CommentComponent comment={reply} />
              </View>
            ))}
        </View>
      </View>
    </View>
  );
};

const AddComment = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      replies: [
        {
          id: 1,
          text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
        {id: 2, text: 'Test Reply1'},
        {id: 3, text: 'Test Reply1'},
        {id: 4, text: 'Test Reply'},
        {id: 5, text: 'Test Reply1'},
      ],
    },
    {
      id: 2,
      text: 'Second comment',
      replies: [
        {id: 1, text: 'Test Reply'},
        {id: 2, text: 'Test Reply1'},
        {id: 3, text: 'Test Reply1'},
        {id: 4, text: 'Test Reply'},
        {id: 5, text: 'Test Reply1'},
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
      <CreatePost
        onPress={handleAddComment}
        value={newComment}
        onChangeText={setNewComment}
      />
      {/* <Button title="Comment" onPress={handleAddComment} /> */}
      {/* Display existing comments */}
      <ScrollView style={{marginHorizontal: 20}}>
        {comments.map(comment => (
          <CommentComponent key={comment.id} comment={comment} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  commentAction: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    // backgroundColor: '#D5D4EF',
    borderRadius: 20,
    // borderBottomRightRadius:0
  },
  commentCount: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
  },
  specificActions: {
    display: 'flex',
    flexDirection: 'row',
    gap: 0,
        //  backgroundColor: '#D5D4EF',
  },
  commentText: {
    maxWidth:"95%",
    backgroundColor: '#D5D4EF',
    padding: 15,
    borderRadius: 20,
    borderTopLeftRadius: 3,
  },
});

export default AddComment;
