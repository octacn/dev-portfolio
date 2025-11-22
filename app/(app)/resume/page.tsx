import PageHeader from "@/components/page-header";

export default function Page() {
  return (
    <>
      <PageHeader
        heading="Resume"
        description="My professional experience and qualifications."
      />

      <div style={{ height: "130vh" }} className="mb-8">
        <iframe
          src="https://drive.google.com/file/d/10k4iubgQsWHtkmKDh3w_aYA42Zq_jzTn/preview"
          title="Resume"
          className="w-full h-full"
        />
      </div>
    </>
  );
}
