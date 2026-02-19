import { getAllModels } from "@/app/lib/models";
import { Model } from "../types";
export default async function ModelsListPage() {
  const modelsList = await getAllModels();
  return modelsList.map((model: Model) => <p key={model.id}>{model.name}</p>);
}
