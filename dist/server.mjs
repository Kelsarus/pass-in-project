import {
  registerForEvent
} from "./chunk-5IMVT66J.mjs";
import {
  errorHandler
} from "./chunk-H3OGMFSK.mjs";
import {
  checkIn
} from "./chunk-2NGY7XR7.mjs";
import {
  createEvent
} from "./chunk-I66ULZK6.mjs";
import "./chunk-KDMJHR3Z.mjs";
import {
  getAttendeeBadge
} from "./chunk-22QE3EOM.mjs";
import {
  getEventAttendees
} from "./chunk-DHK53M5A.mjs";
import {
  getEvent
} from "./chunk-5EPCSY3M.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform
} from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in construida durante o NLW Unite da Rocketseat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 8845, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
export {
  app
};
