import React from 'react';
import { View, Text, Button, Icon, Body, Header, Left, Right, Title, Content, Card, CardItem, Thumbnail, Footer, FooterTab } from 'native-base';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>

      

      {/* Main content */}
      <Content padder>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Thumbnail large source={{ uri: 'https://i.pinimg.com/474x/de/9d/f7/de9df7a072fe4f8f779d92dc09fb092a.jpg' }} />
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10, color: '#6d28d9' }}>Lintang Ananda</Text> {/* Violet 700 */}
          <Text note style={{ marginTop: 5, color: '#4c1d95' }}>Lorem Ipsum</Text> {/* Violet 900 */}
        </View>

        {/* Info Card */}
        <Card style={{
          borderRadius: 10,
          marginBottom: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
        }}>
          <CardItem header bordered>
            <Text style={{ color: '#6d28d9' }}>About Me</Text> {/* Violet 700 */}
          </CardItem>
          <CardItem>
            <Body>
              <Text style={{ color: '#696969' }}>
                Lorem ipsum dolor sit amet!
              </Text>
            </Body>
          </CardItem>
        </Card>

        {/* Edit and Logout Buttons */}
        <Button block style={{ backgroundColor: '#7c3aed', marginTop: 20 }} onPress={() => alert('Edit Profile Pressed')}> {/* Violet 600 */}
          <Text>Edit Profile</Text>
        </Button>
        <Button block danger style={{ marginTop: 10, backgroundColor: '#ddd6fe' }} onPress={() => alert('Logout Pressed')}> {/* Violet 200 */}
          <Text>Logout</Text>
        </Button>
      </Content>

      {/* Footer */}
      <Footer>
        <FooterTab style={{ backgroundColor: '#ddd6fe' }}> {/* Violet 200 */}
          <Button vertical onPress={() => navigation.navigate('Home')}>
            <Icon name="home-sharp" />
            <Text>Home</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate('Profile')}>
            <Icon name="person-sharp" />
            <Text>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    </View>
  );
};

export default ProfileScreen;
