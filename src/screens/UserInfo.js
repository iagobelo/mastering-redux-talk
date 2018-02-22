import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    cardContainer: {
        backgroundColor: '#fff',
        marginVertical: 16,
        padding: 16,
        borderRadius: 4,
    },
    userProfile: {
        height: 200,
    },
    text: {
        alignSelf: 'center',
    },
});


class UserInfo extends React.Component {
    static navigationOptions = {
        title: 'Usuário'
    };

    render() {
        const { user } = this.props.navigation.state.params;

        return (
            <View style={styles.cardContainer}>
                <Image
                    source={{ uri: user.avatar_url }}
                    style={styles.userProfile}
                    resizeMode="contain"
                />

                <Text style={styles.text}>{user.login}</Text>
            </View>
        );
    }
}

export default UserInfo;
