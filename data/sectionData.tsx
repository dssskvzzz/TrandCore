const sectionContent: { [key: string]: JSX.Element } = {
    dashboard: (
      <div className="p-8 w-full">
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
        <p className="text-lg text-neutral-600">Here is the dashboard content.</p>
      </div>
    ),
    table: (
      <div className="p-8 w-full">
        <h1 className="text-4xl font-bold mb-6">Table</h1>
        <p className="text-lg text-neutral-600">Here is the table content.</p>
      </div>
    ),
    settings: (
      <div className="p-8 w-full">
        <h1 className="text-4xl font-bold mb-6">Settings</h1>
        <p className="text-lg text-neutral-600">Here are the settings content.</p>
      </div>
    ),
    currencies: (
      <div className="p-8 w-full">
        <h1 className="text-4xl font-bold mb-6">Currencies</h1>
        <p className="text-lg text-neutral-600">Here is the currencies content.</p>
      </div>
    ),
  };
  
  export default sectionContent;
  