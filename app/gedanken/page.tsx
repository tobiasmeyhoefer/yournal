import { getThoughts } from "@/actions"

const gedanken = async () => {

  const thoughts = await getThoughts()

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 pt-32">
        {thoughts.map((thought) => (
          <div key={thought.id} className="flex h-fit w-1/3 flex-col p-4 border">
            <p className="text-gray-600">{thought.createdAt.toISOString()}</p>
            <p>{thought.thought}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default gedanken
