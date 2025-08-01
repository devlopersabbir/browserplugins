import { createdAt, primaryId, updatedAt } from "@/utils/db-utility";

export const baseSchema = {
  id: primaryId("id"),

  createdAt: createdAt("created_at"),
  updatedAt: updatedAt("updated_at"),
};
