import { Skeleton } from "../skeleton";

const ThoughtsSkeleton = () => {
  return ( 
    <>
      <Skeleton className="w-2/3 xl:w-1/3 h-[300px]"/>
      <Skeleton className="w-2/3 xl:w-1/3 h-[200px]"/>
    </>
   );
}
 
export default ThoughtsSkeleton;