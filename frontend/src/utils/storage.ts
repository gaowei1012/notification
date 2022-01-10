import AsyncStorage from '@react-native-async-storage/async-storage';

const setStorage = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    throw e;
  }
};

const getStorage = (key: string) => {
  try {
    let ret;
    AsyncStorage.getItem(key).then((ret: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ret = ret;
    });
    return ret;
  } catch (e) {
    throw e;
  }
};

export { setStorage, getStorage };
