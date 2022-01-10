import { CommonActions, StackActions } from '@react-navigation/native';
let navigator: any;

const setToLeveNavigator = (navigatorRef: any) => {
  navigator = navigatorRef;
};

/**
 * 跳转路由
 * @param routeName 路径
 * @param params 参数
 */
const navigate = (routeName: any, params = {}) => {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    })
  );
};

const reset = (routeName: any, params = {}) => {
  navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeName,
          params,
        },
      ],
    })
  );
};

const replace = (routeName: any, params = {}) => {
  navigator.dispatch(StackActions.replace(routeName, params));
};

const back = () => {
  navigator.dispatch(CommonActions.goBack());
};

export { setToLeveNavigator, replace, reset, back, navigate };
