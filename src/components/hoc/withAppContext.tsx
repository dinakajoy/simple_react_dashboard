import AppContext from '../../context/AppContext';

export default function withAppContext(WrappedComponent: React.ElementType) {
  return function WithAppContext(props: JSX.IntrinsicAttributes) {
    return (
      <AppContext.Consumer>
        {state => <WrappedComponent {...props} appContext={state} />}
      </AppContext.Consumer>
    );
  };
}
