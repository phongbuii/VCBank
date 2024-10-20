import {NavigationContainerRef, CommonActions} from '@react-navigation/native';

let _navigator: NavigationContainerRef | null = null;

function setTopLevelNavigator(navigatorRef: NavigationContainerRef): void {
  _navigator = navigatorRef;
}

function navigate(routeName: string, params?: Record<string, unknown>): void {
  if (_navigator) {
    _navigator.dispatch(
      CommonActions.navigate({
        name: routeName,
        params,
      }),
    );
  } else {
    console.warn('Navigator is not set. Call setTopLevelNavigator first.');
  }
}

function goBack(): void {
  if (_navigator) {
    _navigator.dispatch(CommonActions.goBack());
  } else {
    console.warn('Navigator is not set. Call setTopLevelNavigator first.');
  }
}

// Add other navigation functions that you need and export them

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
};
