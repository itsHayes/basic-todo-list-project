import { Button, Card, CardContent, CardActions, Typography } from "@mui/material";

function TodoItem({ todo, fetchDetailsOfCurrentTodo }) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-between",
        margin: 1,
      }}
    >
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          {todo?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => fetchDetailsOfCurrentTodo(todo?.id)}
          sx={{
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            textTransform: "none",
            opacity: 0.85,
            "&:hover": {
              backgroundColor: "black",
              color: 'white',
              opacity: '1',
            },
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default TodoItem;
