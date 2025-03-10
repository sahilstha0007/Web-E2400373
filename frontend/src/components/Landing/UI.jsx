import { atom, useAtom } from "jotai";
import { useEffect } from "react";
// import Home from "./Home";
const pictures = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  // 4 pic
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        <a
          className="pointer-events-auto mt-10 ml-10"
          href="</Home>"
        >
          <img className="w-20" src="/images/mvic.png" />
        </a>
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none">
        <div className="relative">
          <div className="bg-white/0 flex items-center gap-8 w-max px-8" style={{ animation: "horizontal-scroll linear 16s infinite", transition: "transform 0.5s ease-in-out" }}>
            <h1 className="shrink-0 text-white text-10xl font-black ">
              MVIC
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
            Start Learning
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
            Unlock Now
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
            Complete Module
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
            Get Started
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
            Achievements
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              Practice
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Creative
            </h2>
          </div>
          <div className="absolute top-0 left-0 bg-white/0 flex items-center gap-8 px-8 w-max" style={{ animation: "horizontal-scroll-2 linear 16s infinite", transition: "transform 0.5s ease-in-out" }}>
            <h1 className="shrink-0 text-white text-10xl font-black ">
              Lms
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              Mid Valley International Collage
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
            Stay On Track
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Practical
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Tutorials
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Learn
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              Practice
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Creative
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
