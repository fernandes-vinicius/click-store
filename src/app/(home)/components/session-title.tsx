type SessionTitleProps = React.ComponentProps<'p'>

export function SessionTitle({ children, ...props }: SessionTitleProps) {
  return (
    <p className="mb-3 pl-5 font-bold uppercase" {...props}>
      {children}
    </p>
  )
}
