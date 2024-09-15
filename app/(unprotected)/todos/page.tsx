"use server"

import TodosGrid from "@/components/Organisms/Layout/Grid/Todos"

const TodosPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-7xl mx-auto space-y-10">
        <TodosGrid />
      </div>
    </div>  )
}

export default TodosPage