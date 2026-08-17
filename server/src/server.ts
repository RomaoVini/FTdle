import type { AddressInfo } from "node:net";
import { app } from "./app.js";
import { env } from "./env.ts";

function bootstrap() {
    const server = app.listen(env?.PORT, () => {
        if (env?.NODE_ENV !== "prod") {
            const address = server.address() as AddressInfo;
            const host = address?.address === "::" ? "localhost" : address.address;
            const port = address.port;

            console.log(`> Servidor Http em http://${host}:${port}`);
        }
    });
};

bootstrap();