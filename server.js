const jsonServer = require("json-server");
const auth = require("json-server-auth");
const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = 9000;
app.db = router.db;
const routes = {
  "/users": "/660/users",
  "/users/:id": "/660/users/:id",
  "/users?department=:departmentName": "/660/users?department=:departmentName",
  "/departments": "/660/departments",
  "/departments/:id": "/660/departments/:id",
  "/branches": "/660/branches",
  "/branches/:id": "/660/branches/:id",
  "/tasks": "/660/tasks",
  "/tasks/:id": "/660/tasks/:id",
  "/employees": "/660/employees",
  "/employees/:id": "/660/employees/:id",
  "/leaves": "/660/leaves",
  "/leaves/:id": "/660/leaves/:id",
};
app.use(jsonServer.rewriter(routes));
app.use(middlewares);
app.use(auth);
app.use(router);
app.listen(PORT, () => {
  console.log(`Server is Running ${PORT}`);
  console.log("Protected routes\n", routes);
});
module.exports = app;
