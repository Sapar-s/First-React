import Card from "./components/Card";
import "./style.css";

const news = [
  {
    title: "Unread туршив: Мобикомын 5G хэр хурдан бэ?",
    tag: "TECHWORM",
    imageSrc:
      "https://unread.today/files/969a1aed-77a4-45e9-b7b7-3ee2709aaf31/d0584600e553a746061271a53b6df3c3_square.gif",
  },
  {
    title: "Unread туршив: Мобикомын 5G хэр хурдан бэ?",
    tag: "TECHWORM",
    imageSrc:
      "https://unread.today/files/969a1aed-77a4-45e9-b7b7-3ee2709aaf31/d0584600e553a746061271a53b6df3c3_square.gif",
  },
  {
    title: "Unread туршив: Мобикомын 5G хэр хурдан бэ?",
    tag: "TECHWORM",
    imageSrc:
      "https://unread.today/files/969a1aed-77a4-45e9-b7b7-3ee2709aaf31/d0584600e553a746061271a53b6df3c3_square.gif",
  },
  {
    title: "Unread туршив: Мобикомын 5G хэр хурдан бэ?",
    tag: "TECHWORM",
    imageSrc:
      "https://unread.today/files/969a1aed-77a4-45e9-b7b7-3ee2709aaf31/d0584600e553a746061271a53b6df3c3_square.gif",
  },
];

const App = () => {
  return (
    <div class="bdy">
      {news.map((medee) => {
        return (
          <Card image={medee.imageSrc} title={medee.title} tag={medee.tag} />
        );
      })}
    </div>
  );
};

export default App;
