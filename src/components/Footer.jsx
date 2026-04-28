function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-400">
          ©  { currentYear} Mohamed Ishaaq Meeran N. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;