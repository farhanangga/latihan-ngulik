import FeatureCard from "../../../components/latihan-3/mine/featureCard";

export default function Page() {

    const features = [
        {
            id : 1,
            title: "React Component",
            desc: "Icon adalah react Component, bukan image.",
            icon: "react",
        },
        {
            id : 2,
            title: "Server Rendering",
            desc: "Icon dirender di server.",
            icon: "server",
        },
        {
            id : 3,
            title: "Performance",
            desc: "JS client lebih ringan.",
            icon: "speed",
        },
    ]

    return (
        <div className="p-10 grid gap-6 md:grid-cols-3">
            {features.map(f => (
                <FeatureCard
                    key={f.id}
                    title={f.title}
                    desc={f.desc}
                    iconType={f.icon}
                />
            ))}
        </div>
    );

}