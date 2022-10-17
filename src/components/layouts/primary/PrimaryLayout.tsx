import Head from 'next/head';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>YehiGo</title>
      </Head>
      <div
        {...divProps}
        className={`min-h-screen flex flex-col bg-slate-400 ${justify}`}
      >
        {/* Header */}
        <main className="px-5 border-r-2 border-red-400">{children}</main>
        {/* Footer if exists */}
      </div>
    </>
  );
};

export default PrimaryLayout;
