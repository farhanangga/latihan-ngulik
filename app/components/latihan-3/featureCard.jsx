import IconBox from "./iconBox";
import ActionButton from "./actionButton";

export default function FeatureCard({ title, desc, iconType }) {
  return (
    <div className="p-6 rounded-xl border shadow-sm
                    hover:shadow-lg transition duration-300">

      <IconBox type={iconType} />

      <h2 className="mt-4 text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">{desc}</p>

      <div className="mt-4">
        <ActionButton />
      </div>
    </div>
  );
}
