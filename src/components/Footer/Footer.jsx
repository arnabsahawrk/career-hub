const Footer = () => {
  return (
    <div className="footer footer-center text-white gap-5">
      <h1 className="text-3xl font-extrabold">CareerHub</h1>
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </nav>
      <nav>
        <a>
          <img
            src="https://i.postimg.cc/B67gBcXW/social.png"
            alt="footer-icons"
          />
        </a>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Career Hub</p>
      </aside>
    </div>
  );
};

export default Footer;
