import "../styles/globals.scss";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import { motion } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <AnimatePresence style={{ width: "100%" }}>
        <motion.div
          key={router.route}
          inital="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
          style={{ width: "100%" }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
