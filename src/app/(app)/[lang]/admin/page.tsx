import { redirect } from "next/navigation";
import { routes } from "@/constants/routes";

export default async function AdminPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  redirect(routes.domains(lang));
}
