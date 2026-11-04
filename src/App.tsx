import { useCallback, useState } from 'react';

import ArchiveNotice from './components/layout/ArchiveNotice';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import AboutProject from './components/modals/AboutProject';
import AppDetails from './components/modals/AppDetails';
import Modal from './components/ui/Modal';
import { apps } from './data/apps';
import { useFavorites } from './hooks/useFavorites';
import { usePreferences } from './hooks/usePreferences';
import SubscriptionsPage from './pages/SubscriptionsPage';
import LibraryPage from './pages/LibraryPage';
import type { AppEntry, Section } from './types/app';

type ActiveModal = { type: 'app'; app: AppEntry } | { type: 'about' } | null;
export default function App() {
  const { theme, toggleTheme, plan, setPlan } = usePreferences();
  const { saved, toggle } = useFavorites();
  const [section, setSection] = useState<Section>('Каталог');
  const [mobile, setMobile] = useState(false);
  const [modal, setModal] = useState<ActiveModal>(null);
  const closeModal = useCallback(() => setModal(null), []);
  function navigate(nextSection: Section) {
    setSection(nextSection);
    setMobile(false);
  }
  const visibleApps = section === 'Избранное' ? apps.filter((app) => saved.includes(app.id)) : apps;
  return (
    <div className="shell">
      <Sidebar
        section={section}
        mobile={mobile}
        savedCount={saved.length}
        navigate={navigate}
        onClose={() => setMobile(false)}
        onAbout={() => setModal({ type: 'about' })}
      />
      {mobile && (
        <button className="scrim" aria-label="Закрыть меню" onClick={() => setMobile(false)} />
      )}
      <div className="workspace">
        <Header
          section={section}
          theme={theme}
          onToggleTheme={toggleTheme}
          onMenu={() => setMobile(true)}
          onAbout={() => setModal({ type: 'about' })}
        />
        <main>
          {section === 'Подписки' ? (
            <SubscriptionsPage
              plan={plan}
              onChange={setPlan}
              onCatalog={() => navigate('Каталог')}
            />
          ) : (
            <LibraryPage
              key={section}
              section={section}
              apps={visibleApps}
              saved={saved}
              toggle={toggle}
              onSelect={(app) => setModal({ type: 'app', app })}
              onCatalog={() => navigate('Каталог')}
            />
          )}
          <ArchiveNotice onAbout={() => setModal({ type: 'about' })} />
          <Footer />
        </main>
      </div>
      {modal && (
        <Modal onClose={closeModal}>
          {modal.type === 'app' ? (
            <AppDetails
              app={modal.app}
              isSaved={saved.includes(modal.app.id)}
              onToggle={toggle}
              hasSubscription={plan !== 'free'}
              onSubscribe={() => {
                closeModal();
                navigate('Подписки');
              }}
            />
          ) : (
            <AboutProject onClose={closeModal} />
          )}
        </Modal>
      )}
    </div>
  );
}
