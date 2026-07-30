import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();
  const versionPg = await database.query("SHOW server_version");

  response.status(200).json({
    updated_at: updateAt,
    version_pg: versionPg,
  })
}

export default status;