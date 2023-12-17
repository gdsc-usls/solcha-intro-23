export default function Footer() {
  return (
    <footer className="absolute bottom-0 z-50 flex justify-center w-full pb-3">
      <p className="bg-white rounded-full py-2 px-5 text-sm shadow-lg font-google-reg">
        Powered by
        <a
          href="https://omsimos.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          {" "}
          OMSIMOS
        </a>
        © Creatives 2023 —{" "}
        <a
          href="https://omsimos.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          OMSIMOS
        </a>
        .COM
      </p>
    </footer>
  );
}
