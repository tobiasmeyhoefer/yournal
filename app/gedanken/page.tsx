import { deleteThought, getThoughts } from "@/actions"

const gedanken = async () => {

  const thoughts = await getThoughts()

  return (
    <>
      <div className="w-full h-full flex flex-col items-center gap-4 pt-32">
        {thoughts.map((thought) => (
          <div key={thought.id} className="flex h-fit w-2/3 xl:w-1/3 flex-col p-4 border gap-4">
            <p className="text-gray-600">{thought.createdAt.toLocaleDateString()}</p>
            <p>{thought.thought}</p>
            <form action={async () => {
              "use server"
              await deleteThought(thought.id)
            }}>
              <button type="submit" className="bg-red-600 text-white p-2 rounded-lg">Delete</button>
            </form>
          </div>
        ))}
      </div>
    </>
  )
}

export default gedanken
