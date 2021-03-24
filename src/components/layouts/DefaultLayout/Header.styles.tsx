import { ReactNode } from 'react'

export const HeaderFrame = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="relative top-0 z-10 flex-row items-center justify-between w-full p-1 grid grid-cols-1 
 "
    >
      {children}
    </div>
  )
}

export const HeaderControls = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-row items-center justify-end">{children}</div>
}

export const HeaderElement = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-row-reverse items-center justify-end md:flex-row ">{children}</div>
}

export const AccountElement = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="flex flex-row items-center w-full cursor-pointer pointer-events-auto bg-gray-200
  rounded-xl whitespace-nowrap 
 focus:border-blue-300 focus:border-solid focus:border"
    >
      {children}
    </div>
  )
}

export const NetworkCard = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="hidden mr-2 font-medium text-yellow-600 bg-yellow-700 
  bg-opacity-5 rounded-xl p-2
 sm:block"
    >
      {children}
    </div>
  )
}
export const BalanceText = ({ children }: { children: ReactNode }) => {
  return <div className="flex-shrink-0 hidden px-2 text-base md:block font-weight-medium">{children}</div>
}
