import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';

const USERS_URL = 'https://api.github.com/users';
const { width } = Dimensions.get('window');

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

class ListUsers extends React.Component {
    static navigationOptions = {
        title: 'Lista Usuários'
    };

    state = {
        users: [],
    };

    componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const { data: users } = await axios.get(USERS_URL);
        this.setState({ users });
    }

    renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => this.props.navigation.navigate('UserInfo', { user: item })}
        >
            <Image
                source={{ uri: item.avatar_url }}
                style={styles.userProfile}
                resizeMode="contain"
            />

            <Text style={styles.text}>{item.login}</Text>
        </TouchableOpacity>
    );

    keyExtractor = ({ id }) => id;

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.users}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        );
    }
}

export default ListUsers;
