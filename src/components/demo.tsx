import { useScreenSize}  from "@/hooks/use-screen-size"
import { PixelTrail } from "@/components/ui/pixel-trail"
import { GooeyFilter } from "@/components/ui/gooey-filter"

function GooeyDemo() {
  const screenSize = useScreenSize()

  console.log("[GooeyDemo] Rendering pixel trail! size:", screenSize);

  return (
    <div className="absolute inset-0 w-full h-[60vh] pointer-events-none z-[100] mix-blend-screen">
      <GooeyFilter id="gooey-filter-pixel-trail" strength={4} />

      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{ filter: "url(#gooey-filter-pixel-trail)" }}
      >
        <PixelTrail
          pixelSize={screenSize.lessThan(`md`) ? 16 : 24}
          fadeDuration={1000}
          delay={50}
          pixelClassName="bg-[#ffb703] mix-blend-screen shadow-[0_0_15px_#ffb703]"
        />
      </div>
    </div>
  )
}

export { GooeyDemo }