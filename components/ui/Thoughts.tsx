import { deleteThought, getThoughts } from "@/actions"
import ThoughtText from "./ThoughtText"
import DeletePopup from "./popups/DeletePopup";

const weekday = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];

const Thoughts = async () => {
  const thoughts = await getThoughts()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {thoughts.map((thought) => (
        <div key={thought.id} className="flex lg:w-[400px] w-auto flex-col p-4 lg:m-0 mx-8 border border-b-4 border-r-4 rounded-lg border-black gap-4">
          <p className="text-neutral-600 dark:text-neutral-500">{weekday[thought.createdAt.getDay()] + " der "}{thought.createdAt.toLocaleDateString()}</p>
          {/* <p>{thought.thought}</p> */}
          <div className="flex flex-col h-fit gap-6 justify-between">
            <ThoughtText thought={thought.thought}/>
            <form
              action={async () => {
                "use server"
                await deleteThought(thought.id)
              }}
            >
              <DeletePopup/>
            </form>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Thoughts
