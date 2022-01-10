class NavigatorUtils {
  static navigator(navigate: { navigate: any }, path: string) {
    return navigate.navigate(path);
  }
  static goBack(navigation: { goBack: any }) {
    return navigation.goBack();
  }
}

export { NavigatorUtils };
