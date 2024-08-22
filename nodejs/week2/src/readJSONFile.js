import { readFile } from "node:fs/promises";
export async function readJSONFile(filePath) {
  try {
    const data = await readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error(
      "Something went wrong while trying to read JSON file:",
      error,
    );
    throw error;
  }
}
