import { lazy, Suspense } from "react";

import { loadRemoteApp } from "./loadRemoteApp";


export const RemoteApp = ({
    name,
    url,
    module,
    scope = "default",
    hideErrorBoundry = false,
    fallback = null,
    // Any props needed by the Remote app can be passed through
    ...props
}) =>
{
    // Custom hook for getting the URL for a particular remote
    // const remoteUrl = useRemoteUrl(remote);
    // Lazy loading the remote component
    const loadedComponent = loadRemoteApp({ name, url, module, scope });
    const Component = lazy(loadedComponent);
    // Wrapping the remote component in an ErrorBoundary and React.Suspense to safely render the component

    return (<Suspense fallback={ fallback }>
        <Component { ...props } />
    </Suspense>);
};