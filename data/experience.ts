import type { Experience, Skill } from "~/types/experience";

export const experience: Experience[] = [
  {
    position: "DevOps Engineer",
    company: "KubixCloud",
    period: "2021 - Present",
    description: `
      Led the successful migration from on-premise to AWS cloud infrastructure at KubixCloud. 
      Specialized in Kubernetes orchestration, CI/CD implementation, and infrastructure as code 
      using Terraform. Implemented comprehensive monitoring and logging solutions with Prometheus, 
      Grafana, and ELK Stack.

      Working with: AWS, Kubernetes, Docker, GitLab CI, MongoDB, PostgreSQL, and various DevOps tools 
      to maintain high availability and security standards.
    `
      .trim()
      .replace(/^\s+/gm, ""),
  },
  // Diğer deneyimler buraya eklenebilir
];

export const skills: Skill[] = [
  { name: "DevOps Technologies", level: 87 },
  { name: "Database Management", level: 90 },
  { name: "Frontend Development", level: 65 },
  { name: "Project Management", level: 80 },
  { name: "Backend Development", level: 35 },
];
