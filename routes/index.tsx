// import { useSignal } from "@preact/signals";
// import Counter from "../islands/Counter.tsx";
// import { useState } from 'preact/hooks';

import TabButton from "../components/TabButton.tsx";

const enum Tab {
  Home,
  Settings,
}

export default function Index() {
  // const [activeTab, setActiveTab] = useState<Tab>('Home');

  const activeTab: Tab = Tab.Home;

  // Content for each tab
  const renderHomeContent = () => (
    <div className="p-5 text-center">
      <input
        type="search"
        className="p-2 rounded-md border border-gray-300 shadow-inner w-full mx-auto"
        placeholder="Search"
        style={{
          backgroundImage: "url(search-icon.png)",
          backgroundPosition: "10px 10px",
          backgroundRepeat: "no-repeat",
          paddingLeft: "40px",
        }}
      />
    </div>
  );

  const renderSettingsContent = () => (
    <div className="p-5 text-center">
      <h1 className="text-2xl font-bold">Settings Screen</h1>
      <p>Welcome</p>
    </div>
  );

  return (
    <div className="mdiv">
      <div className="flex-grow overflow-y-auto pb-12">
        {renderHomeContent()}
      </div>

      <div
        style={{
          height: "50px", // Standard iOS tab bar height (can vary slightly with device/context)
          backgroundColor: "rgba(249, 249, 249, 0.9)", // Light, slightly translucent background
          borderTop: "0.5px solid #BCBCC0", // Thinner, more subtle border
          display: "flex",
          justifyContent: "space-around",
          alignItems: "stretch", // Stretch items to fill height
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backdropFilter: "saturate(180%) blur(20px)", // iOS-like blur effect
          WebkitBackdropFilter: "saturate(180%) blur(20px)", // For Safari
        }}
      >
        <TabButton
          icon="🏠"
          text="Home"
          isActive={activeTab ===
            Tab.Home} /*onClick={() => setActiveTab('Home')}*/
        />
        <TabButton
          icon="⚙️"
          text="Settings"
          isActive={false} /*onClick={() => setActiveTab('Settings')}*/
        />
      </div>
    </div>
  );
}
