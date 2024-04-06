import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Skeleton className="w-[300px] h-[400px] rounded-lg" />
    </div>
  )
}

export default Loading
