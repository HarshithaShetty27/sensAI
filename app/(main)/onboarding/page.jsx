import { industries } from "@/data/industries";
import OnboardingForm from "./_components/onboarding-form";
import { userOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";


const OnboardingPage = async () => {
   const {isOnboarded} = await userOnboardingStatus();
   if(isOnboarded)
    redirect("/dashboard");
    return (
        <main>
            <OnboardingForm industries={industries} />
        </main>
    )
}

export default OnboardingPage;
