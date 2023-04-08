import { ComponentType } from 'react';
import LoadingIndicator from '../components/loaders/LoadingIndicator';

export default function reloadOnFail(
  fn: { (): Promise<typeof import("../pages/Home")>; (): Promise<typeof import("../pages/Test")>; (): Promise<{ default: ComponentType<any>; }>; }
): Promise<{ default: React.ComponentType<any> }> {
  return new Promise(resolve => {
    fn()
      .then(resolve)
      .catch(() => {
        window.location.reload();
        return resolve({ default: LoadingIndicator });
      });
  });
}