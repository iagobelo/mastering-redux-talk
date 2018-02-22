import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

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
        const { selected } = this.props;

        return (
            <View style={styles.cardContainer}>
                <Image
                    source={{ uri: selected.avatar_url }}
                    style={styles.userProfile}
                    resizeMode="contain"
                />

                <Text style={styles.text}>{selected.login}</Text>
            </View>
        );
    }
}

const mapStateToProps = ({ user }) => ({ selected: user.selected });

export default connect(mapStateToProps)(UserInfo);
