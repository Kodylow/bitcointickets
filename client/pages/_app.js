//setup for nextjs app wrapped components
//finnicky thing about next that this is how you have to import global css

import 'bootstrap/dist/css/bootstrap.css';

const BootStrapSetup = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default BootStrapSetup;
