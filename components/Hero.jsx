import Image from "next/image";

export function Hero() {
  return (
    <div className="flex gap-5 flex-col sm:flex-row">
      <Image
        alt="A photo of me"
        src="/photo2.png"
        className="rounded-full"
        width={278}
        height={278}
      />
      <div className="flex flex-col gap-5 my-auto text-center sm:text-left">
        <h1 className="text-secondary-700 text-4xl sm:text-6xl">Welcome</h1>
        <p>
          Amalie Rege the Space {" "}
          <a
            className="font-bold hover:underline"
            href="mailto:a.rege@hotmail.com"
          >
            a.rege@hotmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
