import startUp from "./startUp";


let port = process.env.PORT || 3050;

startUp.app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
export default startUp.app;