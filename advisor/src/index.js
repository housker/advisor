import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Wrapper = () => {
  /* some service worker logic - ignore for now */
    const [insertSubscription] = useMutation(subscriptionMutation);
    useEffect(() => {
      serviceWorker.register(insertSubscription);
    }, [])
    /* ignore the above snippet */
    return <App />;
  }
  
  ReactDOM.render(
    <ApolloProvider client={apolloClient}>
      <Wrapper />
    </ApolloProvider>,
    document.getElementById('root')
  );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
