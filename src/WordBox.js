import { AlertContextProvider } from "./alertsProvider";
import Form from "./Form";
import "./WordBox.css";

export default function WordBox() {
  return (
    <AlertContextProvider>
      <Form/>
    </AlertContextProvider>
  );
}