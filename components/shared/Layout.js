import React, { Component } from 'react';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="../../static/css/main.css" />
      </Head>
      <header className="header-test">
        <h1>Header</h1>
      </header>
      {/* Header Component*/}
      <div className="container">{props.children}</div>

      {/* 
      Adjacent Header - css? works
      Layout - links css
      Adjacent Footer - css? works

      wraps 
      Content - content gets linked css 
      
*/}
      {/* Footer Component */}
    </React.Fragment>
  );
};

export default Layout;
