import React from 'react';
import ContentLoader from 'react-content-loader';

export const Loader = props => {

  return (
    <ContentLoader
    speed={2}
    width={600}
    height={160}
    viewBox="0 0 600 160"
      backgroundColor="#8a9bff"
    foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="120" y="6" rx="4" ry="4" width="450" height="38" />
      <rect x="80" y="6" rx="4" ry="4" width="35" height="38" />
      <rect x="120" y="55" rx="4" ry="4" width="450" height="38" />
      <rect x="80" y="55" rx="4" ry="4" width="35" height="38" />
      <rect x="120" y="104" rx="4" ry="4" width="450" height="38" />
      <rect x="80" y="104" rx="4" ry="4" width="35" height="38" />

    </ContentLoader>
  )
}


