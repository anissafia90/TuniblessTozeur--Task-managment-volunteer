import { RecentProjects } from "@/components/dashboard/recnt-projects";
import { StatsCard } from "@/components/dashboard/stat-card";
import { StatisticsCharts } from "@/components/dashboard/statistics-charts";
import { Loader } from "@/components/loader";
import { UpcomingTasks } from "@/components/upcoming-tasks";
import { useGetWorkspaceStatsQuery } from "@/hooks/use-workspace";
import type {
  Project,
  ProjectStatusData,
  StatsCardProps,
  Task,
  TaskPriorityData,
  TaskTrendsData,
  WorkspaceProductivityData,
} from "@/types";
import { useSearchParams } from "react-router";
import { AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const workspaceId = searchParams.get("workspaceId");

  const { data, isPending, isError, error } = useGetWorkspaceStatsQuery(
    workspaceId
  ) as {
    data?: {
      stats: StatsCardProps;
      taskTrendsData: TaskTrendsData[];
      projectStatusData: ProjectStatusData[];
      taskPriorityData: TaskPriorityData[];
      workspaceProductivityData: WorkspaceProductivityData[];
      upcomingTasks: Task[];
      recentProjects: Project[];
    };
    isPending: boolean;
    isError: boolean;
    error: Error | null;
  };

  if (!workspaceId) {
    return (
      <div dir="rtl" className="space-y-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">لوحة التحكم</h1>
          <p className="text-gray-600 text-lg">
            مرحباً بك في منصة تونيبليس توزر
          </p>
        </div>

        <div className="rounded-xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-200 mb-4">
            <AlertCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            اختر مساحة عمل
          </h3>
          <p className="text-gray-700 text-lg">
            يرجى تحديد مساحة عمل من القائمة العلوية لعرض إحصائيات ومعلومات
            الفريق.
          </p>
          <p className="text-gray-600 text-sm mt-4">
            💡 إذا لم تكن لديك مساحة عمل، يمكنك إنشاء واحدة جديدة من القائمة
            الرئيسية
          </p>
        </div>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div dir="rtl" className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">لوحة التحكم</h1>
        <div className="rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-red-100 p-8">
          <div className="flex items-start gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-200 flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                حدث خطأ
              </h3>
              <p className="text-red-700 text-lg">
                {error?.message ||
                  "عذراً، حدث خطأ أثناء تحميل البيانات. يرجى المحاولة مرة أخرى."}
              </p>
              <p className="text-red-600 text-sm mt-3">
                🔄 يمكنك تحديث الصفحة أو العودة والمحاولة لاحقاً
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">لوحة التحكم</h1>
          <p className="text-gray-600 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span>عرض شامل لإحصائيات مساحة العمل والمشاريع</span>
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-blue-600" />
          الإحصائيات الرئيسية
        </h2>
        <StatsCard data={data.stats} />
      </div>

      {/* Charts Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-purple-600" />
          التقارير والتحليلات
        </h2>
        <StatisticsCharts
          stats={data.stats}
          taskTrendsData={data.taskTrendsData}
          projectStatusData={data.projectStatusData}
          taskPriorityData={data.taskPriorityData}
          workspaceProductivityData={data.workspaceProductivityData}
        />
      </div>

      {/* Recent Projects and Upcoming Tasks */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            📁 المشاريع الحديثة
          </h2>
          <RecentProjects data={data.recentProjects} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ⏰ المهام القادمة
          </h2>
          <UpcomingTasks data={data.upcomingTasks} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
