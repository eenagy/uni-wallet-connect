import { ReactNode } from 'react'

export const HeaderFrame = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="items-center grid grid-cols-1 justify-between 
                 flex-row w-full relative top-0 p-1 z-10"
    >
      {children}
    </div>
  )
}

export const HeaderControls = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-row items-center justify-end">{children}</div>
}

export const HeaderElement = ({ children }: { children: ReactNode }) => {
  return <div className="flex items-center justify-end flex-row-reverse md:flex-row ">{children}</div>
}

export const AccountElement = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="flex flex-row items-center bg-gray-200
                 rounded-xl whitespace-nowrap w-full cursor-pointer 
                 focus:border-blue-300 focus:border-solid focus:border pointer-events-auto"
    >
      {children}
    </div>
  )
}

export const NetworkCard = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="text-yellow-600 font-medium 
                bg-yellow-700 bg-opacity-5 rounded-xl p-2
                hidden sm:block mr-2"
    >
      {children}
    </div>
  )
}
export const BalanceText = ({ children }: { children: ReactNode }) => {
  return <div className="hidden md:block flex-shrink-0 font-weight-medium text-base px-2">{children}</div>
}
