import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";

import { Provider } from "react-redux";

import store from "./store";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Suspense fallback={<h1>loading route ...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </React.StrictMode>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
