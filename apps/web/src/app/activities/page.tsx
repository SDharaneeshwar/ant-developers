import ModulePage from "@/components/activities/ModulePage";
import { activityModules } from "@/lib/activities";

export default function ActivitiesPage() {
  return (
    <ModulePage
      module={activityModules.activities}
    />
  );
}