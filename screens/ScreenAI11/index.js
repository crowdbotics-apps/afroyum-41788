import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
const notifications = [{
  id: 1,
  title: 'New Message',
  message: 'You have a new message from John Doe',
  time: '10:30 AM',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: 2,
  title: 'New Friend Request',
  message: 'You have a new friend request from Jane Smith',
  time: 'Yesterday',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: 3,
  title: 'New Event Invitation',
  message: 'You have been invited to a party on Saturday',
  time: '2 days ago',
  image: 'https://tinyurl.com/42evm3m3'
}];

const NotificationListScreen = () => {
  const renderNotification = ({
    item
  }) => <View style={styles.notificationContainer}>
      <Image source={{
      uri: item.image
    }} style={styles.notificationImage} />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </View>;

  return <View style={styles.container}>
      <FlatList data={notifications} renderItem={renderNotification} keyExtractor={item => item.id.toString()} contentContainerStyle={styles.notificationList} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  notificationList: {
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  notificationImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16
  },
  notificationContent: {
    flex: 1
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  notificationMessage: {
    fontSize: 14,
    marginBottom: 4
  },
  notificationTime: {
    fontSize: 12,
    color: '#888'
  }
});
export default NotificationListScreen;