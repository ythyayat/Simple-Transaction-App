import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Login from '../screen/auth/Login';
import Register from '../screen/auth/Register';
import {getHeaderTitle} from '@react-navigation/elements';
import Header from '../component/Header';
import {useSelector} from 'react-redux';
import Dasboard from '../screen/dasboard/Dasboard';
import Transfer from '../screen/transaction/Transfer';

const Stack = createStackNavigator();

function StackNavigation() {
  const token = useSelector(state => state.auth.token);
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({route, options, back}) => {
          const title = getHeaderTitle(options, route.name);

          return <Header title={title} leftButton={back} />;
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      {!!token ? (
        <>
          <Stack.Screen
            name="Dasboard"
            component={Dasboard}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Transfer" component={Transfer} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default StackNavigation;
