import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ShopSphere. All rights reserved. A template by a world-class engineer.
        </p>
      </div>
    </footer>
  );
};

export default Footer;