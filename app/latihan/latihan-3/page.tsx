import FeatureCard from "../../components/latihan-3/featureCard";

export default function Page() {

  const features = [
    {
      id: 1,
      title: "React Component",
      desc: "Icon adalah React Component, bukan image.",
      icon: "react",
    },
    {
      id: 2,
      title: "Server Rendering",
      desc: "Icon dirender di server.",
      icon: "server",
    },
    {
      id: 3,
      title: "Performance",
      desc: "JS client lebih ringan.",
      icon: "speed",
    },
  ];

  return (
    <main className="p-10 grid gap-6 md:grid-cols-3">
      {features.map(f => (
        <FeatureCard
          key={f.id}
          title={f.title}
          desc={f.desc}
          iconType={f.icon}
        />
      ))}
    </main>
  );
}
