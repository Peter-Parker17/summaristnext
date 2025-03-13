import Navbar from "../components/Navbar";
import "../src/app/assets/styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
