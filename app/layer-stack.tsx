"use client";

import JoinSocialBar from "./join-social-bar";
import { Layer, LayerImage, ParallaxRoot } from "./scene";

/**
 * Continuous stack driven by ONE scroll progress.
 * Bigger `distance` = moves more = feels closer (foreground).
 */
export default function LayerStack() {
  return (
    <>
      <ParallaxRoot className="bg-transparent">
      {/* ═══════════ WHO ARE WE FOR ═══════════ */}
      <div className="relative z-[1]">
        {/* Background — slow */}
        <Layer distance={50} className="-mt-[8vw]">
          <LayerImage src="/join-v1/layers/01-who-are-we-for-bg.png" />
        </Layer>

        <div className="pointer-events-none absolute inset-x-0 top-[clamp(4.5rem,17vw,8.5rem)] z-[1] px-5 text-center sm:px-6">
          {/* Text — under the people layer so it gets covered on scroll */}
          <Layer distance={20}>
            <h2 className="font-mona text-[clamp(2.75rem,12vw,5.5rem)] font-black uppercase leading-[0.92] tracking-tight text-black">
              WHO ARE WE FOR?
            </h2>
            <p className="mx-auto mt-5 max-w-[min(88%,18rem)] px-4 font-sans text-[clamp(1.15rem,4.5vw,2rem)] font-normal leading-snug text-black sm:max-w-[min(82%,20rem)] sm:px-6">
              Self-starters. Risk-takers.
              <br />
              People who want to turn their ideas into real things.
            </p>
          </Layer>
        </div>

        {/* People — above the text so “Problem Solvers” gets covered */}
        <Layer distance={280} className="relative z-[3] -mt-[218vw]">
          <LayerImage
            src="/join-v1/layers/02-people-1.png"
            alt="V1 members"
          />
        </Layer>
      </div>

      <div className="relative -mt-[11vw]">
      {/* ═══════════ VISION QUOTE + SPEAKERS ═══════════ */}
      <div className="relative z-[3] -mt-[158vw] min-h-[clamp(14rem,52vw,28rem)] py-8 pl-8 pr-5 sm:py-12 sm:pl-12 sm:pr-10">
        <Layer distance={320} className="relative z-[1] ml-1 mt-[clamp(6.5rem,24vw,10rem)] max-w-[min(38%,9.5rem)] sm:ml-2 sm:mt-[clamp(7.5rem,20vw,11.5rem)] sm:max-w-[min(32%,10.5rem)]">
          <div className="flex gap-4 sm:gap-6">
            <div
              aria-hidden
              className="w-1.5 shrink-0 self-stretch rounded-full bg-[#E5FF00] sm:w-2"
            />
            <p className="text-left font-mona text-[clamp(1.2rem,4.1vw,2.5rem)] font-extralight leading-[1.22] tracking-tight text-[#E5FF00]">
              We look for the{" "}
              <span className="underline decoration-[#E5FF00] decoration-2 underline-offset-[0.2em]">
                hardest problems
              </span>
              ,
              <br />
              and bet on{" "}
              <span className="underline decoration-[#E5FF00] decoration-2 underline-offset-[0.2em]">
                ourselves
              </span>{" "}
              to solve them.
            </p>
          </div>
        </Layer>

        <Layer
          distance={440}
          className="pointer-events-none absolute -right-[5vw] top-[clamp(-0.5rem,-1.5vw,1rem)] z-[2] w-[min(82vw,26rem)] sm:-right-[3vw] sm:w-[min(78vw,31rem)]"
        >
          <LayerImage
            src="/join-v1/layers/02-5-speakers.png"
            alt="V1 members presenting and building"
            className="-scale-x-100"
          />
        </Layer>
      </div>

      {/* ═══════════ WHO ARE WE ═══════════ */}
      <div className="relative z-[4] -mt-[14vw]">
        <Layer distance={500} className="-mt-[7vw]">
          <LayerImage src="/join-v1/layers/03-who-are-we-bg.png" />
        </Layer>

        <div className="pointer-events-none absolute inset-x-0 top-[clamp(3rem,10vw,5.5rem)] z-[2] px-5 sm:px-6">
          <Layer distance={500}>
            <div className="ml-auto max-w-[min(92%,22rem)] text-right sm:max-w-[min(90%,24rem)]">
              <h2 className="font-mona text-[clamp(2.75rem,12vw,5.5rem)] font-black uppercase leading-[0.92] tracking-tight text-black">
                WHO
                <br />
                ARE WE?
              </h2>
              <p className="mt-4 font-sans text-[clamp(1rem,3.2vw,1.45rem)] font-normal leading-snug text-black">
                V1 is the University of Michigan&apos;s
                <br />
                premier community for startups and entrepreneurship, supporting
                builders, creators, and founders every step of the way.
              </p>
            </div>
          </Layer>
        </div>

        <Layer
          distance={750}
          className="relative -top-[6vw] z-[3] -mt-[144vw] sm:-top-[0.5vw]"
        >
          <LayerImage
            src="/join-v1/layers/04-people-2.png"
            alt="V1 members at an event"
          />
        </Layer>

        {/* Same distance as 4people so the curve doesn’t slip and flash lime. */}
        <Layer distance={750} className="relative z-[6] -mt-[47vw] -mb-[55vw]">
          <LayerImage src="/join-v1/layers/05-how-to-join-bg.png" />

          <div className="relative z-10 -mt-[105vw] pt-2 font-mona">
            <div className="px-5 sm:px-6">
              <h2 className="font-mona text-[clamp(2.75rem,12vw,5.5rem)] font-black uppercase leading-[0.92] tracking-tight text-black">
                HOW
                <br />
                TO JOIN
              </h2>

              <p className="mt-5 max-w-md font-mona text-[clamp(1.1rem,3.5vw,2rem)] font-light leading-snug text-black">
                Drop your uniqname and we’ll send you our event schedule.
              </p>

              <form
                className="join-v1-form pointer-events-auto relative mt-7 flex w-full max-w-sm scroll-mt-6 items-center gap-2 rounded-full border-2 border-black bg-white p-1.5 sm:max-w-md"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="join-uniqname" className="sr-only">
                  Uniqname
                </label>
                <input
                  id="join-uniqname"
                  type="text"
                  name="uniqname"
                  placeholder="Uniqname"
                  autoComplete="username"
                  autoCapitalize="none"
                  autoCorrect="off"
                  enterKeyHint="send"
                  spellCheck={false}
                  required
                  className="min-w-0 flex-1 rounded-full bg-white px-4 py-2.5 font-mona text-[clamp(1rem,3.5vw,1.35rem)] font-bold leading-none text-black placeholder:text-black/70 focus:outline-none sm:px-5"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-black px-5 py-2.5 font-mona text-[clamp(0.85rem,2.8vw,1rem)] font-bold uppercase tracking-wide text-[#E5FF00] transition-opacity hover:opacity-90 active:opacity-80"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </Layer>
      </div>
      </div>

      </ParallaxRoot>

      <div
        aria-hidden
        className="h-[max(0px,calc(25vw-2.625rem))] w-full bg-[#E5FF00]"
      />
      <div aria-hidden className="h-6 w-full bg-[#E5FF00] sm:h-8" />
      <JoinSocialBar />
    </>
  );
}
