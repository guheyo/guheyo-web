import Posts from "@/app/components/posts/Posts"
import Scrollbar from "@/app/components/base/scrollbar";
import CategoriesNavbar from "@/app/components/categories/CategoriesNavbar";
import {JSX} from 'react'

interface Params {
  params: {
    name: string
  }
}

export default async function Page({ params }: Params):Promise<JSX.Element> {
  return (
    <div className="flex flex-col">
      <Scrollbar
        z='z-40'
        negativeTop='-top-100'
        top='top-11'
      >
        <div className="pt-4 pb-4 md:pt-6 md:pb-6 px-2 bg-white">
          <CategoriesNavbar guildName={params.name} />
        </div>
      </Scrollbar>
      <div className="z-0 pt-16 px-2 pb-12">
        <Posts/>
      </div>
    </div>
  )
};