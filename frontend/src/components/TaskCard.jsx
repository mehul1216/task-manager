function TaskCard({ title, status, onDelete, onEdit }) {
  return (
    <div>
      <h2>{title}</h2>

      <p>Status: {status}</p>

      <button onClick={onEdit}>
        Edit
      </button>

      <button onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default TaskCard;