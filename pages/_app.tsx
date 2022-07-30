 import "../styles/globals.css";
 import type { AppProps } from "next/app";

import { SessionProvider } from "next-auth/react";
import {Provider} from "react-redux"
import store from "../services/redux/store.js"; 
// ... (triple dots) mean there are other things in it
function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    // need to wrap apollo for graphql to work( apollo connect our graphql endpoint)
<Provider store={store}>
      <SessionProvider session={session}>
             {/* makes whole app scrollable and grey */}
        <div className="h-screen overflow-y-scroll bg-slate-200">
     

          <Component {...pageProps} />
        </div>
      </SessionProvider>
      </Provider>

  );
}

export default MyApp;