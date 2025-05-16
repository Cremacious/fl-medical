const Footer = () => {
  return (
    <>
      <footer className="customBlue mt-4 text-slate-800 py-6 px-16 tracking-wide">
        <div className="flex justify-between items-center max-lg:flex-col text-center flex-wrap gap-4">
          <p className="text-[15px] textOrange leading-loose">© Sunset Stash</p>
          <ul className="flex space-x-6 gap-y-2 max-lg:justify-center flex-wrap">
            <li>
              <a
                href="javascript:void(0)"
                className="text-[15px] hover:text-white"
              >
                {/* Terms of Service */}
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-[15px] hover:text-white"
              >
                {/* Privacy Policy */}
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="text-[15px] hover:text-white"
              >
                {/* Contact */}
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
