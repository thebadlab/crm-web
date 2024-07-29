import classNames from 'classnames';
import Sidebar from '~/components/sidebar/Sidebar';
import style from './Layout.module.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={style.Main}>
      <div className={style.MainTe}>
        <Sidebar />
        <main className={style.MainMain}>
          <div className={style.PageHeader}>
            <div className={style.PageHeaderWrapper}>
              <div className={style.PageHeaderContainer}>
                <div className={style.PageHeaderContent}>Page Header</div>
              </div>
            </div>
          </div>
          <div className={style.PageWrapper}>
            <div className={style.PageContainer}>
              <div
                className={classNames(
                  style.PageContent,
                  'vertical-scrollbar scrollbar-lg',
                )}
              >
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
