interface TimelineStep {
  number: number;
  title: string;
  description: string;
}

const steps: TimelineStep[] = [
  {
    number: 1,
    title: "Join Today",
    description:
      "Activate your membership with a fixed monthly payment (€120/month).",
  },
  {
    number: 2,
    title: "Get Your Welcome Package",
    description:
      "Enjoy your 3D skin scan, skin coach session, and personalised plan as a gift.",
  },
  {
    number: 3,
    title: "Choose Your Monthly Treatment",
    description: "Redeem one treatment worth up to €150 each month.",
  },
  {
    number: 4,
    title: "Upgrade Anytime",
    description:
      "Select advanced options and simply pay the difference, with your discount applied.",
  },
  {
    number: 5,
    title: "Earn Rewards",
    description:
      "Stay consistent for 12 months and receive one premium treatment free.",
  },
];

export function Timeline() {
  return (
    <div className="relative">
      {/* Timeline Line (hidden on mobile) */}
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600" />

      <div className="space-y-8">
        {steps.map((step) => (
          <div key={step.number} className="relative flex gap-6">
            {/* Number Circle */}
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-white flex items-center justify-center font-bold text-xl shadow-lg z-10">
              {step.number}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {step.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
