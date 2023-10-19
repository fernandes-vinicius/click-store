type SectionTitleProps = React.ComponentProps<'p'>

export function SectionTitle({ children, ...props }: SectionTitleProps) {
  return (
    <p className="mb-3 pl-5 font-bold uppercase" {...props}>
      {children}
    </p>
  )
}
