import PageHeader from "@/components/page-header";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Resume",
  description: "View my professional resume, work experience, education, skills, and qualifications as a Full Stack Developer.",
  path: "/resume",
});

export default function Page() {
  return (
    <>
      <PageHeader
        heading="Resume"
        description="My professional experience and qualifications."
      />

      <div className="mb-8 h-[50vh] md:h-[130vh]">
        <iframe
          src="https://drive.google.com/file/d/10k4iubgQsWHtkmKDh3w_aYA42Zq_jzTn/preview"
          title="Resume"
          className="w-full h-full"
        />
      </div>
    </>
  );
}
