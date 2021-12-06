import { TabView, TabPanel } from "primereact/tabview";
import "../css/HeaderBar.css";
import ConnectionTest from "./ConnectionTest";

const HeaderBar = () => {
  return (
    <div className="tabview-demo">
      <TabView className="tabview-custom">
        <TabPanel header="Acción 1" leftIcon="pi pi-calendar">
          <ConnectionTest></ConnectionTest>
        </TabPanel>
        <TabPanel header="Acción 2" rightIcon="pi pi-user">
          <p>2</p>
        </TabPanel>
        <TabPanel header="Acción 3" rightIcon="pi pi-cog">
          <p>3</p>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default HeaderBar;
