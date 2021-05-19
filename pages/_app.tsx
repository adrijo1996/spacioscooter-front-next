import { UserProvider } from "@auth0/nextjs-auth0";
import { PrimaryLayout } from "../components/layouts/PrimaryLayout";


const App = ({ Component, pageProps}) => {
  return (
    <UserProvider>
      <PrimaryLayout>
        <Component {...pageProps} />
      </PrimaryLayout>
    </UserProvider>
  );
};

export default App;