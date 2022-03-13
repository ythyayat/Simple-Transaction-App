import {StyleSheet} from 'react-native';
import {Colors} from '../colors';
import normalize from '../utils/normalize';

export const commonStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
  },
  contentSection: {
    flex: 1,
    marginHorizontal: normalize(20),
  },
  bottomSection: {
    alignItems: 'center',
    paddingBottom: normalize(16),
    paddingTop: normalize(5),
  },
  loading: {
    flex: 1,
    position: 'absolute',
    backgroundColor: Colors.transarant,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
  },
});
