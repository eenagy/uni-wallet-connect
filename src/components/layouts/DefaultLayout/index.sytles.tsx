import { ReactNode } from 'react'

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col items-start overflow-x-hidden">{children}</div>
}

export const HeaderWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="w-full justify-between">{children}</div>
}

export const BodyWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="flex flex-col w-full items-center flex-1 overflow-y-auto overflow-x-hidden z-0 p-4 pt-5 md:p-4 md:pt-5"
      style={{ paddingTop: '100px' }}
    >
      {children}
    </div>
  )
}
export const Marginer = ({ children }: { children: ReactNode }) => {
  return <div style={{marginTop: '5rem'}}>{children}</div>
}
