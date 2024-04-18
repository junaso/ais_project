"use client";

import { Provider } from "react-redux";
import { store } from "redux/store"

type Props = {
  title: string
  children: React.ReactNode
}


const Page = ({ title, children }: Props) => {
  return (
    <>
      <title>{`${title} | 入室管理システム`}</title>
      <Provider store={store}>

        {children}
      </Provider>
    </>
  )
}

export default Page
