import { View,Text,Image, StyleSheet } from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
    </View>
  );
}

Header.defaultProps = {
    title: 'My Book Lists'
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor : 'darkblue'
  },
  text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center'
  }
})

export default Header;