import { useEffect } from 'react';

export const NotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.replace('/');
    }, 3000);
  }, []);

  return (
    <div
      style={{
        height: '60vh',
        marginTop: 175,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      id="locating-post"
    >
      <h1>404: Page Not Found</h1>
      <p>Redirecting to Home Page</p>
    </div>
  );
};
