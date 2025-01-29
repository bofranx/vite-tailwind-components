import Select from "react-select";
import ContentArea from "./ContentArea";
import Header from "./Header";
import AsyncSelect from "react-select/async";
import Tabs from "./Tabs";


interface OptionType {
  value: string,
  label: string
}

export default function Layout() {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'chocolate2', label: 'Chocolate2' },
    { value: 'chocolate3', label: 'Chocolate3' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const filterOptions = (inputValue: string) => {
    return options.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue: string) =>
    new Promise<OptionType[]>((resolve) => {
      setTimeout(() => {
        resolve(filterOptions(inputValue));
      }, 1000);
    });


  return (
    <div className="flex flex-row h-screen overflow-hidden ">
      {/* Sidebar */}
      <div className="w-[300px] bg-gray-100 border shadow-xl"></div>


      {/* Content section */}
      <div className="flex-1 flex flex-col overflow-scroll  ">
        <Header>Devices</Header>
        <ContentArea>
          <Tabs >
            <div>Content for Tab 1</div>
            <div>Content for Tab 2</div>
            <div>Content for Tab 3</div>
          </Tabs>
        </ContentArea>

      </div>

    </div>
  )
}
