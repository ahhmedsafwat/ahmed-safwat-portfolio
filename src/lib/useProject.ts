// src/hooks/useProjects.ts
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Project } from "@/lib/type";

export const useProjects = () => {
  const { data } = useQuery<Project[]>({
    queryKey: ["fetchData"],
    queryFn: () =>
      axios.get("../../../db/projects.json").then((response) => response.data),
  });

  return data;
};
