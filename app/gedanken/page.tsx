import { deleteThought, getThoughts } from "@/actions"
import ThoughtsSkeleton from "@/components/ui/Skeletons/ThoughtsSkeleton"
import Thoughts from "@/components/ui/Thoughts"
import { Suspense } from "react"

const gedanken = () => {

  return (
    <div className="w-full h-full flex flex-col items-center gap-4 pt-40">
      <Suspense fallback={<ThoughtsSkeleton/>}>
        <Thoughts></Thoughts>
      </Suspense>
    </div>
  )
}

export default gedanken
