import { deleteThought, getThoughts } from "@/actions"
import ThoughtText from "./ThoughtText"
import { SubmitButton } from "./SubmitButton"

const Thoughts = async () => {
  const thoughts = await getThoughts()
  return (
    <>
      {thoughts.map((thought) => (
        <div key={thought.id} className="flex h-fit w-2/3 xl:w-1/3 flex-col p-4 border gap-4">
          <p className="text-gray-600">{thought.createdAt.toLocaleDateString()}</p>
          {/* <p>{thought.thought}</p> */}
          <ThoughtText thought={thought.thought}/>
          <form
            action={async () => {
              "use server"
              await deleteThought(thought.id)
            }}
          >
            {/* <button type="submit" className="bg-red-300 p-2 rounded-lg">
              Löschen
            </button> */}
            <SubmitButton text="Löschen"/>
          </form>
        </div>
      ))}
    </>
  )
}

export default Thoughts
