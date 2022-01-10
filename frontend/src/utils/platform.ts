import { Platform } from 'react-native';

export function getPlatform() {
  return Platform.OS == 'ios' ? 1 : 0;
}
