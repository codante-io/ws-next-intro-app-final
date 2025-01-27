"use server";

import { redirect } from "next/navigation";

export async function deleteJob(formData: FormData) {
  const jobId = formData.get("id");

  const res = await fetch(
    `https://apis.codante.io/api/job-board/jobs/${jobId}`,
    {
      method: "DELETE",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to delete job");
  }

  redirect("/vagas");
}
