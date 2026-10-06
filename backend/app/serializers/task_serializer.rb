class TaskSerializer
  def self.call(task)
    {
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
      due_date: task.due_date
    }
  end
end