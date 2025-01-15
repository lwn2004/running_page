import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import useSiteMetadata from '@/hooks/useSiteMetadata';
import styles from './style.module.css';

const Layout = ({ children }: React.PropsWithChildren) => {
  const { siteTitle, description } = useSiteMetadata();

  return (
    <>
      <Helmet bodyAttributes={{ class: styles.body }}>
        <html lang="en" />
        <title>{siteTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="running" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="og:title" content="Running Page" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="我跑过了一些地方，希望随着时间推移，地图点亮的地方越来越多.
不要停下来，不要停下奔跑的脚步." />
        <meta property="og:image" content="http://q7.itc.cn/images01/20240325/72aef71183264797863dcc151d706902.jpeg" />
        <meta property="og:url" content="https://run.linwn.net" />
      </Helmet>
      <Header />
      <div className="mb-16 p-4 lg:flex lg:p-16">
        {children}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
