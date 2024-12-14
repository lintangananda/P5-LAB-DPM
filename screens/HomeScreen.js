import React from 'react';  
import { Button, Text, View, Header, Icon, Left, Right, Body, Title, Card, CardItem, Thumbnail, Footer, FooterTab, Content, Grid, Row, Col } from 'native-base';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <Header style={{ backgroundColor: '#7c3aed' }}> {/* Indigo 300 */}
        <Left>
          <Button transparent>
            <Icon name="menu-outline" />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: '#fafafa' }}>Home Screen</Title> {/* Indigo 700 */}
        </Body>
        <Right />
      </Header>

      {/* Main content */}
      <Content padder>
        <Grid>
          {/* Title Section */}
          <Row style={{ marginBottom: 20 }}>
            <Col>
              <Text style={{
                fontSize: 28,
                fontWeight: 'bold',
                color: '#6366f1',  // Indigo 500
                textAlign: 'center',
                marginBottom: 10,
              }}>
                About Me
              </Text>
            </Col>
          </Row>

          {/* Welcome Section */}
          <Row>
            <Col>
              <View style={{
                backgroundColor: '#a78bfa',  // Indigo 300
                padding: 20,
                borderRadius: 10,
                marginBottom: 20,
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#6366f1',  // Indigo 500
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
              }}>
                <Text style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#4338ca',  // Indigo 700
                  textAlign: 'center',
                }}>
                  Welcome!
                </Text>
                <Text style={{
                  color: '#fafafa', 
                  textAlign: 'center', 
                  marginTop: 10, 
                  fontSize: 14,
                }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </View>
            </Col>
          </Row>

          {/* Cards Section */}
          <Row>
            <Col>
              <Card style={{ borderRadius: 10, marginBottom: 20 }}>
                <CardItem header bordered>
                  <Text style={{ color: '#4338ca' }}>Lorem ipsum</Text> {/* Indigo 700 */}
                </CardItem>
                <CardItem cardBody>
                  <Thumbnail square source={{ uri: 'https://placeimg.com/800/600/architecture' }} style={{ height: 150, width: null, flex: 1 }} />
                </CardItem>
                <CardItem footer bordered>
                  <Text>Lorem ipsum dolor sit amet</Text>
                </CardItem>
              </Card>
            </Col>
          </Row>

          {/* Navigation Button */}
          <Row style={{ marginTop: 20 }}>
            <Col>
              <Button block style={{ backgroundColor: '#7c3aed' }} onPress={() => navigation.navigate('Profile')}> {/* Indigo 700 */}
                <Text>Go to Profile</Text>
              </Button>
            </Col>
          </Row>

          {/* Additional Info Section */}
          <Row style={{ marginTop: 20 }}>
            <Col>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={{ uri: 'https://placeimg.com/100/100/nature' }} />
                    <Body>
                      <Text>Lintang Ananda</Text>
                      <Text note>Lorem ipsum dolor sit amet</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                  </Body>
                </CardItem>
              </Card>
            </Col>
          </Row>
        </Grid>
      </Content>

      {/* Footer */}
      <Footer>
        <FooterTab style={{ backgroundColor: '#ddd6fe' }}> {/* Indigo 300 */}
          <Button vertical onPress={() => navigation.navigate('Home')}>
            <Icon name="home-sharp" />
            <Text style={{ color: '#4338ca' }}>Home</Text> {/* Indigo 700 */}
          </Button>
          <Button vertical onPress={() => navigation.navigate('Profile')}>
            <Icon name="person-sharp" />
            <Text style={{ color: '#4338ca' }}>Profile</Text> {/* Indigo 700 */}
          </Button>
        </FooterTab>
      </Footer>
    </View>
  );
};

export default HomeScreen;
