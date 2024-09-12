const Footer = () => (
  <footer className="absolute bottom-4 text-gray-500 left-1/2 transform -translate-x-1/2 text-center whitespace-nowrap">
    <p>
      <span className="block sm:inline">
        Created with ❤ by{" "}
        <a
          className="underline"
          href="https://sirilisko.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          sirlisko
        </a>
        .
      </span>{" "}
      <span className="block sm:inline">
        View project source on{" "}
        <a
          className="underline"
          href="https://github.com/sirLisko/countdown"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        .
      </span>
    </p>
  </footer>
);

export default Footer;
