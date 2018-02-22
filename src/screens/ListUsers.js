import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';

import * as UserActions from '../actions/UserActions';

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

    componentDidMount() {
        this.props.getUsers();
    }

    renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => this.props.selectUser(item, this.props.navigation)}
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
        const { users } = this.props;

        return (
            <View style={styles.container}>
                <FlatList
                    data={users}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        );
    }
}

const mapStateToProps = ({ user }) => ({ users: user.users });

export default connect(mapStateToProps, { ...UserActions })(ListUsers);
