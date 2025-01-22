export default function Layout() {

  const contentArray = [
    "This is a scrollable div.",
    "Keep adding more content...",
    "And more content...",
    "Until it needs to scroll vertically.",
    "Voilà! You have a scrollable div.",
    "More and more content...",
    "Even more content...",
    "Still adding content...",
    "Yet more content...",
    "Content keeps coming...",
    "This is a lot of content!",
    "Scrolling is happening now...",
    "Content to make sure we scroll...",
    "And another content item...",
    "Here is some more content...",
    "Keep scrolling, there's more...",
    "Almost there...",
    "Just a few more items...",
    "And finally, the last piece of content!"
  ];

  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <div className="w-[300px] bg-gray-100 border shadow-xl"></div>
      <div className="flex-1 flex flex-col overflow-scroll prose ">
        <h1 className=" pl-10 py-4">Page title</h1>
        <div className="flex-1 bg-purple-200 prose">
          {contentArray.map((item, index) => (
            <p className="p-10 " key={index}>{item}</p>
          ))}
        </div>

      </div>

    </div>
  )
}
