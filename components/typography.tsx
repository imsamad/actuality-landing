export const Heading = ({children,className}:{className?:string,children:string}) => {
  return <p className={`text-[#1F2937] ${className}`} >{children}</p>
}

export const SubHeading = ({children,className}:{className?:string,children:string}) => {
  return <p className={`text-xl text-[#6B7280] ${className}`} >{children}</p>
}
