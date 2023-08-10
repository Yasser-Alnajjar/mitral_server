const jsonServer = require("json-server");
const auth = require("json-server-auth");
const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = 9000;
app.db = router.db;
app.use(
  jsonServer.rewriter({
    "/users": "/660/users",
    "/users/:id": "/660/users/:id",
    "/users?departmentId=:id": "/660/users?departmentId=:id",
    "/departments": "/660/departments",
    "/departments/:id": "/660/departments/:id",
    "/branches": "/660/branches",
    "/branches/:id": "/660/branches/:id",
    "/tasks": "/660/tasks",
    "/tasks/:id": "/660/tasks/:id",
    "/employees": "/660/employees",
    "/employees/:id": "/660/employees/:id",
    "/attendance": "/660/attendance",
    "/attendance/:id": "/660/attendance/:id",
  })
);
app.use(middlewares);
app.use(auth);
app.use(router);
app.listen(PORT, () => {
  console.log(`Server is Running ${PORT}`);
});
module.exports = app;
