import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import Loading from './Components/Loading/Loading';
import './index.css';

const root = document.getElementById('root');
const App = React.lazy(() => import('./App')); // Carga diferida

ReactDOM.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="preloading">
          <Loading></Loading>
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>,
  root
);
