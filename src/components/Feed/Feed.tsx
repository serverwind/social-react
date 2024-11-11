type FeedProps = {
  theme: {
    bg: string;
    text: string;
  };
}

export default function Feed(props: FeedProps) {
  return <div className={ `${props.theme.bg} ${props.theme.text} p-4` }>Feed</div>;
}
