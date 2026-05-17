import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Secure AWS Data Ingestion & Migration",
    type: "AWS / Data Platform / Terraform",
    description:
      "Designed an enterprise AWS data lakehouse and Redshift migration platform using S3, Glue, Redshift, IAM/SSO, KMS, VPC endpoints, Aviatrix-controlled egress, EventBridge workflows, and Terraform-driven provisioning.",
    stack: ["AWS", "S3", "Glue", "Redshift", "Terraform", "KMS"],
  },
  {
    title: "Secure Agentic Workflow Gateway on AWS EKS",
    type: "EKS / AI Agents / Automation",
    description:
      "Built a secure agentic workflow gateway on EKS using Azure AD/OAuth2 Proxy, Redis, KEDA ScaledJobs, LiteLLM Gateway, GitHub API automation, Langfuse, Harbor, and Portworx-backed stateful services.",
    stack: ["EKS", "KEDA", "Redis", "LiteLLM", "OAuth2", "Python"],
  },
  {
    title: "Production Kubernetes Platform",
    type: "Kubernetes / Reliability",
    description:
      "Engineered EKS workloads with Helm deployments, autoscaling, resource optimization, Pod Disruption Budgets, rate limiting, and advanced cluster debugging using K9s for high availability.",
    stack: ["Kubernetes", "EKS", "Helm", "PDB", "K9s"],
  },
  {
    title: "Smart Kubernetes Alerting System",
    type: "Observability / AI",
    description:
      "Developed a RAG and OpenAI-powered alerting workflow that analyzes Prometheus/Grafana alerts and logs to generate context-aware root cause insights and remediation recommendations.",
    stack: ["Prometheus", "Grafana", "RAG", "OpenAI", "Automation"],
  },
];

const skills = [
  { label: "Cloud", items: "AWS, EC2, VPC, S3, IAM, KMS, Redshift, Lambda, Fargate, Athena, Transit Gateway, CloudTrail, EventBridge, SQS, SNS" },
  { label: "Containers", items: "Docker, Kubernetes, EKS, Helm, KEDA" },
  { label: "Infrastructure", items: "Terraform, IaC, modules, tagging, governance, state management, state locking" },
  { label: "CI/CD", items: "Jenkins, GitHub Actions, validate-plan-approve-apply" },
  { label: "Monitoring", items: "Prometheus, Grafana, New Relic, Matomo, Splunk, logging, alerting, RAG insights" },
  { label: "Security", items: "Vault, OAuth2 Proxy, Azure AD, private networking" },
];

const IconBubble = ({ children }) => (
  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-sm font-bold text-cyan-100">
    {children}
  </span>
);

export default function PortfolioWebsite() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080A0F] text-white selection:bg-cyan-300 selection:text-black">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[32rem] w-[32rem] rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="text-2xl font-black tracking-[0.28em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.25)] md:text-3xl">
          <span className="bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent">
            ABDULLAH
          </span>
        </div>
        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      <section className="relative z-10 mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur"
          >
            DevOps Engineer • Cloud Infrastructure Engineer • Automation Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl lg:text-8xl"
          >
            I build resilient cloud platforms and automated delivery systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-white/62"
          >
            I’m Mohammed Abdullah Ali Irshad, a DevOps Engineer focused on AWS, Kubernetes, Terraform, CI/CD, observability, infrastructure automation, and secure production-ready cloud systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#work" className="group rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-cyan-200">
              View Projects <span className="ml-2 inline-block transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </a>
            <a href="mailto:abd54del@gmail.com" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white/85 backdrop-blur transition hover:border-white/40 hover:bg-white/10">
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
              <div className="mb-5 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-white/25" />
                <span className="h-3 w-3 rounded-full bg-white/25" />
                <span className="h-3 w-3 rounded-full bg-white/25" />
              </div>
              <div className="space-y-4 font-mono text-sm">
                <p className="text-cyan-300">$ kubectl get engineer</p>
                <p className="text-white/75">NAME: Mohammed Abdullah Ali Irshad</p>
                <p className="text-white/75">ROLE: DevOps / Cloud Infrastructure Engineer</p>
                <p className="text-white/75">LOCATION: Hyderabad, India</p>
                <p className="text-white/75">STACK: AWS, Terraform, EKS, Docker, Jenkins</p>
                <p className="text-white/75">STATUS: production systems ready</p>
                <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                  <p className="text-cyan-100">CI/CD pipeline healthy</p>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "88%" }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                      className="h-full rounded-full bg-cyan-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="skills" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Capabilities</p>
        <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] md:text-6xl">What I work with</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.label}
              whileHover={{ y: -6 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur transition hover:border-cyan-200/40"
            >
              <IconBubble>{index + 1}</IconBubble>
              <h3 className="mt-6 text-xl font-semibold">{skill.label}</h3>
              <p className="mt-3 text-white/55">{skill.items}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="work" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Selected Work</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.04em] md:text-6xl">Projects that show real infrastructure thinking.</h2>
        <div className="mt-12 grid gap-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
              className="group grid gap-6 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur transition hover:border-white/25 md:grid-cols-[0.8fr_1.2fr_auto] md:items-center"
            >
              <div>
                <p className="text-sm text-cyan-200/80">{project.type}</p>
                <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
              </div>
              <p className="max-w-2xl leading-7 text-white/58">{project.description}</p>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {project.stack.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 backdrop-blur md:p-12">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Experience</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-[-0.04em] md:text-6xl">DevOps Engineer at Talent Cogent.</h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
            Currently working on cloud-native infrastructure, EKS platforms, Terraform CI/CD pipelines, monitoring systems, RAG-based alerting, secure AWS data workflows, and production troubleshooting.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
              <p className="font-semibold text-white">DevOps Engineer</p>
              <p className="mt-2 text-white/55">Talent Cogent · Oct 2025 — Present</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
              <p className="font-semibold text-white">IoT Intern</p>
              <p className="mt-2 text-white/55">Enrun India · Aug 2023 — Sep 2023</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Contact</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] md:text-6xl">Let’s build something reliable.</h2>
            <p className="mt-5 text-white/55">abd54del@gmail.com · Hyderabad, India</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a className="rounded-full border border-white/10 px-5 py-3 text-white/75 transition hover:bg-white/10" href="mailto:abd54del@gmail.com">Email</a>
            <a className="rounded-full border border-white/10 px-5 py-3 text-white/75 transition hover:bg-white/10" href="https://github.com/Abd-del1">GitHub</a>
            <a className="rounded-full border border-white/10 px-5 py-3 text-white/75 transition hover:bg-white/10" href="https://linkedin.com/in/mohammed-abdullah-ali-irshad/">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
