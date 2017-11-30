'use strict';

const chromedriver = require('chromedriver');

module.exports = () => {
  let server;
  return {
    start: () => {
      return Promise.resolve()
        .then(() => {
          chromedriver.start(['--port=4444', '--url-base=/wd/hub']);
        });
    },
    stop: () => {
      chromedriver.stop();
    }
  };
};
