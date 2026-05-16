import ModulePage from "@/components/activities/ModulePage";
import { activityModules } from "@/lib/activities";

export default function TeamBuildingPage() {
  return (
    <ModulePage
      module={activityModules["team-building"]}
    />
  );
}