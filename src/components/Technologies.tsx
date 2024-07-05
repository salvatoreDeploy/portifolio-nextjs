interface TechnologiesProps {
  tech: string
}

export function Technologies({ tech }: TechnologiesProps) {
  return (
    <div className="w-[100%]">
      <p className="font-medium text-base text-white">{tech}</p>
      <div className="max-w-[300px] h-1 mt-0.5 bg-zinc-800 mb-7 rounded" />
    </div>
  )
}
