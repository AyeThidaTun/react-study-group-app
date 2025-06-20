import { redirect } from "next/navigation";
export default function WelcomePage() {
  //gets redirected to home page
  redirect("/home");
}
