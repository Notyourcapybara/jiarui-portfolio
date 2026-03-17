import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects | Jiarui Wang",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}