import ThemeContainer from "./Theme/ThemeContainer";

type SettingsProps = {
  theme: {
    bg: string;
    text: string;
  };
}


export default function Settings(props: SettingsProps) {
  return (
    <section className={`p-4 ${props.theme.bg} ${props.theme.text}`}>
      <h2 className="text-xl font-bold mb-4">Settings</h2>
      <ThemeContainer />
    </section>
  );
}
