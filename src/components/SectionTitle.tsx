interface SectionTitleProps {
  title: string
  subtitle: string
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div>
      <div className="flex items-center gap-4 text-white">
        <div className="w-4 h-0.5 bg-slate-500" />
        <p className="font-medium text-sm tracking-[7.5px] uppercase">
          {title}
        </p>
      </div>

      <p className="text-white font-bold text-5xl pt-6">{subtitle}</p>
    </div>
  )
}
