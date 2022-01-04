import React from 'react';
import {
  Modal,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import modal from '../styles/modal';

const CustomModal = ({setModalVisible, modalChildren}) => {
  return (
    <View style={modal.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(prevModalState => !prevModalState);
        }}>
        <TouchableOpacity
          activeOpacity={0}
          onPressOut={() => {
            setModalVisible(false);
          }}
          style={modal.centeredView}>
          <ScrollView
            directionalLockEnabled={true}
            contentContainerStyle={modal.modalView}>
            <TouchableWithoutFeedback>
              <View>
                {modalChildren}
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default CustomModal;
