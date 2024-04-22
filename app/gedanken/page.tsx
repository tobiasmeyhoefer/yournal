import ThoughtsSkeleton from "@/components/ui/Skeletons/ThoughtsSkeleton"
import Thoughts from "@/components/ui/Thoughts"
import { Suspense } from "react"

const gedanken = async () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 pt-44 xl:pt-60 pb-12">
      <Suspense fallback={<ThoughtsSkeleton/>}>
        <Thoughts></Thoughts>
      </Suspense>
    </div>
  )
}

export default gedanken
