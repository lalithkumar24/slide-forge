"use server";

import { client } from "@/lib/prisma";
import { onAuthenticateUser } from "./user";

export const getAllProjects = async () => {
  try {
    const checkUser = await onAuthenticateUser();
    if (checkUser.status !== 200 || !checkUser.user) {
      return { status: 403, error: "User Not Authenticated" };
    }

    const projects = await client.project.findMany({
      where: {
        userId: checkUser.user.id,
        isDeleted: false,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    if (projects.length === 0) {
      return {
        status: 404,
        error: "No Projects Found",
      };
    }
    return {
      status: 200,
      data: projects,
    };
  } catch (error) {
    console.log("Error", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

export const getRecentProject = async () => {
  try {
    const checkUser = await onAuthenticateUser();
    if (checkUser.status !== 200 || !checkUser.user) {
      return { status: 403, error: "User Not Authenticated" };
    }

    const projects = await client.project.findMany({
      where: {
        userId: checkUser.user.id,
        isDeleted: false,
      },
      orderBy: {
        updatedAt: "desc",
      },
      take: 5,
    });
    if (projects.length === 0) {
      return {
        status: 404,
        error: "No Recent Projects Found",
      };
    }
    return { status: 200, data: projects };
  } catch (error) {
    console.log("Error: ", error);

    return { status: 500, error: "Internal Server Error" };
  }
};

export const recoverProject = async (projectId: string) => {
  try {
    const checkUser = await onAuthenticateUser();
    if (checkUser.status !== 200 || !checkUser.user) {
      return { status: 403, error: "User Not Authenticated" };
    }

    const updatedProject = await client.project.update({
      where: {
        userId: checkUser.user.id,
        id: projectId,
        isDeleted: true,
      },
      data: {
        isDeleted: false,
      },
    });
    if (!updatedProject) {
      return {
        status: 404,
        error: "Faild to Recover Project",
      };
    }
    return {
      status: 200,
      data: updatedProject,
    };
  } catch (error) {
    console.log("Error: ", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

export const deleteProject = async (projectId: string) => {
  try {
    const checkUser = await onAuthenticateUser();
    if (checkUser.status !== 200 || !checkUser.user) {
      return { status: 403, error: "User Not Authenticated" };
    }
    const deletedProject = await client.project.update({
      where: {
        userId: checkUser.user.id,
        id: projectId,
      },
      data: {
        isDeleted: true,
      },
    });
    if (!deletedProject) {
      return {
        status: 404,
        error: "Failed to delete project",
      };
    }
    return {
      status: 200,
      data: deletedProject,
    };
  } catch (error) {
    console.log("Error: ", error);
    return { status: 500, error: "Internal Server Error" };
  }
};
