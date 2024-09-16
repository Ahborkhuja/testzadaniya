import TodoPage from '@/components/Organisms/Layout/Content/Todos'

const Todo = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      <TodoPage id={+(params.id)} />
    </div>
  )
}

export default Todo