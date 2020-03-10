import React from 'react';
import { asset, Pano, Text, View, AmbientLight, Sound, VrButton } from 'react-vr';
// import Primitives from './Primitives';
import Penholder from './Penholder';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'background.jpeg',
      sound: 'office.wav',
      visible: true
    }
  }
  changeScene() {
    this.setState({
      background: 'outside.jpeg',
      sound: 'birds.wav',
      visible: false
    })
  }
  render() {
    return (
      <View>
        <AmbientLight intensity={2.5} />
        <Pano source={asset('background.jpeg')} />
        <Sound
          loop={true}
          volume={0.7}
          source={{
            wav: asset('office.wav')
          }}
        />
        <VrButton onClick={this.changeScene}>
          <Text
            style={{
              backgroundColor: '#777879',
              fontSize: 0.8,
              fontWeight: '400',
              // layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{ translate: [0, 2, -6] }],
            }}>
            My office
          </Text>
        </VrButton>
        <Penholder />
      </View>
    );
  }
};
