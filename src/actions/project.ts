"use server";

import { client } from "@/lib/prisma";
import { onAuthenticateUser } from "./user";

export const getAllProjects = async () => {
  try {
    const chekUser = await onAuthenticateUser();
    if (chekUser.status !== 200 || !chekUser.user) {
      return { status: 403, error: "User Not Authenticated" };
    }

    const projects = await client.project.findMany({
      where: {
        userId: chekUser.user.id,
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
    const chekUser = await onAuthenticateUser();
    if (chekUser.status !== 200 || !chekUser.user) {
      return { status: 403, error: "User Not Authenticated" };
    }

    const projects = await client.project.findMany({
      where: {
        userId: chekUser.user.id,
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
