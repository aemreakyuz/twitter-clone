export const customMiddleware = (store) => (next) => (action) => {
  console.log("%cCustom Middleware", "color:green ; font-size:20px");
  next(action);
};
