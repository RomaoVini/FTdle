import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z.enum(["dev", "prod", "test"]).default("dev"),
    PORT: z.coerce.number().default(3000),
    DATABASE_URL: z.url("A URL do banco de dados deve ser uma URL válida.")
});

const { data: env, success, error } = envSchema.safeParse(process.env);

if (!success) {
    console.error("❌ Configuração inválida de variáveis de ambiente.");
    console.error(JSON.stringify(error.format(), null, 2));
    process.exit(1);
}

export { env };