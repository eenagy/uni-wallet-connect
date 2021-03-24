import { ReactNode } from 'react'

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col items-start min-h-screen overflow-x-hidden">{children}</div>
}

export const HeaderWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="justify-between w-full">{children}</div>
}

export const BodyWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="z-0 flex flex-col items-center flex-1 w-full p-4 pt-5 overflow-x-hidden overflow-y-auto md:p-4 md:pt-5"
      style={{ paddingTop: '100px' }}
    >
      {children}
    </div>
  )
}
export const Marginer = () => {
  return <div style={{marginTop: '5rem'}}/>
}
