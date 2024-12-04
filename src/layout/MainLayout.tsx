import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div>
    <main className='w-full bg-extra-night-blue min-h-screen'>
      <div className='max-w-3xl mx-auto'>
        {children}
      </div>
    </main>
    <footer className='w-full bg-extra-night-blue text-center text-light-beige text-xs p-4'>
      Desarrollado por <a href="https://github.com/enockjeremi"target='blank' className='hover:text-light-brown'>@enockjeremi</a>, como complemento opcional de el Challenge de AluraCursos
    </footer>
  </div>
);

export default MainLayout;
