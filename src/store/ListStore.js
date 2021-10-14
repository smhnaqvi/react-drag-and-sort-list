const List = {
  list: [
    {
      title: "ReactJS",
      description: "Senior Frontend Developer",
      keywords: ["Javascript", "ReactJS", "CSS3", "HTML5"],
      icon: "",
      created_at: "",
      country: "Iran"
    },
    {
      title: "Photoshop",
      description: "Senior Frontend Developer",
      keywords: ["Photoshop", "UI"],
      icon: "",
      created_at: "",
      country: "Iran"
    },
    {
      title: "PHP",
      description: "Senior Backend Developer",
      keywords: ["PHP", "MySql", "Laravel8", "HTML", "CSS"],
      icon: "",
      created_at: "",
      country: "Iran"
    },
    {
      title: "GO",
      description: "Senior Backend Developer",
      keywords: ["Golang", "MySql", "MongoDB", "Rest Api"],
      icon: "",
      created_at: "",
      country: "Iran"
    },
    {
      title: "Affter Effect",
      description: "Motion Graphic Designer",
      keywords: ["Adobe Affter Effect", "PhotoShop"],
      icon: "",
      created_at: "",
      country: "Iran"
    }
  ],
  get: function () {
    if (localStorage.getItem("list")) {
      return JSON.parse(localStorage.getItem("list"));
    }
    return this.list;
  },
  save: (list) => {
    localStorage.setItem("list", JSON.stringify(list));
  }
};

export default List;
