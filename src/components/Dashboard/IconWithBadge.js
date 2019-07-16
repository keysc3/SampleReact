import React, { Component } from 'react';
import { View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class IconWithBadge extends Component {
    render() {
      const { name, badgeCount, color, size } = this.props;
      return (
        <View style={{ width: 26, height: 24, margin: 5 }}>
          <FontAwesome5 name={name} size={size} color={color} />
          {badgeCount > 0 && (
            <View
              style={{
                // /If you're using react-native < 0.57 overflow outside of the parent
                // will not work on Android, see https://git.io/fhLJ8
                position: 'absolute',
                right: -7,
                top: -3,
                backgroundColor: 'red',
                borderRadius: 6,
                width: 12,
                height: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                {badgeCount}
              </Text>
            </View>
          )}
        </View>
      );
    }
  }


  export default IconWithBadge;