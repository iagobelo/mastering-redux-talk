import { StackNavigator } from 'react-navigation';

import { ListUsers, UserInfo } from '../screens';

export default StackNavigator({
    ListUsers: { screen: ListUsers },
    UserInfo: { screen: UserInfo },
});
