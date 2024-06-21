const { MONGO_CONN } = process.env;
console.log(MONGO_CONN, "MONGO_CONN");
export const connectionStr = MONGO_CONN || "";
