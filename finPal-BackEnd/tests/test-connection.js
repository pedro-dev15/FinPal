import db from "../src/config/database.js";

async function testConnection() {
  try {
    console.log("🔄 Testando conexão com PostgreSQL...");
    const result = await db.raw("SELECT NOW()");
    console.log("✅ Conexão OK! Hora do servidor:", result.rows[0].now);
  } catch (error) {
    console.log("❌ Erro:", error.message);
  } finally {
    await db.destroy();
  }
}

testConnection();
