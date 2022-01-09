import Header from './header';

/*this component may seem too simple or that it could be omited,
but with scalability in mind, having a layout component is a good idea*/

export default function Layout(): JSX.Element {
  return (
    <>
      <Header />
    </>
  );
}
