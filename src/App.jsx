function App() {
  return (
    <section>
      <Header />
      <div className="grid grid-cols-[1fr_2fr]">
        <Navigation />
        <Content />
      </div>
      <Footer />
    </section>
  );
}

function Header() {
  return <header>[SOCIAL]</header>;
}

function Navigation() {
  return <nav>[NAVIGATION]</nav>;
}

function Footer() {
  return <footer>[FOOTER]</footer>;
}

function Content() {
  return <main>[CONTENT]</main>;
}

export default App;
