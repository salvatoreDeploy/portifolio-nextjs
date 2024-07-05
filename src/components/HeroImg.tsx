export function HeroImg() {
  return (
    <div className="relative max-w-[545px] w-[100%] h-[496px]">
      <div className="absolute w-[62%] h-[80%] left-[20%] top-[16%] bg-orange-500 rounded-2xl transform -rotate-11" />

      <div className="absolute w-[61%] h-[80%] left-[22%] top-[15%] bg-zinc-200 rounded-2xl">
        <div className="absolute left-0 right-0 top-[-23%] bottom-0 bg-hero-pattern rounded-2xl" />
      </div>
    </div>
  )
}
