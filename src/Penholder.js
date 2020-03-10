import React from 'react';
import { asset, View, Model, StyleSheet } from 'react-vr';

export default class Penholder extends React.Component {
  render() {
    return (
      <View>
        <Model
          source={{
            obj: asset('/penholder/Table_Set_obj.obj'),
            mtl: asset('/penholder/Table_Set_obj.mtl')
          }}
          style={{
            position: 'absolute',
            transform: [
              {translate: [-2.35, 0.65, -4]},
              { scale: 0.00125 },
              { rotateX: -90 }
            ]
          }}
        />
        <Model
          source={{
            obj: asset('/penholder/Table_Set_obj.obj'),
            mtl: asset('/penholder/Table_Set_obj.mtl')
          }}
          style={{
            position: 'absolute',
            transform: [
              {translate: [5.5, 0.65, -4]},
              { scale: 0.00125 },
              { rotateX: -90 }
            ]
          }}
        />
        <Model
          source={{
            obj: asset('/penholder/Table_Set_obj.obj'),
            mtl: asset('/penholder/Table_Set_obj.mtl')
          }}
          style={{
            position: 'absolute',
            transform: [
              {translate: [12, 0.5, -4]},
              { scale: 0.00125 },
              { rotateX: -90 },
              { rotateZ: -270 }
            ]
          }}
        />
      </View>
    );
  }
};
