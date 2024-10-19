import Link from "./Link/Link";

type LinksProps = {
  links: {
    links: [
      {
        link: string;
        name: string;
        icon: string;
      }
    ];
  };
};

export default function Links({ ...props }: LinksProps) {
  return (
    <ul className="flex flex-wrap justify-center sm:flex-col gap-2">
      {props.links.links.map((link, index) => (
        <Link key={index} link={link.link} name={link.name} icon={link.icon} />
      ))}
    </ul>
  );
}
