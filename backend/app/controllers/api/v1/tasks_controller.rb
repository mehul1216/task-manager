class Api::V1::TasksController < ApplicationController
  def index
    tasks = Task.all
    
    render json: tasks.map { |task| TaskSerializer.call(task) }
  end

  def show
    task = Task.find_by(id: params[:id])

    if task
      render json: TaskSerializer.call(task)
    else
      render json: { error: "Task not found" }, status: :not_found
    end
  end

  def create
    task = Task.new(task_params)

    if task.save
      render json: TaskSerializer.call(task), status: :created
    else
      render json: { errors: task.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def update
    task = Task.find_by(id: params[:id])

    if task.nil?
      render json: { error: "Task not found" }, status: :not_found
      return
    end

    if task.update(task_params)
      render json: TaskSerializer.call(task)
    else
      render json: { errors: task.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def destroy
    task = Task.find_by(id: params[:id])

    if task.nil?
      render json: { error: "Task not found" }, status: :not_found
      return
    end

    task.destroy
    head :no_content
  end


  def show
    task = Task.find_by(id: params[:id])

    render json: TaskSerializer.call(task)
  end

  private

  def task_params
    params.require(:task).permit(
      :title,
      :description,
      :status,
      :due_date
    )
  end
end