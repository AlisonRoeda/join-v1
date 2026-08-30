import CuriosityIntro from "./curiosity-scroll";
import JoinViewportStability from "./join-viewport-stability";
import LayerStack from "./layer-stack";

export default function HomePage() {
  return (
    <main className="join-v1-page relative w-full overflow-clip bg-[#E5FF00] text-[#E5FF00]">
      <JoinViewportStability />
      <CuriosityIntro />
      <div
        className="relative z-10"
        style={{
          marginTop: "calc(var(--join-v1-viewport-height, 100svh) * -0.55)",
          marginBottom:
            "max(-18rem, calc(var(--join-v1-viewport-height, 100svh) * -0.3))",
        }}
      >
        <LayerStack />
      </div>
    </main>
  );
}
