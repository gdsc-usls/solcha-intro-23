export default function Footer() {
  return (
    <footer className="z-40 my-5 flex justify-center relative">
      <div className="text-center bg-white/70 border border-white rounded-xl py-4 px-6">
        <p className="text-sm font-google-reg">
          Powered by{" "}
          <a
            href="https://omsimos.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            OMSIMOS.COM
          </a>
        </p>
        <a
          href="https://github.com/hyamero"
          className="text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          @hyamero{" "}
        </a>
        —
        <a
          href="https://github.com/joshxfi"
          className="text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          @joshxfi
        </a>
      </div>
    </footer>
  );
}
