import ModulePage from "@/components/activities/ModulePage";
import { activityModules } from "@/lib/activities";

export default function CorporateTrainingPage() {
  return (
    <ModulePage
      module={activityModules["corporate-training"]}
    />
  );
}