import '@/styles/globals.css'
import { Provider } from "react-redux";
import store from '@/store';
import { RedditProvider } from "@/context/RedditContext";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <RedditProvider>
        <Component {...pageProps} />
      </RedditProvider>
    </Provider>
  );
}
