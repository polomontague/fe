import { routes } from "@/constants/routes";
import ProfileLayout from "@/components/Dashboard/Profile/ProfileLayout";
import { getServerUser } from "@/hooks/api/getUser";
import { UserRole } from "need4deed-sdk";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardAgentPage({ params }: { params: Promise<{ id: string; lang: string }> }) {
  const { id, lang } = await params;

  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const user = await getServerUser(cookieHeader);

  if (user?.role === UserRole.AGENT && String(user?.agentId) !== String(id)) {
    redirect(routes.organizations(lang));
  }
  return <ProfileLayout entityId={id} entityType="agent" />;
}
