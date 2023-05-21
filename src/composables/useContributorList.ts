interface Contributor {
  avatar: string;
  name: string;
  title: string;
  link: string;
}

export function useContributorList(): Contributor[] {
  return [
    {
      avatar: "https://github.com/jimoh-sodiq.png",
      name: "Jimoh Sodiq",
      title: "Frontend Developer",
      link: "https://github.com/jimoh-sodiq",
    },
  ];
}
