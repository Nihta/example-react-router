import { ActionFunction, redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export const action: ActionFunction = async ({ params }) => {
  // throw new Error("oh dang!");
  await deleteContact(params.contactId!);
  return redirect("/");
};
