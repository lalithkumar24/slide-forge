import { getAllProjects } from "@/actions/project";
import NotFound from "@/components/globals/not-found";
import ProjectCard from "@/components/globals/project-card";
import Projects from "@/components/globals/projects";

const DashboardPage = async () => {
  const allProjects = await getAllProjects();
  return (
    <div className="w-full flex flex-col gap-6 relative md:p-0 p-4">
      <div className="flex flex-col-reverse items-start w-full gap-6 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-col item-start">
          <h1 className="text-2xl font-semibold dark:text-primary backdrop-blur-lg">
            Projects
            <p className="text-base font-normal dark:text-secondary">
              All of your work in one palce
            </p>
          </h1>
        </div>
      </div>
      {/* {"projects"}*/}
      {allProjects.data && allProjects.data.length > 0 ? (
        <Projects projects={allProjects.data} />
      ) : (
        <NotFound />
      )}
    </div>
  );
};
export default DashboardPage;
