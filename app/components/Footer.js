function Footer() {
  return (
    <div className="bg-yellow-500 text-black">
      <footer className="container mx-auto p-4 py-5">
        <ul className="flex items-center justify-between">
          <li>
            {" "}
            <h1 className="text-3xl">
              Tech<span className="font-semibold">Blog</span>
            </h1>
          </li>
          <li className="font-semibold uppercase">
            &#169; All rights reserved{" "}
            {new Date().getFullYear()}
          </li>
          <li>
            Developed by <span className="font-semibold">Hassanjavaid</span>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
