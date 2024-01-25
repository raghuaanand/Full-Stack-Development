export function CreateTodo(){
    return <div className="flex flex-col gap-5">
        <input type="text" placeholder="title" className="border-gray-500 border-2 h-10 rounded-lg text-center"></input><br/>
        <input type="text" placeholder="description" className="border-gray-500 border-2 h-10 rounded-lg text-center"></input><br/>

        <button className="bg-blue-500 text-white h-10 rounded-lg">Add a todo</button>
    </div>
}