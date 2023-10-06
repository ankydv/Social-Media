import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Button,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import HeaderNav from './HeaderNav';
import Stories from './Stories';
import {globalStyles} from '../../styles';
import CreatePost from './CreatePost';
import Feeds from './Feeds';
import CommentModal from '../Comment/Comment';

function HomeScreen(): JSX.Element {
  const [isCommentModalVisible, setCommentModalVisible] = useState(false);

  const openCommentModal = () => {
    setCommentModalVisible(true);
  };

  const closeCommentModal = () => {
    setCommentModalVisible(false);
  };

  return (
    <TouchableWithoutFeedback
      style={{backgroundColor: 'red'}}
      onPress={closeCommentModal}>
      <View style={[styles.container, globalStyles.body]}>
        <ScrollView stickyHeaderIndices={[0]} stickyHeaderHiddenOnScroll={true}>
          <HeaderNav></HeaderNav>
          <Stories />
          <CreatePost />
          <Feeds onCommentTrigger={openCommentModal} />
        </ScrollView>

        <Modal
          animationType="fade"
          transparent={true}
          visible={isCommentModalVisible}
          onRequestClose={closeCommentModal}>
          {/* <TouchableWithoutFeedback style={{backgroundColor: 'red'}}> */}
            <CommentModal onClose={closeCommentModal} />
          {/* </TouchableWithoutFeedback> */}
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
