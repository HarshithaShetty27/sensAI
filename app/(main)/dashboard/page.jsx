import { userOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const IndusrtryInsightsPage = async () => {

  const { isOnboarded } = await userOnboardingStatus();
  if (!isOnboarded)
    redirect("/onboarding");

  return (
    <div>
      IndusrtryInsightsPage
    </div>
  )
}

export default IndusrtryInsightsPage;
