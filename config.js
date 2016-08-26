var config = {}

config.host = process.env.HOST || "https://symmetrical-waffle.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "RzxV5LSarCReaRYR4XI3FLYncA2KmsMN7hC9oXHGv8b0ptwO92pe1hjGtOq2iw9NK4DcyfFi28pVkMjRShLopw==";
config.databaseId = "ToDoList";
config.collectionId = "Items";

module.exports = config