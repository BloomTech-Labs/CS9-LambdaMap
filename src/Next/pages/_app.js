import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import css from '../static/css/reset.less';


const reducer = (state = {user: ''}, action) => {
    switch (action.type) {
        case 'LOGIN':
          return {...state, user: action.payload};
        case 'UPDATESTORE':
          return {...state, user: {...state.user, store: action.payload}};
    }
};

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
*/
const makeStore = (initialState, options) => {
    return createStore(reducer, initialState);
};

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return {pageProps};

    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
          <html>
            <head>
              <title>Lambda Map</title>
            </head>
            <body>
              <Container>
                  <Provider store={store}>
                      <Component {...pageProps} />
                  </Provider>
              </Container>
            </body>
          </html>
        );
    }

}

export default withRedux(makeStore)(MyApp);
