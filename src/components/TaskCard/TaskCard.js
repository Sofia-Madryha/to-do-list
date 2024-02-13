export const TaskCard = ({
    taskItem: { id, text},
    onDelete,
  }) => {
    return (
      <div>
        <p>
          {text}
        </p>
        <button
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    );
  };